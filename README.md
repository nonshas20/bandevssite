# BandDevs - Elite IT Development Team

![BandDevs Logo](https://mocha-cdn.com/og.png)

> **Elite IT development team delivering cutting-edge digital solutions**

BandDevs is a modern, responsive portfolio website showcasing our team's expertise in full-stack development, mobile applications, cloud solutions, and AI integration. Built with cutting-edge technologies and deployed on Cloudflare Workers.

## 🚀 Live Demo

- **Website**: [BandDevs Portfolio]
- **Contact**: hello@banddevs.com
- **Phone**: +63 966-561-5155
- **Location**: Manila, Philippines

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Design** - Mobile-first approach with seamless adaptation
- **Dark/Light Mode** - System preference detection with localStorage persistence
- **Smooth Animations** - Framer Motion powered transitions and interactions
- **Professional UI** - Clean, modern interface with gradient themes

### 🛠️ **Core Functionality**
- **Dynamic Hero Section** - Animated typing effect cycling through action words
- **Portfolio Showcase** - Detailed project presentations with case studies
- **Team Profiles** - Comprehensive team member information with social links
- **Contact System** - Functional contact form with backend integration
- **Service Catalog** - Complete overview of our technical capabilities

### 📱 **Technical Features**
- **Single Page Application** - React Router powered navigation
- **Form Validation** - Zod schema validation for type safety
- **Email Integration** - Automated notifications via Resend API
- **Database Storage** - Contact messages stored in Cloudflare D1
- **Performance Optimized** - Code splitting and lazy loading

## 🏗️ Technology Stack

### **Frontend**
- **React 19.0.0** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 3.4.17** - Utility-first styling
- **Framer Motion 12.23.12** - Advanced animations
- **Vite 6.3.2** - Lightning-fast build tool
- **React Router 7.5.3** - Client-side routing

### **Backend**
- **Cloudflare Workers** - Serverless edge computing
- **Hono 4.7.7** - Lightweight web framework
- **Cloudflare D1** - SQLite-based database
- **Resend API** - Professional email service
- **Zod** - Runtime type validation

### **Development Tools**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Wrangler** - Cloudflare Workers CLI
- **TypeScript** - Static type checking

## 📦 Installation & Setup

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Local Development**

1. **Clone the repository**
   ```bash
   git clone https://github.com/nonshas20/bandevssite.git
   cd bandevssite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### **Environment Variables**
Create a `.env` file for local development:
```env
RESEND_API_KEY=your_resend_api_key_here
```

## 🚀 Deployment

### **Vercel Deployment (Client-Only)**

For deploying the React frontend to Vercel:

**Build Settings:**
- **Build Command**: `npm run build:client`
- **Output Directory**: `dist/client`
- **Install Command**: `npm install`

The `build:client` script includes fallback mechanisms for Cloudflare-specific tools that may not be available in Vercel's environment.

### **Cloudflare Workers (Full-Stack)**

For full-stack deployment with backend functionality:

1. **Configure Wrangler**
   ```bash
   npm run cf-typegen
   ```

2. **Deploy to Cloudflare**
   ```bash
   wrangler deploy
   ```

## 📁 Project Structure

```
BandDevs/
├── src/
│   ├── react-app/           # Frontend React application
│   │   ├── components/      # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Page components
│   │   └── main.tsx        # React entry point
│   ├── shared/             # Shared types and utilities
│   └── worker/             # Cloudflare Workers backend
├── migrations/             # Database migrations
├── public/                 # Static assets
└── dist/                  # Build output
```

## 🎯 Key Components

### **Hero Section**
- Dynamic typing animation
- Parallax scrolling effects
- Call-to-action buttons

### **Services**
- Web Development
- Mobile Applications
- Cloud Solutions
- DevOps & Infrastructure
- AI Integration
- Tech Consulting

### **Portfolio Projects**
- **Kape Pilipino** - Filipino coffee e-commerce
- **MCP IT Helpdesk** - Hardware replacement system
- **CHOIMS** - Health inventory management
- **OJT Tracker** - AI-powered intern tracking
- **Barangay Management** - Community report system

### **Team**
- Project managers and developers
- Skill showcases and social profiles
- Professional photography and bios

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (full-stack)
- `npm run build:client` - Build client-only (for Vercel)
- `npm run lint` - Run ESLint
- `npm run cf-typegen` - Generate Cloudflare types
- `npm run check` - Type check and build validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by BandDevs.

## 📞 Contact

- **Email**: hello@banddevs.com
- **Phone**: +63 966-561-5155
- **Website**: [BandDevs.com]
- **GitHub**: [nonshas20/bandevssite](https://github.com/nonshas20/bandevssite)

---

**Built with ❤️ by the BandDevs Team**

*Building the future, one line of code at a time.*
