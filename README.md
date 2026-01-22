# AI as An Accessibility Improvement Tool

A presentation on using AI-assisted workflows to improve accessibility for challenging content types like math notation, handwritten content, and complex visuals.

## Presenters
Rick Anderson & Suparna Sinha
Office of University Online Education Services

## About

This interactive presentation explores how AI can bridge accessibility gaps when built-in tools fall short, with a focus on:
- ADA Title II requirements and critical deadlines
- Identifying where built-in tools fail (math, handwriting, graphs)
- AI-assisted workflows and prompt frameworks
- Hands-on practice with challenging content
- The Markdown → HTML/MathML → Canvas pipeline

## Viewing the Presentation

The presentation is hosted on GitHub Pages at: [https://YOUR-USERNAME.github.io/ai-math-accessible-content/](https://YOUR-USERNAME.github.io/ai-math-accessible-content/)

Or open `index.html` locally in your web browser.

## Setup

First time setup:
```bash
npm install
npm run build
```

## Local Development

The presentation uses pre-compiled JavaScript for reliable loading.

**To view the presentation:**
Simply open `index.html` in a web browser.

**To make changes:**
1. Edit `AI_Accessibility_Presentation.jsx`
2. Run the build command: `npm run build`
3. Refresh your browser

The presentation uses:
- React 18 (via CDN)
- esbuild for JSX compilation
- Pre-compiled JavaScript for reliable GitHub Pages hosting

## Publishing to GitHub Pages

1. Create a new repository on GitHub
2. Initialize and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/ai-math-accessible-content.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Under "Source", select "main" branch
   - Save

Your presentation will be live at `https://YOUR-USERNAME.github.io/ai-math-accessible-content/`

## Project Structure

```
.
├── index.html                            # Main HTML file
├── presentation.js                       # Compiled React component (generated)
├── AI_Accessibility_Presentation.jsx     # Source JSX file - edit this!
├── package.json                          # Build configuration
├── workshop-planning-document.md         # Workshop planning notes
└── README.md                             # This file
```

**Important:** Edit `AI_Accessibility_Presentation.jsx` and run `npm run build` to update the presentation.

## License

This presentation is intended for educational purposes.
