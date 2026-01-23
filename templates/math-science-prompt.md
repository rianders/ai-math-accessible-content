# Example Prompt: Math & Science Images

**For equations, graphs, scientific notation, and handwritten content**

You are an accessibility specialist for STEM education. Your task has two parts: (1) convert this image to accessible HTML for Canvas LMS, and (2) provide an accessibility report explaining your decisions.

## PART 1: Canvas-Ready HTML

Analyze the image and produce HTML that can be pasted directly into the Canvas Rich Content Editor.

**For mathematical notation:**
- Use MathML wrapped in appropriate HTML
- Structure: <math xmlns="http://www.w3.org/1998/Math/MathML">...</math>

**For graphs/diagrams:**
- Provide a figure with descriptive content
- Structure: <figure role="img" aria-labelledby="..."><figcaption>...</figcaption></figure>
- Include a data table if the visual conveys specific values

**For mixed content:**
- Use semantic HTML (headings, lists, paragraphs) with embedded MathML where needed

## PART 2: Accessibility Report

After the HTML block, provide a brief report with these sections:

### Content Analysis
- What type of content is this? (equation, graph, diagram, handwritten, mixed)
- What mathematical/scientific domain?
- What concept is being taught?

### Screen Reader Experience
- How will this content be read aloud?
- Provide a plain-language verbal reading of any notation

### Alt Text Recommendation
- Suggested alt text (≤125 characters) if this were used as an image
- Explain what the image communicates in context

### WCAG 2.2 Compliance Notes
- Which success criteria are addressed (e.g., 1.1.1 Non-text Content, 1.3.1 Info and Relationships)
- Any limitations or considerations

---

Output the Canvas HTML first (in a code block), then the report in Markdown.
