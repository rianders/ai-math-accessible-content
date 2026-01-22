# AI Accessibility Workshop - Planning Document

## Overview
This document captures todos, comments, and revision notes for the workshop presentation. Use this to track changes needed before the workshop date.

---

## Key Themes to Reinforce Throughout

### 1. Quality Review is Essential
- **Don't assume AI output is high quality** - always review
- We're dealing with extreme/edge cases where tools struggle
- **Final check is always with the faculty person** - they know their content and learning objectives
- AI assists, humans verify

### 2. Beyond STEM
- STEM is a good example of *maximum issues*, but these problems exist in many areas:
  - **Music** - complicated notation, scores, chord diagrams
  - **Art History** - visual analysis, describing artwork meaningfully
  - **Languages** - non-Latin scripts, diacritical marks
  - **Dance/Theater** - movement notation (Labanotation)
  - **Architecture** - technical drawings, blueprints
- Frame the workshop as solving **notation and complex visual problems** broadly, not just math

### 3. HTML as the Reliable Target Format
- **Best practice:** Convert all PDFs, Word docs, PowerPoints → HTML
- Include appropriate MathML or semantic markup in that HTML
- HTML is:
  - More reliable for screen readers
  - More consistent across platforms
  - Easier to maintain and update
  - Native to Canvas LMS

---

## Pipeline Correction

### Current (Incorrect):
```
Pipeline: AI Tool → LaTeX/MathML → Canvas → MathJax renders → Screen readers can read
```

### Corrected Pipeline:
```
AI Tool (outputs Markdown with LaTeX)
    ↓
Convert Markdown → HTML (with LaTeX notation preserved)
    ↓
Paste HTML into Canvas
    ↓
MathJax (built into Canvas) renders LaTeX visually
    ↓
Screen readers (JAWS, NVDA, VoiceOver) read the accessible content
```

### Key Points About the Pipeline:
1. **AI tools prefer Markdown output** - that's their default
2. **Canvas LMS prefers HTML** - we need to convert
3. **LaTeX/MathML notation stays the same** during conversion
4. **MathJax is automatic/under the hood** - faculty may not realize it's working
5. **Multiple screen reader options** - Canvas built-in + external (JAWS, NVDA, etc.)

---

## Slide-Specific Todos

### Slide 5: Content Challenges
- [x] Added edge cases for each content type
- [ ] Consider adding music/art examples to the edge cases list

### Slides 8-9: ALLY Examples
- [ ] **PLACEHOLDER:** Screenshots of ALLY success/failure in Canvas
- [ ] Record these from a real Canvas course

### Slide 10: Focus - Math & Scientific Notation
- [ ] **PLACEHOLDER:** Real example images
- [ ] Expand framing beyond STEM - mention music, art history, etc.
- [ ] Add note: "These same challenges appear in music notation, art description, and other fields"

### Slide 11: Screen Reader Demo
- [ ] **CRITICAL - DAY OF:** Record examples from Canvas
- [ ] Embed video clips showing:
  - Screen reader succeeding with proper MathML
  - Screen reader failing on image-only content
  - Screen reader reading poor alt text
- [ ] Mention specific screen readers: JAWS, NVDA, VoiceOver, Canvas built-in

### Slide 13: Enter AI-Enabled Tools
- [ ] Fix pipeline notation (see corrected version above)
- [ ] Add note about reviewing AI output - don't assume quality
- [ ] Emphasize: "Final check is with you, the faculty expert"

### Slides 16-17: Prompt Examples
- [ ] Add callout box: "These prompts are adaptable to your content area"
- [ ] Add discussion question: **"How would you revise this prompt for your discipline?"**
- [ ] Provide examples of adaptations:
  - Music: "You have expertise in musical notation and score reading..."
  - Art History: "You have expertise in visual analysis and art historical description..."
  - Chemistry: "You have expertise in chemical notation and molecular structures..."

### Slide 19: Demo - Math Notation → Accessible Text
- [ ] **Prioritize HTML output** - make this explicit
- [ ] Add step: "Convert Markdown to HTML for Canvas"
- [ ] Add note: "Also convert existing PDFs, Word docs, PowerPoints to HTML when possible"
- [ ] Emphasize: The goal is HTML in your Canvas course

### Slide 21: Complete Workflow
- [ ] Add explanation of what MathJax does:
  - "MathJax is built into Canvas and works automatically"
  - "It visually renders your LaTeX/MathML notation"
  - "You don't need to install anything - it's under the hood"
- [ ] Add information about screen readers:
  - Canvas has built-in screen reading features
  - External readers (JAWS, NVDA, VoiceOver) also work with Canvas
  - Properly formatted content works with all of them
- [ ] Strengthen the "Review" step - human verification is essential

### Slide 22: Hands-On Activity
- [ ] Reframe for **multi-disciplinary participation**
- [ ] Add: "Try this with content from YOUR field"
- [ ] **BACKUP PLAN:** Have example images ready for faculty who didn't bring their own:
  - Math equation (handwritten)
  - Music score snippet
  - Art history image (painting detail)
  - Scientific diagram
  - Chart/graph
- [ ] Add facilitator note about workshop flow:
  
  ```
  FACILITATOR NOTE:
  - Some participants drop off at this point
  - Those who stay can work independently or with facilitator support
  - Plan for 1:1 or small group assistance
  - Reserve time at end to share results
  ```

### Slide 23: Discussion/Debrief
- [ ] Make sure timing allows for sharing from hands-on activity
- [ ] Add: "Let's see what you created"

### Slide 26: Resources
- [ ] **Specify Rutgers-specific resources:**
  - [ ] Rutgers Accessibility website/contact
  - [ ] UOES support channels
  - [ ] Canvas help resources at Rutgers
  - [ ] Disability Services contact
  - [ ] IT Accessibility office
- [ ] Add links to:
  - [ ] Workshop prompt templates (shareable document)
  - [ ] MathJax documentation
  - [ ] ALLY resources for Rutgers

### Slide 27: Upcoming Workshops
- [ ] **PLACEHOLDER:** Add current accessibility workshop schedule from UOES

---

## Content to Prepare Before Workshop

### Screenshots/Recordings Needed
- [ ] ALLY success example in Canvas (green accessibility score)
- [ ] ALLY failure example in Canvas (red score on math image)
- [ ] ALLY auto-generated alt text (good example)
- [ ] ALLY auto-generated alt text (inadequate example)
- [ ] Screen reader demo video (60-90 seconds)
- [ ] MathJax rendering in Canvas (before/after)

### Example Images for Activity
Prepare a folder with example images faculty can use if they didn't bring their own:
- [ ] Handwritten math equation
- [ ] Whiteboard photo with notation
- [ ] Music score snippet
- [ ] Artwork for art history description
- [ ] Scientific diagram (biology, chemistry, physics)
- [ ] Complex chart or graph
- [ ] Scanned document page

### Documents to Create/Share
- [ ] Prompt template document (shareable with attendees)
- [ ] Quick reference card: AI → Markdown → HTML → Canvas workflow
- [ ] List of Rutgers accessibility resources

---

## Workshop Flow Notes

### Timing Consideration (Slide 22)
> "People drop off at this slide"

**Revised approach:**
1. Acknowledge this is a natural break point
2. Explicitly say: "If you need to leave, you have what you need to get started"
3. For those staying: "We'll work hands-on and share at the end"
4. Offer options:
   - Work independently on your own content
   - Work with a partner
   - Work with facilitator support on an example
5. Final 10 minutes: Share and discuss results

### Key Messages to Repeat
1. "Built-in tools first, AI for the gaps"
2. "AI assists, you verify"
3. "HTML is your reliable target format"
4. "These techniques work beyond STEM"

---

## Questions to Address in Workshop

1. **From faculty:** "How do I adapt this prompt for my field?"
2. **Technical:** "What if the AI gets the math wrong?"
3. **Practical:** "How much time does this actually take?"
4. **Policy:** "Is this compliant with Rutgers accessibility requirements?"
5. **Tools:** "Which AI tool is best for my use case?"

---

## Post-Workshop Follow-up
- [ ] Share presentation file
- [ ] Share prompt templates
- [ ] Provide contact info for follow-up questions
- [ ] Survey for feedback
- [ ] Offer 1:1 consultations for complex cases

---

## Notes for Future Iterations
- Consider discipline-specific breakout sessions
- Develop case studies from different fields
- Create video tutorial series based on workshop content
- Build library of before/after examples

