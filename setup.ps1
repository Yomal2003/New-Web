# Coaxia Admin Panel Setup Script
Write-Host "
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   🚀 Coaxia Admin Panel Setup                        ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
" -ForegroundColor Cyan

# Check if .env.local exists
if (-not (Test-Path ".env.local")) {
    Write-Host "❌ .env.local file not found!" -ForegroundColor Red
    Write-Host "Creating .env.local from .env.example..." -ForegroundColor Yellow
    Copy-Item .env.example .env.local
    Write-Host "✅ .env.local created!" -ForegroundColor Green
    Write-Host ""
    Write-Host "⚠️  IMPORTANT: Please edit .env.local and add your credentials:" -ForegroundColor Yellow
    Write-Host "   - VITE_GEMINI_API_KEY" -ForegroundColor White
    Write-Host "   - JWT_SECRET (min 32 characters)" -ForegroundColor White
    Write-Host "   - MONGODB_URI (already configured)" -ForegroundColor White
    Write-Host ""
    Read-Host "Press Enter after updating .env.local to continue"
}

Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "╔═══════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                                                       ║" -ForegroundColor Cyan
Write-Host "║   ✅ Setup Complete!                                  ║" -ForegroundColor Green
Write-Host "║                                                       ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1️⃣  Start the development servers:" -ForegroundColor White
Write-Host "   npm run dev:all" -ForegroundColor Cyan
Write-Host ""
Write-Host "2️⃣  Create your first admin user:" -ForegroundColor White
Write-Host "   Once servers are running, use this command:" -ForegroundColor Gray
Write-Host '   $body = @{ email = "admin@coaxia.com"; password = "YourSecurePassword123!"; name = "Admin User"; role = "super-admin" } | ConvertTo-Json' -ForegroundColor Cyan
Write-Host '   Invoke-RestMethod -Uri "http://localhost:5000/api/auth/register" -Method POST -Body $body -ContentType "application/json"' -ForegroundColor Cyan
Write-Host ""
Write-Host "3️⃣  Access the admin panel:" -ForegroundColor White
Write-Host "   http://localhost:5173/admin/login" -ForegroundColor Cyan
Write-Host ""
Write-Host "4️⃣  Main website:" -ForegroundColor White
Write-Host "   http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "📚 Features Available:" -ForegroundColor Yellow
Write-Host "   ✨ AI Content Generation" -ForegroundColor Green
Write-Host "   📝 Blog Management" -ForegroundColor Green
Write-Host "   📦 Product Management" -ForegroundColor Green
Write-Host "   💼 Career Management" -ForegroundColor Green
Write-Host "   📊 Analytics Dashboard" -ForegroundColor Green
Write-Host "   🔐 Secure Authentication" -ForegroundColor Green
Write-Host ""
