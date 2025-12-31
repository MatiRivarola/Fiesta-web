# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Fiesta Hub - Party Games** is a Progressive Web App (PWA) built with React, TypeScript, and Vite. It's a collection of party games designed for social gatherings, featuring a vibrant neon aesthetic and Spanish/Cordobés (Argentina) slang. The app includes four main games: Ruleta Tóxica (Toxic Roulette), La Bomba (The Bomb), Yo Nunca Picante (Never Have I Ever), and El Tribunal (The Court).

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## Project Architecture

### Core Structure

- **App.tsx**: Main application entry point. Manages game views, modal states, and disclaimer acceptance. Uses enum-based view switching between menu and individual games.
- **index.tsx**: React root initialization (minimal - just renders App into DOM)
- **types.ts**: Central type definitions including `GameView` enum, `Player`, `BombTopic`, `RouletteTask`, `NeverEverQuestion`, and `CourtQuestion` interfaces

### Components Organization

**Layout Components** (`/components`)
- `Disclaimer.tsx`: Initial disclaimer screen users must accept
- `GameCard.tsx`: Reusable game selection card with neon border effects
- `InfoModal.tsx`: Instructions modal with customizable colors per game
- `InstallPrompt.tsx`: PWA installation prompt
- `NeonButton.tsx`: Styled button component with neon effects

**Game Components** (`/components/games`)
- `ToxicRoulette.tsx`: Truth/dare roulette with category selection (Tranca, Picante, Tóxico, Bizarro)
- `TheBomb.tsx`: Hot-potato style word game with timer
- `NeverHaveIEver.tsx`: "Never Have I Ever" with multiple categories
- `TheCourt.tsx`: Voting/judging game with countdown

### Utilities (`/utils`)

- **audio.ts**: Sound effect management using Web Audio API. Generates beeps, explosions, and tick sounds programmatically. All sounds are synthesized, no external audio files required.
- **storage.ts**: LocalStorage management for game history. Tracks seen items with 4-hour expiration to prevent repetition. Includes auto-cleanup of expired entries.

### Data Management

- **constants.ts**: All game content (questions, challenges, topics). Contains 100+ items per game category. Uses helper functions to generate unique IDs and organize content by category.

### Configuration

- **vite.config.ts**:
  - Server runs on port 3000, accessible from network (host: '0.0.0.0')
  - PWA plugin configured with auto-update, manifest, and Workbox caching strategies
  - Path alias: `@/` maps to project root
  - Environment variable injection: `GEMINI_API_KEY` (currently unused in production code)
  - Caching strategies for Google Fonts, esm.sh, and Tailwind CDN

- **tsconfig.json**:
  - Target ES2022 with experimental decorators enabled
  - Bundler module resolution
  - Path alias matching Vite config

### Styling

- Uses Tailwind CSS (loaded via CDN in index.html)
- Neon color theme: pink (#ff00ff), green (#39ff14), purple (#b026ff), cyan (#00ffff)
- Dark background (#0a0a0a) with glass-morphism effects
- Responsive design with mobile-first approach

### PWA Features

- Fully installable as standalone app
- Service worker with Workbox for offline support
- Manifest configured with icons (192x192, 512x512)
- Caches fonts, CSS, and essential resources
- Display mode: standalone (hides browser UI)

## Key Development Patterns

1. **Game State Management**: Each game component manages its own state (players, current item, timer, etc.) using React hooks
2. **Content Randomization**: Games use storage utility to track seen items and filter them out for 4 hours
3. **Sound Design**: All audio is generated programmatically via Web Audio API - no audio files to manage
4. **Type Safety**: Strong TypeScript typing throughout with discriminated unions for game views and categories
5. **Component Reusability**: Shared components (NeonButton, GameCard, InfoModal) accept color props for theming

## Important Notes

- The app is Spanish-language with heavy use of Argentinian slang (specifically Cordobés dialect)
- Content in constants.ts is explicit/adult-oriented - this is intentional for the party game context
- No backend/database - all data is client-side
- GEMINI_API_KEY in .env.local is referenced in vite.config but not currently used in application code
- The app uses enum-based navigation (GameView) rather than routing library
- LocalStorage is the only persistence mechanism (game history tracking)

## Testing & Deployment

This project does not include automated tests. Manual testing should focus on:
- Game flow and state transitions
- PWA installation on mobile devices
- Audio playback across browsers
- LocalStorage persistence and expiration
- Responsive layout on various screen sizes
