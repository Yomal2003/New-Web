import mongoose, { Document, Schema } from 'mongoose';

export interface ICareer extends Document {
  title: string;
  slug: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  level: 'entry' | 'mid' | 'senior' | 'lead' | 'executive';
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  status: 'open' | 'closed' | 'paused';
  featured: boolean;
  applicationDeadline?: Date;
  openings: number;
  postedDate: Date;
  applicants?: number;
  createdAt: Date;
  updatedAt: Date;
}

const CareerSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      enum: ['Engineering', 'Design', 'Product', 'Marketing', 'Sales', 'Operations', 'HR', 'Finance']
    },
    location: {
      type: String,
      required: [true, 'Location is required']
    },
    type: {
      type: String,
      required: true,
      enum: ['full-time', 'part-time', 'contract', 'internship']
    },
    level: {
      type: String,
      required: true,
      enum: ['entry', 'mid', 'senior', 'lead', 'executive']
    },
    description: {
      type: String,
      required: [true, 'Job description is required']
    },
    responsibilities: {
      type: [String],
      required: [true, 'At least one responsibility is required']
    },
    requirements: {
      type: [String],
      required: [true, 'At least one requirement is required']
    },
    niceToHave: [String],
    benefits: [String],
    salary: {
      min: Number,
      max: Number,
      currency: { type: String, default: 'USD' }
    },
    status: {
      type: String,
      enum: ['open', 'closed', 'paused'],
      default: 'open'
    },
    featured: {
      type: Boolean,
      default: false
    },
    applicationDeadline: Date,
    openings: {
      type: Number,
      default: 1,
      min: 1
    },
    postedDate: {
      type: Date,
      default: Date.now
    },
    applicants: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

// Indexes
CareerSchema.index({ slug: 1 });
CareerSchema.index({ status: 1, postedDate: -1 });
CareerSchema.index({ department: 1 });

export default mongoose.model<ICareer>('Career', CareerSchema);
