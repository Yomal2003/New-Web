import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
  pricing: {
    model: 'free' | 'freemium' | 'subscription' | 'one-time' | 'enterprise';
    plans?: {
      name: string;
      price: number;
      currency: string;
      interval?: 'month' | 'year';
      features: string[];
    }[];
  };
  images: {
    thumbnail: string;
    gallery?: string[];
    banner?: string;
  };
  technologies: string[];
  status: 'development' | 'beta' | 'launched' | 'discontinued';
  demoUrl?: string;
  documentationUrl?: string;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  featured: boolean;
  order: number;
  stats?: {
    users?: number;
    downloads?: number;
    rating?: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    tagline: {
      type: String,
      required: [true, 'Tagline is required'],
      maxlength: [150, 'Tagline cannot exceed 150 characters']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['SaaS', 'Mobile App', 'Web App', 'API', 'Plugin', 'Tool', 'Platform']
    },
    features: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      icon: String
    }],
    pricing: {
      model: {
        type: String,
        enum: ['free', 'freemium', 'subscription', 'one-time', 'enterprise'],
        required: true
      },
      plans: [{
        name: String,
        price: Number,
        currency: { type: String, default: 'USD' },
        interval: { type: String, enum: ['month', 'year'] },
        features: [String]
      }]
    },
    images: {
      thumbnail: { type: String, required: true },
      gallery: [String],
      banner: String
    },
    technologies: [String],
    status: {
      type: String,
      enum: ['development', 'beta', 'launched', 'discontinued'],
      default: 'development'
    },
    demoUrl: String,
    documentationUrl: String,
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String]
    },
    featured: {
      type: Boolean,
      default: false
    },
    order: {
      type: Number,
      default: 0
    },
    stats: {
      users: Number,
      downloads: Number,
      rating: { type: Number, min: 0, max: 5 }
    }
  },
  {
    timestamps: true
  }
);

// Indexes
ProductSchema.index({ slug: 1 });
ProductSchema.index({ status: 1, order: 1 });
ProductSchema.index({ category: 1 });

export default mongoose.model<IProduct>('Product', ProductSchema);
