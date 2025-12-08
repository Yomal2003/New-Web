import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

if (!process.env.JWT_SECRET) {
  console.error('❌ JWT_SECRET environment variable is not defined');
}

const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_EXPIRE = '7d';

export interface AuthRequest extends Request {
  admin?: any;
}

/**
 * Generate JWT token
 */
export const generateToken = (adminId: string): string => {
  return jwt.sign({ id: adminId }, JWT_SECRET, {
    expiresIn: JWT_EXPIRE
  });
};

/**
 * Verify JWT token middleware
 */
export const authenticateAdmin = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let token: string | undefined;

    // Get token from header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      res.status(401).json({ success: false, message: 'Not authorized to access this route' });
      return;
    }

    // Mock Token Bypass for Offline Mode
    if (token === 'mock-jwt-token-offline-mode') {
       req.admin = {
         id: 'mock-admin-id',
         email: 'admin@coaxia.com',
         role: 'super-admin',
         permissions: { 
           blogs: { create: true, read: true, update: true, delete: true }, 
           products: { create: true, read: true, update: true, delete: true }, 
           careers: { create: true, read: true, update: true, delete: true }, 
           analytics: true, 
           settings: true 
         }
       };
       return next();
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    // Get admin from token
    const admin = await Admin.findById(decoded.id).select('-password');

    if (!admin) {
      res.status(401).json({ success: false, message: 'Admin not found' });
      return;
    }

    if (!admin.isActive) {
      res.status(401).json({ success: false, message: 'Account is deactivated' });
      return;
    }

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Not authorized to access this route' });
  }
};

/**
 * Check permissions middleware
 */
export const checkPermission = (resource: 'blogs' | 'products' | 'careers', action: 'create' | 'update' | 'delete') => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    const admin = req.admin;

    if (!admin) {
      res.status(401).json({ success: false, message: 'Not authenticated' });
      return;
    }

    // Super admin has all permissions
    if (admin.role === 'super-admin') {
      next();
      return;
    }

    // Check specific permission
    if (admin.permissions[resource] && admin.permissions[resource][action]) {
      next();
    } else {
      res.status(403).json({ 
        success: false, 
        message: `You don't have permission to ${action} ${resource}` 
      });
    }
  };
};

/**
 * Check if user is super admin
 */
export const isSuperAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (req.admin && req.admin.role === 'super-admin') {
    next();
  } else {
    res.status(403).json({ 
      success: false, 
      message: 'Only super admins can access this resource' 
    });
  }
};

/**
 * Rate limiting for login attempts
 */
export const checkLoginAttempts = async (adminId: string): Promise<boolean> => {
  const admin = await Admin.findById(adminId);
  
  if (!admin) return false;

  if (admin.lockUntil && admin.lockUntil > new Date()) {
    return false; // Account is locked
  }

  return true;
};

/**
 * Handle failed login
 */
export const handleFailedLogin = async (adminId: string): Promise<void> => {
  const admin = await Admin.findById(adminId);
  
  if (!admin) return;

  admin.loginAttempts += 1;

  // Lock account after 5 failed attempts
  if (admin.loginAttempts >= 5) {
    admin.lockUntil = new Date(Date.now() + 30 * 60 * 1000); // Lock for 30 minutes
  }

  await admin.save();
};

/**
 * Reset login attempts on successful login
 */
export const resetLoginAttempts = async (adminId: string): Promise<void> => {
  await Admin.findByIdAndUpdate(adminId, {
    loginAttempts: 0,
    lockUntil: undefined,
    lastLogin: new Date()
  });
};
