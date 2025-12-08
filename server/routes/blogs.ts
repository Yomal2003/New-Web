import express, { Request, Response } from 'express';
import { authenticateAdmin, checkPermission } from '../middleware/auth';
import Blog from '../models/Blog';
import { geminiService } from '../services/geminiAI';

const router = express.Router();

/**
 * @route   GET /api/blogs
 * @desc    Get all blogs with filtering and pagination
 * @access  Public
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      status, 
      category, 
      featured,
      search,
      sortBy = '-publishDate'
    } = req.query;

    const query: any = {};
    
    if (status) query.status = status;
    if (category) query.category = category;
    if (featured !== undefined) query.featured = featured === 'true';
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } }
      ];
    }

    const blogs = await Blog.find(query)
      .sort(sortBy as string)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const total = await Blog.countDocuments(query);

    res.json({
      success: true,
      data: blogs,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @route   GET /api/blogs/:slug
 * @desc    Get single blog by slug
 * @access  Public
 */
router.get('/:slug', async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.json({ success: true, data: blog });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @route   POST /api/blogs
 * @desc    Create new blog
 * @access  Private (Admin with create permission)
 */
router.post('/', authenticateAdmin, checkPermission('blogs', 'create'), async (req: Request, res: Response) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({ success: true, data: blog });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * @route   PUT /api/blogs/:id
 * @desc    Update blog
 * @access  Private (Admin with update permission)
 */
router.put('/:id', authenticateAdmin, checkPermission('blogs', 'update'), async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    res.json({ success: true, data: blog });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * @route   DELETE /api/blogs/:id
 * @desc    Delete blog
 * @access  Private (Admin with delete permission)
 */
router.delete('/:id', authenticateAdmin, checkPermission('blogs', 'delete'), async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    res.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @route   POST /api/blogs/ai/generate
 * @desc    Generate blog content using AI
 * @access  Private (Admin)
 */
router.post('/ai/generate', authenticateAdmin, async (req: Request, res: Response) => {
  try {
    const { topic, prompt, tone } = req.body;

    if (!topic) {
      return res.status(400).json({ success: false, message: 'Topic is required' });
    }

    const content = await geminiService.generateBlogContent(prompt || '', topic, tone);

    res.json({ success: true, data: { content } });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @route   POST /api/blogs/ai/meta-description
 * @desc    Generate meta description using AI
 * @access  Private (Admin)
 */
router.post('/ai/meta-description', authenticateAdmin, async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ success: false, message: 'Title and content are required' });
    }

    const metaDescription = await geminiService.generateMetaDescription(title, content);

    res.json({ success: true, data: { metaDescription } });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @route   POST /api/blogs/ai/tags
 * @desc    Generate tags using AI
 * @access  Private (Admin)
 */
router.post('/ai/tags', authenticateAdmin, async (req: Request, res: Response) => {
  try {
    const { title, content, count } = req.body;

    if (!title || !content) {
      return res.status(400).json({ success: false, message: 'Title and content are required' });
    }

    const tags = await geminiService.generateTags(title, content, count);

    res.json({ success: true, data: { tags } });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @route   POST /api/blogs/ai/seo-analysis
 * @desc    Analyze SEO using AI
 * @access  Private (Admin)
 */
router.post('/ai/seo-analysis', authenticateAdmin, async (req: Request, res: Response) => {
  try {
    const { title, content, metaDescription } = req.body;

    if (!title || !content) {
      return res.status(400).json({ success: false, message: 'Title and content are required' });
    }

    const analysis = await geminiService.analyzeSEO(title, content, metaDescription);

    res.json({ success: true, data: analysis });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @route   POST /api/blogs/ai/improve
 * @desc    Improve content using AI
 * @access  Private (Admin)
 */
router.post('/ai/improve', authenticateAdmin, async (req: Request, res: Response) => {
  try {
    const { content, focus } = req.body;

    if (!content) {
      return res.status(400).json({ success: false, message: 'Content is required' });
    }

    const improvedContent = await geminiService.improveContent(content, focus);

    res.json({ success: true, data: { content: improvedContent } });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
