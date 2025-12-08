import express, { Request, Response } from 'express';
import { authenticateAdmin } from '../middleware/auth';
import Analytics from '../models/Analytics';
import Blog from '../models/Blog';
import Product from '../models/Product';
import Career from '../models/Career';

const router = express.Router();

/**
 * @route   GET /api/analytics/dashboard
 * @desc    Get dashboard analytics
 * @access  Private
 */
router.get('/dashboard', authenticateAdmin, async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    const dateQuery: any = {};
    if (startDate) dateQuery.$gte = new Date(startDate as string);
    if (endDate) dateQuery.$lte = new Date(endDate as string);

    const query = Object.keys(dateQuery).length > 0 ? { date: dateQuery } : {};

    // Get analytics data
    const analytics = await Analytics.find(query).sort({ date: -1 }).limit(30);

    // Calculate totals
    const totals = analytics.reduce((acc, day) => {
      acc.pageViews += day.pageViews.total;
      acc.uniqueVisitors += day.uniqueVisitors;
      acc.contactForms += day.contactFormSubmissions;
      acc.applications += day.careerApplications;
      acc.aiInteractions += day.aiAssistantInteractions;
      return acc;
    }, {
      pageViews: 0,
      uniqueVisitors: 0,
      contactForms: 0,
      applications: 0,
      aiInteractions: 0
    });

    // Get content stats
    const [blogCount, productCount, careerCount] = await Promise.all([
      Blog.countDocuments({ status: 'published' }),
      Product.countDocuments({ status: 'launched' }),
      Career.countDocuments({ status: 'open' })
    ]);

    // Get top performing content
    const topBlogs = await Blog.find({ status: 'published' })
      .sort({ views: -1 })
      .limit(5)
      .select('title slug views likes');

    const topProducts = await Product.find({ status: 'launched' })
      .sort({ 'stats.users': -1 })
      .limit(5)
      .select('name slug stats');

    res.json({
      success: true,
      data: {
        totals,
        counts: {
          blogs: blogCount,
          products: productCount,
          careers: careerCount
        },
        topContent: {
          blogs: topBlogs,
          products: topProducts
        },
        timeline: analytics
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @route   GET /api/analytics/trends
 * @desc    Get analytics trends
 * @access  Private
 */
router.get('/trends', authenticateAdmin, async (req: Request, res: Response) => {
  try {
    const days = parseInt(req.query.days as string) || 30;
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const analytics = await Analytics.find({
      date: { $gte: startDate }
    }).sort({ date: 1 });

    const trends = analytics.map(day => ({
      date: day.date,
      pageViews: day.pageViews.total,
      uniqueVisitors: day.uniqueVisitors,
      engagement: day.aiAssistantInteractions + day.contactFormSubmissions
    }));

    res.json({ success: true, data: trends });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @route   POST /api/analytics/track
 * @desc    Track analytics event
 * @access  Public
 */
router.post('/track', async (req: Request, res: Response) => {
  try {
    const { event, page, data } = req.body;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let analytics = await Analytics.findOne({ date: today });

    if (!analytics) {
      analytics = await Analytics.create({ date: today });
    }

    // Update analytics based on event type
    switch (event) {
      case 'page_view':
        analytics.pageViews.total += 1;
        if (page && analytics.pageViews[page] !== undefined) {
          analytics.pageViews[page] += 1;
        }
        break;
      
      case 'blog_view':
        if (data?.blogId) {
          const existingBlog = analytics.blogViews.find(
            b => b.blogId.toString() === data.blogId
          );
          if (existingBlog) {
            existingBlog.views += 1;
          } else {
            analytics.blogViews.push({ blogId: data.blogId, views: 1 });
          }
        }
        break;

      case 'product_view':
        if (data?.productId) {
          const existingProduct = analytics.productViews.find(
            p => p.productId.toString() === data.productId
          );
          if (existingProduct) {
            existingProduct.views += 1;
          } else {
            analytics.productViews.push({ productId: data.productId, views: 1 });
          }
        }
        break;

      case 'contact_form':
        analytics.contactFormSubmissions += 1;
        break;

      case 'career_application':
        analytics.careerApplications += 1;
        break;

      case 'ai_interaction':
        analytics.aiAssistantInteractions += 1;
        break;

      case 'unique_visitor':
        analytics.uniqueVisitors += 1;
        break;
    }

    await analytics.save();

    res.json({ success: true, message: 'Event tracked' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
