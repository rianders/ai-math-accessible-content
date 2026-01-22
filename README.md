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

## Local Development

No build process required! Simply open `index.html` in a web browser.

The presentation uses:
- React 18 (via CDN)
- Babel Standalone for JSX transformation
- Pure client-side rendering

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
├── index.html                            # Self-contained presentation (HTML + inlined React component)
├── AI_Accessibility_Presentation.jsx     # Source JSX file (for reference/editing)
├── workshop-planning-document.md         # Workshop planning notes
└── README.md                             # This file
```

**Note:** The presentation is entirely self-contained in `index.html`. The JSX file is kept as a source reference.

## License

This presentation is intended for educational purposes.
