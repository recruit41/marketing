# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`

## Project Architecture

This is a React marketing website built with Vite and TypeScript, showcasing Recruit41 ATS features through "The Recruiter's Journey" narrative.

### Core Structure

- **Multi-Page Application**: Uses HashRouter with dedicated pages for each feature category
- **Component-Based**: Reusable components in `/components/` with specialized animations in `/components/animations/`
- **Feature-Driven**: Features are defined in `constants.ts` with detailed metadata and animation components
- **Story-Driven Design**: Narrative of recruiter evolution from "organized chaos" to "strategic talent leader"

### Page Structure

- `/` - Homepage with scrollytelling and interactive demos
- `/features/sourcing` - Sourcing aggregator showcase with animated workflow
- `/features/screening` - AI screening and WhatsApp CRM interactive demo
- `/features/interviews` - AI interview features and scrollytelling components
- `/features/copilot` - Interview copilot and assistant features
- `/pricing` - 3-tier pricing structure (Starter/Growth/Enterprise)

### Key Files

- `App.tsx`: Main routing and layout with React Router, Navbar, Footer
- `constants.ts`: Central feature definitions with navigation items, homepage features, and detailed feature data
- `types.ts`: TypeScript interfaces for NavItem, Feature, and animation-related types
- `index.html`: Includes Tailwind CSS via CDN with custom brand colors (brandOrange, brandGray)

### Styling System

- **Tailwind CSS**: Loaded via CDN with custom configuration in index.html
- **Brand Colors**:
  - `brandOrange` (light: #FFEDD5, default: #F97316, dark: #EA580C)
  - `brandGray` (light: #F3F4F6, default: #6B7280, dark: #1F2937)
- **Typography**: Poppins font family from Google Fonts

### Feature Organization

Features are organized into four main categories in `constants.ts`:

1. **Sourcing**: Excel import, bulk upload, Gmail integration, Chrome plugin
2. **Screening**: AI resume screening, WhatsApp CRM, click-to-call
3. **Interview**: AI interviews, proctoring, evaluation
4. **Copilot**: Interview documentation, malpractice detection, interviewer alignment

Each feature includes title, description, animation component, and detailed explanations for implementation.

### Animation Components

Located in `/components/animations/`, these components demonstrate feature functionality:

- Naming convention: `Animated[FeatureName].tsx`
- Accept optional `isPreview` prop for different display modes
- Used in feature showcase layouts

### Interactive Components

The website features several sophisticated interactive components:

#### Homepage Components
- **ScrollytellingFunnel**: Animated background that shows logos (Naukri, LinkedIn, Gmail, Excel) flowing into Recruit41 logo on scroll
- **AIRankerSandbox**: Interactive demo allowing users to rank candidates with AI, showing scores and reasoning
- **AIInterviewSnapshot**: Live interview simulation with real-time analysis panel

#### Feature Page Components
- **SourcingAggregatorAnimation**: Shows multi-source data flowing into unified talent pool
- **WhatsAppCRMShowcase**: Step-by-step workflow demo with ATS table, message templates, and response capture

### Navigation

- React Router based navigation for multi-page structure
- Active state styling with NavLink components
- Navigation items defined in `constants.ts` NAVIGATION_ITEMS
- Cross-page navigation with "Next: [Feature] →" CTAs

## GitHub Pages Deployment

- **Deploy to GitHub Pages**: `npm run deploy`
- **Build only**: `npm run build`
- **Live URL**: https://recruit41.github.io/marketing/
- **Base path configured**: `/marketing/` in vite.config.ts

### Deployment Process
1. `npm run deploy` runs predeploy script (builds the project)
2. gh-pages deploys the `dist` folder to the `gh-pages` branch
3. GitHub Pages serves the site from the gh-pages branch

### Github

- Github cli tool is installed you can use it to push and pull changes

## Content Strategy

### "The Recruiter's Journey" Narrative

The website follows a cohesive storytelling approach:

1. **Acknowledge the Chaos**: Homepage hero section recognizes current recruiter pain points
2. **Show the Transformation**: Feature sections demonstrate "From [Problem] to [Solution]"
3. **Provide Social Proof**: Testimonials and success stories throughout
4. **Clear Call-to-Action**: Consistent demo requests and trial signup opportunities

### Key Messaging Themes

- **India-First Approach**: References to Naukri, WhatsApp communication, Indian market nuances
- **AI-Powered Efficiency**: Emphasis on automation and intelligent decision-making
- **Unification**: "Many sources to one" - consolidating fragmented workflows
- **Professional Evolution**: Positioning recruiters as strategic talent leaders

### Interactive Demo Philosophy

Each major feature includes hands-on demonstrations:
- **Sourcing**: Visual workflow of data aggregation
- **Screening**: Functional AI ranking with realistic scores
- **WhatsApp CRM**: Complete workflow from selection to response capture
- **Interviews**: Live conversation simulation with analysis

## Development Guidelines

### Adding New Features

1. Define feature data in `constants.ts` under appropriate category
2. Create animation component in `/components/animations/` if needed
3. Update navigation items if adding new pages
4. Follow existing naming conventions and TypeScript interfaces
5. Ensure mobile responsiveness with Tailwind breakpoints

### Interactive Component Standards

- Use React hooks for state management (useState, useEffect)
- Include loading/animation states for better UX
- Provide realistic demo data that reflects Indian market context
- Implement proper error boundaries and fallbacks
- Follow accessibility guidelines with proper ARIA labels
