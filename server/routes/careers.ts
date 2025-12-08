import express, { Request, Response } from 'express';
import { authenticateAdmin, checkPermission } from '../middleware/auth';
import Career from '../models/Career';
import { geminiService } from '../services/geminiAI';

const router = express.Router();

/**
 * @route   GET /api/careers
 * @desc    Get all careers
 * @access  Public
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      status, 
      department, 
      type,
      level,
      search
    } = req.query;

    const query: any = {};
    
    if (status) query.status = status;
    if (department) query.department = department;
    if (type) query.type = type;
    if (level) query.level = level;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } }
      ];
    }

    const careers = await Career.find(query)
      .sort({ postedDate: -1 })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const total = await Career.countDocuments(query);

    res.json({
      success: true,
      data: careers,
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
 * @route   GET /api/careers/:slug
 * @desc    Get single career
 * @access  Public
 */
router.get('/:slug', async (req: Request, res: Response) => {
  try {
    const career = await Career.findOne({ slug: req.params.slug });

    if (!career) {
      return res.status(404).json({ success: false, message: 'Career not found' });
    }

    res.json({ success: true, data: career });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @route   POST /api/careers
 * @desc    Create new career
 * @access  Private
 */
router.post('/', authenticateAdmin, checkPermission('careers', 'create'), async (req: Request, res: Response) => {
  try {
    const career = await Career.create(req.body);
    res.status(201).json({ success: true, data: career });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * @route   PUT /api/careers/:id
 * @desc    Update career
 * @access  Private
 */
router.put('/:id', authenticateAdmin, checkPermission('careers', 'update'), async (req: Request, res: Response) => {
  try {
    const career = await Career.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!career) {
      return res.status(404).json({ success: false, message: 'Career not found' });
    }

    res.json({ success: true, data: career });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * @route   DELETE /api/careers/:id
 * @desc    Delete career
 * @access  Private
 */
router.delete('/:id', authenticateAdmin, checkPermission('careers', 'delete'), async (req: Request, res: Response) => {
  try {
    const career = await Career.findByIdAndDelete(req.params.id);

    if (!career) {
      return res.status(404).json({ success: false, message: 'Career not found' });
    }

    res.json({ success: true, message: 'Career deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @route   POST /api/careers/ai/generate
 * @desc    Generate job description using AI
 * @access  Private
 */
router.post('/ai/generate', authenticateAdmin, async (req: Request, res: Response) => {
  try {
    const { title, department, level } = req.body;

    if (!title || !department || !level) {
      return res.status(400).json({ 
        success: false, 
        message: 'Title, department, and level are required' 
      });
    }

    const jobData = await geminiService.generateJobDescription(title, department, level);

    res.json({ success: true, data: jobData });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
