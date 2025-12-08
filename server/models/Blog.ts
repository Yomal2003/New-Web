import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  category: string;
  tags: string[];
  coverImage: string;
  images?: string[];
  publishDate: Date;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  views: number;
  likes: number;
  readTime: number;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters']
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
      maxlength: [500, 'Excerpt cannot exceed 500 characters']
    },
    content: {
      type: String,
      required: [true, 'Content is required']
    },
    author: {
      name: { type: String, required: true },
      avatar: String,
      role: String
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Technology', 'AI/ML', 'Business', 'Development', 'Design', 'Tutorial', 'Case Study', 'News']
    },
    tags: [{
      type: String,
      trim: true
    }],
    coverImage: {
      type: String,
      required: [true, 'Cover image is required']
    },
    images: [String],
    publishDate: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft'
    },
    featured: {
      type: Boolean,
      default: false
    },
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String]
    },
    views: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default: 0
    },
    readTime: {
      type: Number,
      default: 5
    }
  },
  {
    timestamps: true
  }
);

// Indexes
BlogSchema.index({ slug: 1 });
BlogSchema.index({ status: 1, publishDate: -1 });
BlogSchema.index({ category: 1 });
BlogSchema.index({ tags: 1 });

export default mongoose.model<IBlog>('Blog', BlogSchema);
