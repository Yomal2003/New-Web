import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IAdmin extends Document {
  email: string;
  password: string;
  name: string;
  role: 'super-admin' | 'admin' | 'editor';
  avatar?: string;
  permissions: {
    blogs: { create: boolean; read: boolean; update: boolean; delete: boolean };
    products: { create: boolean; read: boolean; update: boolean; delete: boolean };
    careers: { create: boolean; read: boolean; update: boolean; delete: boolean };
    analytics: boolean;
    settings: boolean;
  };
  isActive: boolean;
  lastLogin?: Date;
  loginAttempts: number;
  lockUntil?: Date;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const AdminSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    role: {
      type: String,
      enum: ['super-admin', 'admin', 'editor'],
      default: 'editor'
    },
    avatar: String,
    permissions: {
      blogs: {
        create: { type: Boolean, default: false },
        read: { type: Boolean, default: true },
        update: { type: Boolean, default: false },
        delete: { type: Boolean, default: false }
      },
      products: {
        create: { type: Boolean, default: false },
        read: { type: Boolean, default: true },
        update: { type: Boolean, default: false },
        delete: { type: Boolean, default: false }
      },
      careers: {
        create: { type: Boolean, default: false },
        read: { type: Boolean, default: true },
        update: { type: Boolean, default: false },
        delete: { type: Boolean, default: false }
      },
      analytics: { type: Boolean, default: false },
      settings: { type: Boolean, default: false }
    },
    isActive: {
      type: Boolean,
      default: true
    },
    lastLogin: Date,
    loginAttempts: {
      type: Number,
      default: 0
    },
    lockUntil: Date
  },
  {
    timestamps: true
  }
);

// Hash password before saving
AdminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
AdminSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Set super-admin permissions
AdminSchema.pre('save', function (next) {
  if (this.role === 'super-admin') {
    this.permissions = {
      blogs: { create: true, read: true, update: true, delete: true },
      products: { create: true, read: true, update: true, delete: true },
      careers: { create: true, read: true, update: true, delete: true },
      analytics: true,
      settings: true
    };
  }
  next();
});

AdminSchema.index({ email: 1 });

export default mongoose.model<IAdmin>('Admin', AdminSchema);
