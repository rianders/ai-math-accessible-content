# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based interactive presentation about using AI-assisted workflows to improve accessibility for challenging content types (math notation, handwritten content, complex visuals). The presentation is deployed on GitHub Pages at: https://rianders.github.io/ai-math-accessible-content/

## Architecture

### No Build System
This project uses a **zero-build architecture** - everything runs directly in the browser:
- React 18 and ReactDOM loaded via CDN (`unpkg.com`)
- Babel Standalone for runtime JSX transformation
- No webpack, Vite, or other bundlers
- No npm dependencies or package.json

### Key Files
- `index.html` - **Self-contained presentation file** with inlined React component. This is the only file needed to run the presentation.
- `AI_Accessibility_Presentation.jsx` - Source JSX file kept for reference and easier editing

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

**Testing locally:** Open `index.html` in a browser - no server required

**Deploying changes:**
```bash
git add .
git commit -m "Description of changes"
git push
```
GitHub Pages automatically rebuilds from the main branch.

## Presentation Navigation

- Arrow keys / Space / PageDown: Next slide
- Arrow left / PageUp: Previous slide
- Home: First slide
- End: Last slide
- Escape: Close slide menu
- Click slide counter: Toggle slide menu

## Editing Content

The presentation code is embedded within the `<script type="text/babel">` tag in `index.html`.

**Editing workflow:**
1. Edit the JSX code directly in `index.html` between the script tags, OR
2. Edit `AI_Accessibility_Presentation.jsx` and then rebuild by running:
   ```bash
   # Rebuild index.html from JSX source
   cat > index.html << 'EOF'
   [HTML header content]
   <script type="text/babel">
   EOF
   cat AI_Accessibility_Presentation.jsx >> index.html
   cat >> index.html << 'EOF'
   [HTML footer content with mount code]
   EOF
   ```

**To add/modify slides:**
1. Find the `slides` array near the top of the script section
2. Add/edit objects in the array
3. Each slide has a `type` field that maps to a component (e.g., `type: 'title'` → `TitleSlide`)
4. Available slide types: title, agenda, objectives, alert, content-challenges, toolkit, standards, success-with-examples, problem-with-examples, focus-with-examples, screen-reader-demo, gap-example, solution, framework, workflow-example, prompt-example, setup, demo, workflow, activity, discussion, student, takeaways, resources, upcoming-workshops, closing

**To create a new slide type:**
1. Create a new component function in the script section (e.g., `const MySlideType = ({ data }) => (...)`)
2. Add it to the `slideComponents` object mapping
3. Add slide data with matching `type: 'my-slide-type'` to the `slides` array
