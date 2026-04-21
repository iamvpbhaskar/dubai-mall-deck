# The Dubai Mall - Interactive Sales Deck

A world-class, browser-based interactive sales presentation for The Dubai Mall. Built as a modern alternative to fragmented pitch processes, this deck tells the property's story through cinematic video, compelling data, and seamless interactivity—designed for both live screen-sharing and standalone exploration.

**Live Demo:** [Coming Soon - Deploy to Vercel]

---

## 🎯 Project Overview

This is not a static website or exported slide deck. It's a **purpose-built interactive sales tool** that replaces manual pitch processes by combining:

- **Cinematic storytelling** - Video-first narrative with staggered animations
- **Non-linear navigation** - Users control their own journey through content
- **Three business actions** - Retail leasing, sponsorships, event bookings
- **Luxury brand polish** - Premium design inspired by Apple, Tesla, Hermès
- **Expandable modules** - Deep-dive sections for events, sponsorships, and leasing paths
- **Responsive experience** - Works flawlessly on desktop, tablet, and mobile

### Primary Audience
Prospective retail tenants, corporate sponsors, and event partners evaluating investment opportunities at The Dubai Mall.

### Business Objectives
1. **Drive retail leasing deals** - Luxury flagships, mid-tier retail, F&B, pop-ups
2. **Drive sponsorship partnerships** - Title, presenting, and associate tiers
3. **Drive event bookings** - Corporate events, fashion shows, concerts, exhibitions

---

## 📋 Features

### Core Sections (9 Total)

| Section | Purpose | Key Elements |
|---------|---------|--------------|
| **Hero** | Cinematic opening | Video background, staggered headline animation, dual CTAs |
| **Why Dubai Mall** | Value proposition | 4 pillar cards, global reach, visitor demographics |
| **Leasing** | Retail opportunities | 4 leasing paths (luxury, retail, F&B, pop-up), enquiry form |
| **Retail** | Brand showcase | 1,200+ brands, category carousel, leasing CTA |
| **Luxury** | Premium positioning | Parallax gallery, luxury brand messaging |
| **Dining** | Lifestyle narrative | 3 dining concepts, waterfront positioning |
| **Attractions** | Entertainment draw | 4 world records, video hero, expandable details |
| **Events** | Platform positioning | Event types, past highlights, booking form |
| **Sponsorship** | Partnership tiers | 3 sponsorship levels, audience data, enquiry form |

### Interactive Elements

- **Dual Navigation**
  - Fixed navbar with 8 section links + hamburger menu
  - Floating dot indicator (appears after hero) with hover labels
  - Smooth scroll-to-section anchors

- **Expandable Modules**
  - EventsModule - 4 event types with details and booking form
  - SponsorshipModule - 3 sponsorship tiers with benefits and enquiry form
  - LeasingSection - 4 leasing paths with tab selector and form

- **Strategic CTAs**
  - 3 PunchLine sections between content blocks
  - Internal section links throughout
  - Modal forms for enquiries and bookings

### Animations & Effects

- Staggered word animations (hero headline)
- Fade-in on scroll (FadeIn component)
- Parallax effects (luxury gallery, background video)
- Scale and rotate transforms
- Smooth transitions between sections
- Animated counters for statistics

---

## 🛠 Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion 12** - Animation library
- **GSAP 3** - Advanced animation toolkit
- **Lucide React** - Icon library

### Styling & Design
- **Dark theme** - #080808 background with gold (#c9a84c) accents
- **Responsive design** - Mobile-first approach with clamp() for fluid typography
- **Custom utilities** - Gold gradient text, tracking utilities, scroll utilities

### Media Assets
- **Video** - Pexels (Dubai skyline, fountain, concert footage)
- **Images** - Unsplash (retail, dining, attractions, events)
- **Fallback posters** - Ensure smooth loading experience

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (or use `nvm`)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/iamvpbhaskar/dubai-mall-deck.git
cd dubai-mall-deck

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev

# Open browser
# http://localhost:3000
```

The app will auto-reload as you edit files.

### Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
dubai-mall-deck/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page (all sections)
│   └── globals.css         # Global styles & utilities
├── components/
│   ├── NavBar.tsx          # Fixed navigation bar
│   ├── FloatingNav.tsx     # Floating dot indicator
│   ├── Footer.tsx          # Footer section
│   ├── PunchLine.tsx       # Call-out sections
│   ├── FadeIn.tsx          # Scroll-triggered fade animation
│   ├── GoldDivider.tsx     # Decorative divider
│   ├── VideoBlock.tsx      # Video with fallback poster
│   └── AnimatedCounter.tsx # Animated number counter
├── sections/
│   ├── HeroSection.tsx     # Opening cinematic section
│   ├── WhySection.tsx      # Value proposition
│   ├── RetailSection.tsx   # Brand showcase
│   ├── LuxurySection.tsx   # Premium positioning
│   ├── DiningSection.tsx   # Lifestyle narrative
│   ├── AttractionsSection.tsx # Entertainment draw
│   ├── EventsSection.tsx   # Event platform
│   ├── SponsorshipSection.tsx # Partnership tiers
│   └── LeasingSection.tsx  # Retail leasing paths
├── modules/
│   ├── EventsModule.tsx    # Expandable events details
│   └── SponsorshipModule.tsx # Expandable sponsorship tiers
├── public/
│   └── [SVG assets]        # Icons and graphics
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── README.md               # This file
```

---

## 🎨 Design System

### Color Palette
- **Primary Dark** - `#080808` (background)
- **Gold** - `#c9a84c` (primary accent)
- **Gold Light** - `#e8c97a` (hover state)
- **White** - `#ffffff` (text)
- **Gray** - `#ffffff` with opacity (secondary text)

### Typography
- **Font** - Geist (optimized by Vercel)
- **Sizing** - Responsive clamp() for fluid scaling
- **Tracking** - Heavy letter-spacing for luxury feel
- **Weight** - Bold for headlines, light for labels

### Spacing & Layout
- **Max width** - 7xl (80rem) for content
- **Padding** - Responsive (px-3 mobile, px-6 desktop)
- **Gap** - Consistent spacing with Tailwind utilities
- **Grid** - Responsive grid layouts (1 col mobile, 2-4 cols desktop)

### Animations
- **Entrance** - Fade + slide up (0.4-0.9s)
- **Stagger** - 0.05-0.12s delay between elements
- **Parallax** - Scroll-based transforms
- **Hover** - Scale (1.04) and color transitions

---

## 📊 Key Metrics Highlighted

- **100M+** annual visitors
- **1,200+** retail stores
- **5.9M sqft** leasable space
- **200+** dining outlets
- **160+** countries represented
- **4** world records
- **500+** events per year
- **10,000** max event capacity
- **50K sqft** event space
- **98%** occupancy rate
- **500M+** annual media impressions

---

## 🔄 Navigation Flow

### Linear Primary Flow
Hero → Why → Leasing → Retail → Luxury → Dining → Attractions → Events → Sponsorship → Footer

### Non-Linear Access
Users can jump to any section via:
- **NavBar links** (desktop)
- **Hamburger menu** (mobile/tablet)
- **FloatingNav dots** (desktop)
- **PunchLine CTAs** (contextual)
- **Internal section buttons** (throughout)

---

## 📱 Responsive Breakpoints

- **Mobile** - 320px+ (optimized for small screens)
- **Tablet** - 768px+ (medium layouts)
- **Desktop** - 1024px+ (full experience)
- **Large** - 1280px+ (xl layouts)

All sections tested and optimized for each breakpoint.

---

## 🎬 Video & Media Strategy

### Video Placement
- **Hero** - Background video (Dubai skyline, Burj Khalifa)
- **Attractions** - Embedded video (fountain show)
- **Events** - Embedded video (concert/crowd footage)

### Video Optimization
- Multiple Pexels sources for fallback
- Poster images for loading state
- Lazy loading for performance
- Autoplay with muted audio
- Responsive sizing

### Image Assets
- Unsplash for high-quality photography
- Responsive sizing with clamp()
- Lazy loading where applicable
- Fallback colors for loading states

---

---

## 📧 Form Submission & Email Integration

### Setup Resend (Email Service)

1. **Create Resend Account**
   - Go to [resend.com](https://resend.com)
   - Sign up for free account
   - Get your API key

2. **Configure Environment Variables**
   ```bash
   # Copy example file
   cp .env.local.example .env.local

   # Edit .env.local and add:
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
   LEASING_EMAIL=leasing@dubaimall.com
   EVENTS_EMAIL=events@dubaimall.com
   SPONSORSHIP_EMAIL=partnerships@dubaimall.com
   ```

3. **How It Works**
   - Forms submit to `/api/leasing`, `/api/events`, `/api/sponsorship`
   - Emails sent to Dubai Mall team + confirmation to prospect
   - Client-side validation + server-side error handling
   - Loading states and error messages for UX

### Form Endpoints

| Endpoint | Purpose | Fields |
|----------|---------|--------|
| `/api/leasing` | Retail leasing enquiries | name, company, email, category, size, message |
| `/api/events` | Event booking enquiries | name, company, email, phone, eventType, attendees, date, message |
| `/api/sponsorship` | Sponsorship enquiries | name, company, email, budget, tier, vision |

### Testing Forms Locally

```bash
# Start dev server
npm run dev

# Forms will log errors to console if API key is missing
# Check browser console for submission status
```

## 📝 Design Decisions

### Why Next.js?
- Server-side rendering for SEO
- Automatic code splitting
- Built-in image optimization
- Vercel deployment integration
- TypeScript support out of the box

### Why Framer Motion?
- Declarative animation API
- Scroll-triggered animations
- Smooth performance
- Easy stagger effects
- Community support

### Why Tailwind CSS?
- Rapid prototyping
- Consistent design system
- Responsive utilities
- Dark mode support
- Small bundle size

### Why Dual Navigation?
- **NavBar** - Familiar, accessible, works on all devices
- **FloatingNav** - Modern, non-intrusive, shows progress
- Together they provide multiple entry points for non-linear exploration

### Why Expandable Modules?
- Keeps initial load fast
- Allows deep-dive for interested prospects
- Modular architecture supports future expansion
- Reduces cognitive load


## 🔐 Security & Privacy

- No backend data collection (forms are client-side only)
- No cookies or tracking (privacy-first)
- No external analytics (optional to add)

---

## 📞 Contact & Support

For questions about this deck or to discuss customization:
- Email: [iamved99@gmail.com]

---

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

## 🙏 Credits

### Design Inspiration
- Digideck (interactive deck format)
- Apple.com (minimalist luxury design)
- Tesla.com (cinematic storytelling)
- Hermès.com (premium brand positioning)

### Media Assets
- **Video** - Pexels (free stock footage)
- **Images** - Unsplash (free stock photography)
- **Icons** - Lucide React (open source)
- **Font** - Geist (Vercel)

### Libraries & Tools
- Next.js - React framework
- Framer Motion - Animation library
- Tailwind CSS - Styling framework
- TypeScript - Type safety
- GSAP - Advanced animations

---



---

**Built with ❤️ for The LIAT.AI Assignment - Dubai Mall**

*Last updated: April 2026*
