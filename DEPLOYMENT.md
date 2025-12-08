# Vercel Deployment Guide - Coaxia Website

This guide provides step-by-step instructions for deploying the Coaxia website to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **MongoDB Atlas Account**: Create a database at [mongodb.com/atlas](https://www.mongodb.com/atlas)
3. **Google Gemini API Key**: Get your API key from [ai.google.dev](https://ai.google.dev)
4. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket

## Step 1: Prepare Your Environment Variables

Before deploying, you'll need to set up the following environment variables in Vercel:

### Required Environment Variables

1. **MONGODB_URI**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/coaxia?retryWrites=true&w=majority
   ```
   - Get this from MongoDB Atlas → Database → Connect → Connect your application
   - Replace `username`, `password`, and `cluster` with your actual values

2. **JWT_SECRET**
   ```
   Generate a secure random string (minimum 32 characters)
   ```
   - Generate using: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
   - Or use an online generator: [randomkeygen.com](https://randomkeygen.com/)

3. **VITE_GEMINI_API_KEY**
   ```
   Your Google Gemini API key
   ```
   - Get from [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **VITE_API_URL**
   ```
   https://your-domain.vercel.app/api
   ```
   - Replace `your-domain` with your actual Vercel domain
   - You can update this after initial deployment

5. **CLIENT_URL**
   ```
   https://your-domain.vercel.app
   ```
   - Your Vercel deployment URL

6. **NODE_ENV**
   ```
   production
   ```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build:all`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. Add Environment Variables:
   - Click "Environment Variables"
   - Add all variables from Step 1
   - Set them for "Production", "Preview", and "Development"

5. Click "Deploy"

### Option B: Deploy via Vercel CLI

```powershell
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Set environment variables
vercel env add MONGODB_URI
vercel env add JWT_SECRET
vercel env add VITE_GEMINI_API_KEY
vercel env add VITE_API_URL
vercel env add CLIENT_URL
vercel env add NODE_ENV
```

## Step 3: Configure MongoDB Atlas

1. Go to MongoDB Atlas Dashboard
2. Navigate to **Network Access**
3. Add IP Address: `0.0.0.0/0` (Allow access from anywhere)
   - ⚠️ For production, restrict to Vercel's IP ranges
4. Navigate to **Database Access**
5. Ensure your database user has read/write permissions

## Step 4: Post-Deployment Configuration

### Update Environment Variables

After your first deployment, update these variables with your actual Vercel URL:

1. **VITE_API_URL**: `https://your-actual-domain.vercel.app/api`
2. **CLIENT_URL**: `https://your-actual-domain.vercel.app`

In Vercel Dashboard:
- Go to Settings → Environment Variables
- Update the values
- Redeploy to apply changes

### Setup Admin Account

After deployment, create your first admin account:

1. Connect to your MongoDB database
2. Run this in MongoDB shell or Compass:

```javascript
// Generate password hash (use bcrypt with 10 rounds)
// Password: your-secure-password
// Hash: Use bcryptjs to generate

db.admins.insertOne({
  username: "admin",
  email: "admin@coaxia.com",
  password: "$2a$10$YOUR_BCRYPT_HASH_HERE",
  role: "super_admin",
  createdAt: new Date(),
  lastLogin: null
});
```

Or use the registration endpoint (if enabled):
```bash
curl -X POST https://your-domain.vercel.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@coaxia.com","password":"your-secure-password"}'
```

## Step 5: Verify Deployment

Test these endpoints:

1. **Health Check**
   ```
   https://your-domain.vercel.app/api/health
   ```
   Should return: `{"success": true, "message": "Server is running"}`

2. **Frontend**
   ```
   https://your-domain.vercel.app/
   ```
   Should load the Coaxia homepage

3. **Admin Login**
   ```
   https://your-domain.vercel.app/admin/login
   ```
   Should load the admin login page

## Continuous Deployment

Vercel automatically deploys when you push to your repository:

- **Production**: Pushes to `main` branch
- **Preview**: Pushes to other branches or pull requests

## Security Best Practices

### ✅ Completed
- [x] Removed hardcoded credentials from source code
- [x] Added `.env` files to `.gitignore`
- [x] Updated LICENSE to Coaxia
- [x] Environment variables stored securely in Vercel

### 🔒 Additional Recommendations

1. **Enable CORS properly**
   - Update `CLIENT_URL` in environment variables
   - Verify CORS settings in `server/index.ts`

2. **JWT Secret Rotation**
   - Rotate JWT_SECRET periodically (every 90 days)
   - Update in Vercel environment variables

3. **MongoDB Security**
   - Use IP whitelist instead of `0.0.0.0/0`
   - Enable MongoDB Atlas audit logs
   - Use strong database passwords
   - Enable 2FA on MongoDB Atlas account

4. **Vercel Security**
   - Enable Vercel Authentication for preview deployments
   - Use Vercel Teams for access control
   - Enable deployment protection

5. **API Rate Limiting**
   - Consider adding rate limiting middleware
   - Monitor API usage in Vercel Analytics

6. **HTTPS Only**
   - Vercel provides SSL by default
   - Ensure all external API calls use HTTPS

## Troubleshooting

### Build Fails

**Issue**: Build fails with module errors
```
Solution: Check package.json dependencies and ensure all are installed
Run: npm install
Test locally: npm run build:all
```

**Issue**: TypeScript compilation errors
```
Solution: Check tsconfig.json and tsconfig.server.json
Verify all types are correct
Run: npm run build:server
```

### Runtime Errors

**Issue**: "MONGODB_URI is not defined"
```
Solution: Add MONGODB_URI to Vercel environment variables
Redeploy the application
```

**Issue**: "JWT_SECRET is not defined"
```
Solution: Add JWT_SECRET to Vercel environment variables
Ensure it's at least 32 characters long
```

**Issue**: API routes return 404
```
Solution: Check vercel.json routes configuration
Verify server build was successful
Check Vercel function logs
```

### Database Connection Issues

**Issue**: Cannot connect to MongoDB
```
Solution: 
1. Verify MONGODB_URI is correct
2. Check MongoDB Atlas Network Access (IP whitelist)
3. Verify database user credentials
4. Check MongoDB Atlas status
```

## Monitoring & Logs

### Vercel Logs
- Go to Vercel Dashboard → Your Project → Logs
- View real-time function execution logs
- Check for errors and warnings

### Vercel Analytics
- Enable Vercel Analytics for traffic monitoring
- Track page views and performance
- Monitor Core Web Vitals

### MongoDB Monitoring
- MongoDB Atlas provides built-in monitoring
- Check database performance
- Monitor connection pools
- Track query performance

## Custom Domain Setup

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `coaxia.com`)
3. Update DNS records as instructed by Vercel
4. Update environment variables:
   - `VITE_API_URL`: `https://coaxia.com/api`
   - `CLIENT_URL`: `https://coaxia.com`
5. Redeploy to apply changes

## Rollback

If something goes wrong:

1. Go to Vercel Dashboard → Your Project → Deployments
2. Find the last working deployment
3. Click "..." → "Promote to Production"

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **MongoDB Atlas Support**: [mongodb.com/support](https://www.mongodb.com/support)
- **Coaxia Repository**: [github.com/Yomal2003/New-Web](https://github.com/Yomal2003/New-Web)

---

**Last Updated**: December 2025
**Company**: Coaxia
**License**: MIT
