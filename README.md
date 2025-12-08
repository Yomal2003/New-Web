<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Coaxia - Advanced Software Solutions

Modern, full-stack web application for Coaxia, featuring AI-powered assistance, blog management, product showcase, and admin dashboard.

## 🚀 Features

- **AI Assistant**: Powered by Google Gemini API
- **Blog Management**: Full CRUD operations with rich text editor
- **Product Showcase**: Dynamic product catalog
- **Career Portal**: Job listings and applications
- **Admin Dashboard**: Complete content management system
- **Analytics**: Real-time visitor and engagement tracking
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB Atlas
- **Authentication**: JWT with bcrypt
- **AI**: Google Gemini API
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB Atlas account
- Google Gemini API key
- Git

## 🏃 Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yomal2003/New-Web.git
   cd New-Web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Update the values in `.env.local`:
   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_GEMINI_API_KEY=your_gemini_api_key
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secure_jwt_secret_32_chars_min
   PORT=5000
   NODE_ENV=development
   CLIENT_URL=http://localhost:5173
   ```

4. **Run the development servers**
   ```bash
   # Run both frontend and backend
   npm run dev:all
   
   # Or run separately:
   npm run dev          # Frontend only (port 5173)
   npm run dev:server   # Backend only (port 5000)
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🚢 Deploy to Vercel

Complete deployment instructions are available in [DEPLOYMENT.md](DEPLOYMENT.md).

### Quick Deploy

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables (see DEPLOYMENT.md)
4. Deploy!

**Required Environment Variables:**
- `MONGODB_URI`
- `JWT_SECRET`
- `VITE_GEMINI_API_KEY`
- `VITE_API_URL`
- `CLIENT_URL`
- `NODE_ENV`

## 🔒 Security

Security is our top priority. See [SECURITY.md](SECURITY.md) for:
- Security checklist
- Best practices
- Incident response procedures

**Important**: Never commit `.env` files to Git!

## 📁 Project Structure

```
├── components/          # React components
│   ├── admin/          # Admin panel components
│   └── ui/             # Reusable UI components
├── pages/              # Page components
│   └── admin/          # Admin pages
├── server/             # Backend server
│   ├── config/         # Configuration files
│   ├── middleware/     # Express middleware
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   └── services/       # Business logic
├── services/           # Frontend services
├── contexts/           # React contexts
└── types.ts            # TypeScript type definitions
```

## 🔧 Available Scripts

```bash
npm run dev              # Start frontend dev server
npm run dev:server       # Start backend dev server
npm run dev:all          # Start both frontend and backend
npm run build            # Build frontend for production
npm run build:server     # Build backend for production
npm run build:all        # Build both frontend and backend
npm run preview          # Preview production build locally
npm run start            # Start production server
```

## 📚 Documentation

- [DEPLOYMENT.md](DEPLOYMENT.md) - Vercel deployment guide
- [SECURITY.md](SECURITY.md) - Security guidelines
- [COMMANDS.md](COMMANDS.md) - Useful commands
- [QUICKSTART.md](QUICKSTART.md) - Quick start guide

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Coaxia

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/Yomal2003/New-Web/issues)
- **Documentation**: See documentation files in repository
- **Security**: See [SECURITY.md](SECURITY.md)

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- Vercel for hosting and deployment
- MongoDB Atlas for database services
- Open source community for amazing tools

---

**Built with ❤️ by Coaxia**
