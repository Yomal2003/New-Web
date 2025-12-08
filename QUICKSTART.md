# 🚀 Coaxia Admin Panel - Quick Start Guide

## 📋 Prerequisites
- Node.js 18+ installed
- MongoDB account (already configured)
- Gemini API key (get from Google AI Studio)

## ⚡ Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Update `.env.local` with your credentials:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
```

### 3. Start Development Servers
```bash
npm run dev:all
```

This starts:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### 4. Create Admin User

**Method 1: Using PowerShell**
```powershell
$body = @{
    email = "admin@coaxia.com"
    password = "YourSecurePassword123!"
    name = "Admin User"
    role = "super-admin"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/auth/register" -Method POST -Body $body -ContentType "application/json"
```

**Method 2: Using curl (if available)**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@coaxia.com",
    "password": "YourSecurePassword123!",
    "name": "Admin User",
    "role": "super-admin"
  }'
```

### 5. Login to Admin Panel
Visit: http://localhost:5173/admin/login

Use the credentials you just created.

## 🎯 What You Can Do

### AI-Powered Blog Management
- ✨ Generate complete blog posts with AI
- 🏷️ Auto-generate SEO-optimized tags
- 📝 Create meta descriptions automatically
- 📊 Analyze and improve SEO scores
- 🎨 Preview content before publishing

### Product Management
- Create and manage products
- AI-generated descriptions
- Feature highlighting
- Pricing management

### Career Management
- Post job openings
- AI-generated job descriptions
- Application tracking
- Department management

### Analytics Dashboard
- Real-time traffic analytics
- Content performance metrics
- User engagement tracking
- Top performing content

## 📁 Admin Routes

| Route | Description |
|-------|-------------|
| `/admin/login` | Admin login page |
| `/admin/dashboard` | Analytics dashboard |
| `/admin/blogs` | Blog management |
| `/admin/blogs/new` | Create new blog |
| `/admin/blogs/edit/:id` | Edit existing blog |
| `/admin/products` | Product management |
| `/admin/careers` | Career management |
| `/admin/analytics` | Advanced analytics |

## 🎨 Key Features

### Authentication & Security
- JWT-based authentication
- Role-based access control (Super Admin, Admin, Editor)
- Account lockout after failed attempts
- Secure password hashing

### AI Features (Gemini 2.0)
- Content generation
- SEO optimization
- Meta description generation
- Tag suggestions
- Content improvement
- Readability analysis

### Blog Editor
- Markdown support
- Live preview
- Auto-save drafts
- Image management
- Category selection
- Tag management
- SEO optimization tools

### Analytics
- Page view tracking
- Visitor analytics
- Content performance
- Engagement metrics
- Device statistics

## 🚢 Deployment to Vercel

### 1. Build the Project
```bash
npm run build
npm run build:server
```

### 2. Deploy
```bash
vercel
```

### 3. Set Environment Variables in Vercel
```bash
vercel env add MONGODB_URI
vercel env add JWT_SECRET
vercel env add VITE_GEMINI_API_KEY
vercel env add NODE_ENV production
```

## 🔧 Troubleshooting

### Server won't start
- Check if MongoDB connection string is correct
- Ensure port 5000 is not in use
- Verify all environment variables are set

### Can't login to admin
- Make sure you created an admin user first
- Check JWT_SECRET is set in .env.local
- Verify password meets requirements (min 8 chars)

### AI features not working
- Verify VITE_GEMINI_API_KEY is set correctly
- Check if you have Gemini API access
- Ensure API key has proper permissions

## 📝 Default Admin Permissions

### Super Admin
- Full access to all features
- Can create/edit/delete all content
- Access to settings and user management

### Admin
- Create, read, update content
- Cannot delete or manage users
- Access to analytics

### Editor
- Read and basic create permissions
- Limited editing capabilities
- No delete permissions

## 🎓 Tips for Best Use

1. **Start with Blog Management**: Create your first blog post using AI generation
2. **Use SEO Analysis**: Always analyze SEO before publishing
3. **Check Analytics Daily**: Monitor your content performance
4. **Leverage AI Features**: Save time with AI-generated content and tags
5. **Preview Before Publishing**: Always preview content before going live

## 📞 Support

For issues or questions:
- Check the main README.md for detailed documentation
- Review the API documentation section
- Contact: admin@coaxia.com

## 🎉 You're Ready!

Your advanced admin panel is now set up and ready to use. Start creating amazing content with AI-powered tools!

Happy content creating! 🚀
