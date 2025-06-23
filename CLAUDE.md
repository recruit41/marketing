# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`

## Project Architecture

This is a React marketing website built with Vite and TypeScript, showcasing Recruit41 ATS features.

### Core Structure

- **Single Page Application**: Uses HashRouter with hash-based navigation for sections
- **Component-Based**: Reusable components in `/components/` with specialized animations in `/components/animations/`
- **Feature-Driven**: Features are defined in `constants.ts` with detailed metadata and animation components
- **Homepage-Centric**: Main content lives on HomePage with navigation to specific sections (/#sourcing-section, /#screening-section, etc.)

### Key Files

- `App.tsx`: Main routing and layout with HashRouter, Navbar, Footer
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

### Navigation

- Hash-based routing for smooth scrolling to sections
- ScrollToSection component handles automatic scrolling on hash changes
- Navigation items defined in `constants.ts` NAVIGATION_ITEMS

### Github

- Github cli tool is install you can use it to push and pull changes
