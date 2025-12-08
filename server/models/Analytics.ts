import mongoose, { Document, Schema } from 'mongoose';

export interface IAnalytics extends Document {
  date: Date;
  pageViews: {
    total: number;
    home: number;
    about: number;
    services: number;
    products: number;
    blog: number;
    careers: number;
    contact: number;
  };
  uniqueVisitors: number;
  blogViews: {
    blogId: mongoose.Types.ObjectId;
    views: number;
  }[];
  productViews: {
    productId: mongoose.Types.ObjectId;
    views: number;
  }[];
  contactFormSubmissions: number;
  careerApplications: number;
  aiAssistantInteractions: number;
  topReferrers: {
    source: string;
    count: number;
  }[];
  deviceStats: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const AnalyticsSchema: Schema = new Schema(
  {
    date: {
      type: Date,
      required: true,
      unique: true
    },
    pageViews: {
      total: { type: Number, default: 0 },
      home: { type: Number, default: 0 },
      about: { type: Number, default: 0 },
      services: { type: Number, default: 0 },
      products: { type: Number, default: 0 },
      blog: { type: Number, default: 0 },
      careers: { type: Number, default: 0 },
      contact: { type: Number, default: 0 }
    },
    uniqueVisitors: {
      type: Number,
      default: 0
    },
    blogViews: [{
      blogId: { type: Schema.Types.ObjectId, ref: 'Blog' },
      views: Number
    }],
    productViews: [{
      productId: { type: Schema.Types.ObjectId, ref: 'Product' },
      views: Number
    }],
    contactFormSubmissions: {
      type: Number,
      default: 0
    },
    careerApplications: {
      type: Number,
      default: 0
    },
    aiAssistantInteractions: {
      type: Number,
      default: 0
    },
    topReferrers: [{
      source: String,
      count: Number
    }],
    deviceStats: {
      desktop: { type: Number, default: 0 },
      mobile: { type: Number, default: 0 },
      tablet: { type: Number, default: 0 }
    }
  },
  {
    timestamps: true
  }
);

AnalyticsSchema.index({ date: -1 });

export default mongoose.model<IAnalytics>('Analytics', AnalyticsSchema);
