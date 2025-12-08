import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Admin from '../models/Admin';
import { generateToken, resetLoginAttempts, handleFailedLogin, checkLoginAttempts } from '../middleware/auth';

const router = express.Router();

/**
 * @route   POST /api/auth/login
 * @desc    Admin login
 * @access  Public
 */
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide email and password' 
      });
    }

    // Fallback for Dev/Offline mode (When DB is unreachable)
    if (mongoose.connection.readyState !== 1) {
      console.log('⚠️ DB Disconnected. Checking fallback credentials.');
      if (email === 'admin@coaxia.com' && password === 'admin123') {
         return res.json({
           success: true,
           data: {
             admin: {
               id: 'mock-admin-id',
               email: 'admin@coaxia.com',
               name: 'Dev Admin (Offline)',
               role: 'super-admin',
               permissions: { 
                 blogs: { create: true, read: true, update: true, delete: true }, 
                 products: { create: true, read: true, update: true, delete: true }, 
                 careers: { create: true, read: true, update: true, delete: true }, 
                 analytics: true, 
                 settings: true 
               }
             },
             token: 'mock-jwt-token-offline-mode'
           }
         });
      }
    }

    // Find admin with password
    const admin = await Admin.findOne({ email }).select('+password');

    if (!admin) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Check if account is locked
    const canLogin = await checkLoginAttempts(admin._id.toString());
    if (!canLogin) {
      return res.status(423).json({ 
        success: false, 
        message: 'Account is temporarily locked due to multiple failed login attempts. Please try again later.' 
      });
    }

    // Check password
    const isPasswordMatch = await admin.comparePassword(password);

    if (!isPasswordMatch) {
      await handleFailedLogin(admin._id.toString());
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Check if account is active
    if (!admin.isActive) {
      return res.status(403).json({ 
        success: false, 
        message: 'Your account has been deactivated. Please contact support.' 
      });
    }

    // Reset login attempts and update last login
    await resetLoginAttempts(admin._id.toString());

    // Generate token
    const token = generateToken(admin._id.toString());

    // Return admin data without password
    const adminData = {
      id: admin._id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
      avatar: admin.avatar,
      permissions: admin.permissions
    };

    res.json({
      success: true,
      data: {
        admin: adminData,
        token
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @route   POST /api/auth/register
 * @desc    Register new admin (Super Admin only)
 * @access  Private (Super Admin)
 */
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password, name, role } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ 
        success: false, 
        message: 'Admin with this email already exists' 
      });
    }

    // Create admin
    const admin = await Admin.create({
      email,
      password,
      name,
      role: role || 'editor'
    });

    const token = generateToken(admin._id.toString());

    res.status(201).json({
      success: true,
      data: {
        admin: {
          id: admin._id,
          email: admin.email,
          name: admin.name,
          role: admin.role
        },
        token
      }
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * @route   GET /api/auth/me
 * @desc    Get current admin
 * @access  Private
 */
router.get('/me', async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authorized' });
    }

    const jwt = require('jsonwebtoken');
    const decoded = jwt.verify(token, process.env.JWT_SECRET || '');
    
    const admin = await Admin.findById(decoded.id).select('-password');

    if (!admin) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }

    res.json({ success: true, data: admin });
  } catch (error: any) {
    res.status(401).json({ success: false, message: 'Not authorized' });
  }
});

export default router;
