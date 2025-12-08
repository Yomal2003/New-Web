# Quick Fix for Vercel 404 Error

## Issue
Getting "404: NOT_FOUND" error on Vercel deployment.

## Solution

### 1. Install Dependencies First
```powershell
npm install
```

This will install the new `@vercel/node` dependency needed for API routes.

### 2. Update Your Deployment

The project has been reconfigured for Vercel:

**Changes Made:**
- ✅ Simplified `vercel.json` configuration
- ✅ Created `/api` folder with serverless function
- ✅ Added `@vercel/node` dependency
- ✅ Moved backend dependencies to `dependencies` (not devDependencies)
- ✅ Added `vercel-build` script

### 3. Redeploy on Vercel

**Option A: Through Vercel Dashboard**
1. Go to your Vercel project
2. Go to **Settings** → **General** → **Build & Development Settings**
3. Verify settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Go to **Deployments** tab
5. Click **"Redeploy"** on the latest deployment

**Option B: Push to Git**
```powershell
git add .
git commit -m "Fix Vercel deployment configuration"
git push
```
Vercel will auto-deploy.

### 4. Verify Environment Variables

Make sure these are set in Vercel:
- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET` - Your secure JWT secret
- `VITE_GEMINI_API_KEY` - Your Gemini API key
- `VITE_API_URL` - Your Vercel URL + `/api` (e.g., `https://your-app.vercel.app/api`)
- `CLIENT_URL` - Your Vercel URL (e.g., `https://your-app.vercel.app`)
- `NODE_ENV` - Set to `production`

### 5. Check After Deployment

Test these URLs (replace with your actual domain):
- `https://your-app.vercel.app/` - Should load the homepage
- `https://your-app.vercel.app/api/health` - Should return API health status

## Current Setup

The project now works as:
- **Frontend**: Static build deployed from `/dist` folder
- **API**: Serverless function in `/api` folder
- **Routing**: All non-API routes go to `index.html` (SPA routing)

## If Still Getting 404

1. **Check Vercel Build Logs**:
   - Go to your project → Deployments → Click on the deployment
   - Check the build logs for errors

2. **Common Issues**:
   - Build failed: Check for TypeScript errors
   - Missing dependencies: Run `npm install` locally and push `package-lock.json`
   - Wrong output directory: Verify `dist` folder is created during build

3. **Test Build Locally**:
   ```powershell
   npm run build
   npm run preview
   ```
   Visit `http://localhost:4173` to test

## Need Help?

If you're still seeing 404 errors, share:
1. Your Vercel deployment URL
2. Build logs from Vercel dashboard
3. Any error messages in browser console
