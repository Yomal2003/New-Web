import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  console.error('❌ MONGODB_URI environment variable is not defined');
}

const MONGODB_URI = process.env.MONGODB_URI || '';

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    console.log('⚠️  Server continuing without database connection (Limited functionality)');
    // process.exit(1); // Don't exit, allow server to run for dev/fallback
  }
};

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});
