# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based interactive presentation about using AI-assisted workflows to improve accessibility for challenging content types (math notation, handwritten content, complex visuals). The presentation is deployed on GitHub Pages at: https://rianders.github.io/ai-math-accessible-content/

## Architecture

### Simple Build System
This project uses a **minimal build process** for reliable GitHub Pages hosting:
- React 18 and ReactDOM loaded via CDN (`unpkg.com`)
- esbuild compiles JSX to plain JavaScript
- No complex bundler configuration
- Single dev dependency (esbuild)

### Key Files
- `index.html` - Main HTML file that loads React from CDN and the compiled presentation
- `AI_Accessibility_Presentation.jsx` - **Source file to edit** - contains all presentation code
- `presentation.js` - **Generated file** - compiled JavaScript (do not edit directly)
- `package.json` - Build configuration

### Component Structure
The presentation uses a **data-driven slide system**:

1. **Slides Array** (line 3): Defines all slide content as data objects with `type` and content fields
2. **Slide Components** (lines 557-1100): Individual React components for each slide type (TitleSlide, AgendaSlide, etc.)
3. **Main Presentation Component** (line 1128):
   - Manages navigation state (`currentSlide`)
   - Keyboard controls (arrow keys, space, page up/down, home/end)
   - Slide menu toggle
   - Act-based organization (5 acts: Challenge, Gap, Solution, Practice, Closing)

### Important Constraint
The JSX file must be compatible with Babel Standalone. This means:
- Use `const { useState, useEffect, useCallback } = React;` instead of ES6 imports
- No module imports/exports in the component file (export default is processed by index.html)

## Development Workflow

**Initial setup:**
```bash
npm install
```

**Making changes:**
1. Edit `AI_Accessibility_Presentation.jsx`
2. Build: `npm run build`
3. Test: Open `index.html` in a browser

**Deploying changes:**
```bash
npm run build
git add .
git commit -m "Description of changes"
git push
```
GitHub Pages automatically rebuilds from the main branch.

**Important:** Always run `npm run build` before committing to ensure `presentation.js` is up to date.

## Presentation Navigation

- Arrow keys / Space / PageDown: Next slide
- Arrow left / PageUp: Previous slide
- Home: First slide
- End: Last slide
- Escape: Close slide menu
- Click slide counter: Toggle slide menu

## Editing Content

**IMPORTANT:** Always edit `AI_Accessibility_Presentation.jsx`, never edit `presentation.js` directly (it's auto-generated).

**Editing workflow:**
1. Edit `AI_Accessibility_Presentation.jsx`
2. Run `npm run build`
3. Test in browser
4. Commit both files

**To add/modify slides:**
1. Open `AI_Accessibility_Presentation.jsx`
2. Find the `slides` array (starts around line 3)
3. Add/edit slide objects in the array
4. Each slide has a `type` field that maps to a component (e.g., `type: 'title'` → `TitleSlide`)
5. Run `npm run build` to compile

**Available slide types:**
title, agenda, objectives, alert, content-challenges, toolkit, standards, success-with-examples, problem-with-examples, focus-with-examples, screen-reader-demo, gap-example, solution, framework, workflow-example, prompt-example, setup, demo, workflow, activity, discussion, student, takeaways, resources, upcoming-workshops, closing

**To create a new slide type:**
1. Add a new component function in `AI_Accessibility_Presentation.jsx` (e.g., `const MySlideType = ({ data }) => (...)`)
2. Add it to the `slideComponents` object mapping (around line 1100)
3. Add slide data with matching `type: 'my-slide-type'` to the `slides` array
4. Run `npm run build`
