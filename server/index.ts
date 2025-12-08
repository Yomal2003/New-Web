import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';

// Routes
import authRoutes from './routes/auth';
import blogRoutes from './routes/blogs';
import productRoutes from './routes/products';
import careerRoutes from './routes/careers';
import analyticsRoutes from './routes/analytics';

// Load env vars - try multiple paths for different environments
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });
dotenv.config(); // Also load from default .env location

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Connect to database
connectDatabase();

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/products', productRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/analytics', analyticsRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════╗
║                                                   ║
║   🚀 Coaxia Admin API Server                     ║
║                                                   ║
║   🌐 Port: ${PORT}                                  ║
║   📦 Environment: ${process.env.NODE_ENV || 'development'}               ║
║   🔗 API: http://localhost:${PORT}/api            ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
  `);
});

export default app;
