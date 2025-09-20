# Hackathon Boilerplate

A production-ready Next.js 14 + TypeScript + TailwindCSS frontend boilerplate optimized for hackathons.

## 🚀 Features

### Core Stack
- **Next.js 14** with App Router
- **TypeScript** with strict mode
- **TailwindCSS** with custom theme system
- **shadcn/ui** components
- **Framer Motion** animations

### Authentication System
- Simple React context-based auth
- Login/Signup pages with validation
- Protected routes with AuthGuard
- Easy to replace with Supabase/Firebase later

### Layout System
- **AuthLayout** - Centered forms for login/signup
- **AppLayout** - Dashboard with sidebar, header, footer
- Responsive design with mobile-friendly navigation
- Dark/light mode toggle

### Pages & Features
- **Dashboard** - Stats cards, charts, data tables
- **Profile** - Editable user profile with avatar
- **Settings** - Comprehensive settings with tabs
- **Login/Signup** - Beautiful auth forms

### UI Components
- Pre-built reusable components
- Animated counters and transitions
- Loading states and spinners
- Toast notifications
- Responsive data tables
- Interactive charts (Recharts)

### Developer Experience
- Clean folder structure
- TypeScript interfaces
- Modular components
- Easy customization
- Mobile-first responsive design

## 🏃‍♂️ Quick Start

1. **Clone and Install**
   \`\`\`bash
   git clone <your-repo>
   cd hackathon-boilerplate
   npm install
   \`\`\`

2. **Run Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open Browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard page
│   ├── login/            # Login page
│   ├── profile/          # Profile page
│   ├── settings/         # Settings page
│   └── signup/           # Signup page
├── components/
│   ├── dashboard/        # Dashboard-specific components
│   ├── layouts/          # Layout components
│   └── ui/              # Reusable UI components
├── lib/                  # Utilities and contexts
│   ├── auth-context.tsx  # Authentication context
│   └── theme-provider.tsx # Theme provider
└── hooks/               # Custom React hooks
\`\`\`

## 🎨 Customization

### Theme Colors
Edit `app/globals.css` to customize the color palette:
- Primary: Orange (#646222)
- Accent: Blue (#6118)
- Supports light/dark modes

### Authentication
Replace the mock auth in `lib/auth-context.tsx` with:
- Supabase Auth
- Firebase Auth
- NextAuth.js
- Custom API

### Database Integration
Ready for integration with:
- Supabase
- PlanetScale
- Neon
- Any PostgreSQL/MySQL database

## 📊 Dashboard Features

- **Stats Cards** - Revenue, users, conversion rates
- **Charts** - Revenue trends, user activity
- **Data Tables** - Project management with actions
- **Recent Activity** - User action feed
- All with dummy data ready to be replaced

## 🔧 Built for Hackathons

- **Fast Setup** - Get running in minutes
- **Easy Customization** - Change colors, branding quickly
- **Scalable Architecture** - Add features without refactoring
- **Production Ready** - Deploy to Vercel instantly
- **Mobile Responsive** - Works on all devices

## 🚀 Deployment

Deploy to Vercel with one click:
\`\`\`bash
npm run build
\`\`\`

## 📝 License

MIT License - feel free to use for any hackathon or project!

---

**Ready to build something amazing? Start coding! 🎯**
