# 🎯 Coaxia Admin Panel - Commands Reference

## 📦 Installation & Setup

```powershell
# Run automated setup
.\setup.ps1

# Manual installation
npm install

# Copy environment file
Copy-Item .env.example .env.local
```

## 🚀 Development

```powershell
# Start frontend + backend concurrently
npm run dev:all

# Start frontend only (port 5173)
npm run dev

# Start backend only (port 5000)
npm run dev:server
```

## 🏗️ Building

```powershell
# Build frontend
npm run build

# Build backend
npm run build:server

# Build everything
npm run build ; npm run build:server
```

## 🔐 Create Admin User

```powershell
# Create super admin
$body = @{
    email = "admin@coaxia.com"
    password = "YourSecurePassword123!"
    name = "Admin User"
    role = "super-admin"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/auth/register" `
    -Method POST `
    -Body $body `
    -ContentType "application/json"
```

## 📊 Testing API Endpoints

### Test Health Check
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/health"
```

### Login
```powershell
$loginBody = @{
    email = "admin@coaxia.com"
    password = "YourSecurePassword123!"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "http://localhost:5000/api/auth/login" `
    -Method POST `
    -Body $loginBody `
    -ContentType "application/json"

# Save token
$token = $response.data.token
```

### Get Blogs
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/blogs"
```

### Create Blog (Authenticated)
```powershell
$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

$blogData = @{
    title = "My First Blog Post"
    slug = "my-first-blog-post"
    excerpt = "This is an amazing blog post"
    content = "# Welcome\n\nThis is the content..."
    author = @{
        name = "Admin"
        role = "Tech Writer"
    }
    category = "Technology"
    tags = @("tech", "tutorial")
    coverImage = "https://example.com/image.jpg"
    status = "published"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/blogs" `
    -Method POST `
    -Headers $headers `
    -Body $blogData
```

### Generate Blog Content with AI
```powershell
$aiBody = @{
    topic = "The Future of AI in Software Development"
    prompt = "Write about emerging trends"
    tone = "professional"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/blogs/ai/generate" `
    -Method POST `
    -Headers $headers `
    -Body $aiBody
```

### Analyze SEO
```powershell
$seoBody = @{
    title = "AI in Software Development"
    content = "Long content here..."
    metaDescription = "Learn about AI trends"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/blogs/ai/seo-analysis" `
    -Method POST `
    -Headers $headers `
    -Body $seoBody
```

## 🔍 MongoDB Queries

### Connect to MongoDB
```powershell
# If you have MongoDB installed locally
mongosh "mongodb+srv://yomalravingacr_db_user:n4h7woqIs92IHbcL@coaxiadb.fg9dsdg.mongodb.net/coaxia"
```

### Useful MongoDB Commands
```javascript
// Show all databases
show dbs

// Use coaxia database
use coaxia

// Show collections
show collections

// Count blogs
db.blogs.countDocuments()

// Find all admins
db.admins.find()

// Find published blogs
db.blogs.find({ status: "published" })

// Get analytics for today
db.analytics.find({ date: new Date() })
```

## 🚢 Deployment

### Deploy to Vercel
```powershell
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Set Vercel Environment Variables
```powershell
vercel env add MONGODB_URI
vercel env add JWT_SECRET
vercel env add VITE_GEMINI_API_KEY
vercel env add NODE_ENV
```

## 🧹 Maintenance

### Clear Node Modules
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

### Clear Build Artifacts
```powershell
Remove-Item -Recurse -Force dist
npm run build
```

### Check for Updates
```powershell
npm outdated
```

### Update Dependencies
```powershell
npm update
```

## 📝 Useful NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend dev server |
| `npm run dev:server` | Start backend API server |
| `npm run dev:all` | Start both frontend and backend |
| `npm run build` | Build frontend for production |
| `npm run build:server` | Build backend for production |
| `npm run preview` | Preview production build |
| `npm run start:server` | Start production server |

## 🐛 Debugging

### Check if ports are in use
```powershell
# Check port 5173 (frontend)
Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue

# Check port 5000 (backend)
Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue
```

### Kill process on port
```powershell
# Find process on port 5000
$process = Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue
if ($process) {
    Stop-Process -Id $process.OwningProcess -Force
}
```

### View logs
```powershell
# Backend logs are in the terminal where you ran dev:server
# Frontend logs are in the browser console
```

## 🔒 Security Commands

### Generate Strong JWT Secret
```powershell
# Generate random 32-character string
-join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | ForEach-Object {[char]$_})
```

### Check Environment Variables
```powershell
Get-Content .env.local
```

## 📊 Analytics Commands

### Track Page View
```powershell
$trackBody = @{
    event = "page_view"
    page = "home"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/analytics/track" `
    -Method POST `
    -Body $trackBody `
    -ContentType "application/json"
```

### Get Dashboard Analytics
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/analytics/dashboard" `
    -Headers $headers
```

## 💡 Pro Tips

1. **Use PowerShell ISE** for easier command editing
2. **Save token** in a variable for multiple API calls
3. **Test locally** before deploying to production
4. **Backup MongoDB** regularly
5. **Monitor logs** for errors
6. **Use environment variables** for sensitive data

## 🆘 Quick Troubleshooting

```powershell
# Server won't start
npm run dev:server

# Frontend won't start
npm run dev

# Build fails
Remove-Item -Recurse -Force node_modules, dist
npm install
npm run build

# Can't connect to MongoDB
# Check MONGODB_URI in .env.local
Get-Content .env.local | Select-String "MONGODB"

# API returns 401
# Check if token is valid and not expired
```

## 📞 Support

Need help? Check:
- QUICKSTART.md - Quick start guide
- README.md - Full documentation
- Server logs - Error details
- Browser console - Frontend errors

---

Happy coding! 🚀
