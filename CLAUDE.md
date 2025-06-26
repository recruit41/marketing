# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode  
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React + TypeScript marketing website built with Vite, using shadcn/ui components and Tailwind CSS. The project follows a modern React SPA architecture with client-side routing.

### Key Architecture Patterns

- **Component Structure**: Components are organized into logical folders:
  - `src/components/ui/` - shadcn/ui component library (40+ components including accordion, button, card, dialog, etc.)
  - `src/components/sections/` - Reusable page sections (HeroSection, Navigation, Footer, FeaturesGrid, etc.)
  - `src/components/animations/` - Interactive animation components that showcase product features
  - `src/components/docs/` - Documentation-specific components (DocsLayout, etc.)
  - `src/pages/` - Route-level page components and feature detail pages
  - `src/pages/features/` - Dedicated feature showcase pages
  - `src/pages/docs/` - Documentation pages (DocsIndex, CandidateGuide, RecruiterGuide, EmailTemplates)
  - `docs/` - Static documentation assets (images, markdown content)

- **Routing**: Uses React Router v6 with routes defined in `src/App.tsx`:
  - `/` - Main landing page (Index.tsx)
  - `/features/screening` - AI screening feature showcase
  - `/features/interviews` - AI interviews feature showcase  
  - `/features/whatsapp` - WhatsApp integration feature showcase
  - `/docs` - Documentation main page (DocsIndex.tsx)
  - `/docs/candidate` - Candidate interview guide (CandidateGuide.tsx)
  - `/docs/recruiter` - Recruiter platform guide (RecruiterGuide.tsx)
  - `/docs/recruiter/email-templates` - Email templates for recruiters (EmailTemplates.tsx)
  - `*` - 404 NotFound page (catch-all route)

- **Styling System**: Tailwind CSS with extensive customization:
  - Primary brand color: Orange (#f97316)
  - Custom mono color palette (50-950 shades for minimalistic black/white design)
  - Custom animations: fade-in-up, bounce-in, slide-in-left/right
  - Inter font family as default sans-serif
  - CSS variables for theme consistency via shadcn/ui
  - Custom keyframes and animation utilities

- **State Management**: 
  - TanStack Query v5 for server state management
  - React built-in state (useState, useReducer) for local UI state
  - No global state management library (Redux, Zustand) currently used

### Project Structure & Entry Flow

- **Entry Point**: `src/main.tsx` → `src/App.tsx` → route components
- **Main Landing**: Index page (`src/pages/Index.tsx`) composes multiple section components in sequence
- **Feature Pages**: Dedicated showcase pages in `src/pages/features/` with interactive animations
- **UI Library**: Complete shadcn/ui implementation with 40+ components in `src/components/ui/`
- **Utilities**: Common utilities in `src/lib/utils.ts`, custom hooks in `src/hooks/`

### Configuration & Tooling

- **TypeScript**: Relaxed configuration (noImplicitAny: false, strictNullChecks: false)
- **Path Aliases**: `@/*` maps to `./src/*` for cleaner imports
- **Vite Config**: Development server on `::` (all interfaces) port 8080
- **ESLint**: Modern flat config in `eslint.config.js`
- **shadcn/ui**: Configured via `components.json` with default style and slate base color
- **Lovable Integration**: componentTagger plugin enabled in development mode only

### Development Patterns

- Use existing shadcn/ui components before creating custom ones
- Follow the established section-based architecture for new pages
- Animation components should be self-contained and demonstrate specific features
- Maintain consistent styling using Tailwind classes and the custom design system
- New routes must be added to the Routes component in `src/App.tsx` above the catch-all route