# RaftLabs-intern-assignment

# PublicAPIHub

A modern, full-featured directory and explorer for public APIs built with Next.js 14, TypeScript, and Tailwind CSS. Discover, browse, and learn about APIs across multiple categories with an intuitive interface powered by static generation and ISR.

![Next.js 14](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Dataset & Sources](#dataset--sources)
- [Data Generation Process](#data-generation-process)
- [Design Inspiration](#design-inspiration)
- [AI Prompt Examples](#ai-prompt-examples)

## Features

✨ **Core Features:**
- **API Directory** - Browse 20+ curated public APIs across 10+ categories
- **Advanced Search** - Real-time search across API names and descriptions
- **Smart Filtering** - Filter by category, auth type, pricing, and CORS support
- **Multiple View Modes** - Toggle between grid and list views
- **Dynamic Routing** - Detailed API pages with `/api/[id]` pattern
- **Category Pages** - Organized browsing by technology category
- **Responsive Design** - Mobile-first approach with perfect accessibility
- **Scroll Animations** - Smooth scroll indicators and animated transitions
- **Static Generation** - ISR and SSG for optimal performance
- **Dark Mode Ready** - Full dark mode support with theme tokens

## Tech Stack

### Core Framework
- **Next.js 14+** - React framework with App Router
- **React 18.3** - UI library
- **TypeScript 5.8** - Static type checking
- **Tailwind CSS 3.4** - Utility-first CSS framework

### UI & Components
- **Radix UI 1.2+** - Unstyled, accessible component library (40+ components)
- **shadcn/ui** - High-quality React components built on Radix UI
- **Lucide React** - Beautiful, consistent icon library
- **Framer Motion** - Animation library for smooth transitions
- **Embla Carousel** - Carousel component library

### Developer Tools
- **ESLint 9.32** - Code quality and style enforcement
- **TypeScript ESLint 8.38** - TS-specific linting
- **Tailwind CSS Typography** - Professional typography
- **React Query 5.83** - Data fetching and caching (prepared for use)

### Build & Development
- **Vite 5.4** - Lightning-fast build tool
- **PostCSS 8.5** - CSS processing
- **Autoprefixer 10.4** - Browser compatibility

### Data & Validation
- **Zod 3.25** - TypeScript-first schema validation
- **React Hook Form 7.61** - Performant forms with validation

## Dataset & Sources

### API Dataset: 20 Curated Public APIs

The project includes **20 high-quality, production-grade APIs** across diverse categories:


### API Categories & Count
| Category | Count | Examples |
|----------|-------|----------|
| Payment | 1 | Stripe |
| AI & ML | 1 | OpenAI |
| Finance | 3 | Alpha Vantage, ExchangeRate, Coinbase |
| Social Media | 1 | Twitter |
| Communication | 2 | Twilio, SendGrid |
| Maps & Location | 1 | Google Maps |
| Weather | 1 | WeatherAPI |
| Entertainment | 1 | TMDB |
| Images | 1 | Unsplash |
| News | 1 | News API |
| Video | 1 | YouTube |
| Development | 2 | GitHub, RapidAPI |
| Backend | 1 | Firebase |
| Music | 1 | Spotify |
| Science | 1 | NASA |
| Data | 1 | REST Countries |

### Data Sources

API_dataset :https://github.com/public-apis/public-apis




## Design Inspiration

### Design from Gsoc website

**PublicAPIHub** combines modern design principles with developer-first UX:

#### Color System

\`\`\`css
/* Light Mode */
--background: 0 0% 100%;        /* Clean white */
--foreground: 222.2 84% 4.9%;   /* Dark navy */
--primary: 222.2 47.4% 11.2%;   /* Professional dark blue */
--secondary: 210 40% 96.1%;     /* Soft gray */
--accent: 210 40% 96.1%;        /* Subtle accent */
--destructive: 0 84.2% 60.2%;   /* Clear red for errors */

/* Dark Mode */
--background: 222.2 84% 4.9%;   /* Deep navy */
--foreground: 210 40% 98%;      /* Off-white text */
--primary: 210 40% 98%;         /* Light accent */
\`\`\`

#### Typography
- **Display Font:** Inter (system font) - Clean, modern
- **Body Font:** Inter - High readability
- **Monospace:** SF Mono fallback - Code blocks

#### Design Patterns
- **Radix UI Primitives** - Unstyled components for complete control
- **Tailwind Utilities** - Responsive, accessible by default
- **Atomic Design** - Component hierarchy and reusability
- **Mobile-First** - Start small, enhance for larger screens

### Inspiration Sources

1. **Stripe Documentation** - Clean, minimal API explorer
2. **GitHub's API Docs** - Information architecture and filtering
3. **Vercel Documentation** - Modern developer experience
4. **Dribbble Design Trends** - Smooth animations and interactions
5. **Material Design 3** - Accessibility and contrast guidelines


## AI Prompt Examples


\`\`\`

### Prompt 1: Data Formatting and Structuring with Claude

\`\`\`
Prompt:
"I have a list of 20 public APIs with their details. Create a standardized 
JSON schema that includes: name, description, base URL, authentication type, 
pricing, category, features, use cases, documentation link, rate limits, 
and boolean flags for HTTPS  support. Ensure the schema is 
extensible for future additions. Also provide TypeScript interfaces for 
type safety."

Result Used:
- Standardized apis.json with consistent schema
- TypeScript ApiEntry interface for type safety
- Category enum for consistency
- Validation logic with Zod
\`\`\`

### Prompt 2: Search and Filter Feature Implementation and smooth transition using vercel

\`\`\`
Prompt:
"Build a search and filter system for an API directory with real-time search across name and description, Category filter dropdown, Pricing filter (free/paid), sort options (A-Z, category, rating), display filtered results count

Result Used:
- Custom useSearch hook with debouncing
- Multi-select filtering with Radix UI Select
- Real-time results update with useMemo
\`\`\`


