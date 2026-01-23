var PresentationModule = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // AI_Accessibility_Presentation.jsx
  var AI_Accessibility_Presentation_exports = {};
  __export(AI_Accessibility_Presentation_exports, {
    default: () => Presentation
  });
  var { useState, useEffect, useCallback } = React;
  var slides = [
    // ACT 1: THE CHALLENGE
    {
      id: 1,
      type: "title",
      title: "AI as An Accessibility Improvement Tool",
      subtitle: "Bridging the gap when built-in tools fall short\u2014focusing on math notation, handwritten content, and complex visuals",
      presenter: "Rick Anderson & Suparna Sinha",
      org: "Office of University Online Education Services",
      date: "January 23, 2025"
    },
    {
      id: 2,
      type: "access-materials",
      title: "Access This Presentation",
      url: "https://rianders.github.io/ai-math-accessible-content/",
      shortUrl: "rianders.github.io/ai-math-accessible-content",
      instructions: [
        "Scan the QR code with your mobile device",
        "Or visit the URL in your browser",
        "Bookmark for future reference"
      ]
    },
    {
      id: 3,
      type: "agenda",
      title: "Workshop Agenda",
      duration: "90 minutes",
      sections: [
        { name: "The Challenge", desc: "ADA requirements and what content needs to be accessible", time: "10 min" },
        { name: "The Gap", desc: "Where built-in tools fail us\u2014math, handwriting, graphs", time: "15 min" },
        { name: "The Solution", desc: "AI-assisted workflows and prompt frameworks", time: "25 min" },
        { name: "Hands-On Practice", desc: "Try the tools with your own challenging content", time: "30 min" },
        { name: "Wrap-Up", desc: "Discussion, resources, and next steps", time: "10 min" }
      ]
    },
    {
      id: 4,
      type: "objectives",
      title: "Workshop Objectives",
      subtitle: "By the end of this session, you will be able to:",
      items: [
        { verb: "Evaluate", text: "where built-in tools succeed and where they fail" },
        { verb: "Identify", text: '"hard cases" for accessibility: math notation, handwriting, complex graphs' },
        { verb: "Apply", text: "AI-assisted workflows to transform inaccessible content" },
        { verb: "Write", text: "effective prompts for STEM accessibility using our framework" },
        { verb: "Understand", text: "the Markdown \u2192 HTML/MathML \u2192 Canvas pipeline" }
      ]
    },
    {
      id: 6,
      type: "alert",
      title: "The Accessibility Imperative",
      headline: "Making Learning Accessible for All: Meeting ADA Title II Standards",
      deadline: "Critical Deadline: April 24, 2026",
      question: "How do we ensure ALL course content\u2014including the hard stuff\u2014is accessible?"
    },
    {
      id: 6,
      type: "content-challenges",
      title: "What Content Needs to be Accessible?",
      intro: "Existing tools move us a long way toward our goal, but each content type has difficult edge cases:",
      items: [
        { type: "Audio", desc: "Transcripts, screen reader compatibility", challenge: "Technical jargon, accents, multiple speakers" },
        { type: "Video", desc: "Captions, audio descriptions", challenge: "Visual demos, notation on screen, fast-paced content" },
        { type: "Images", desc: "Alt text, long descriptions", challenge: "Handwriting, equations, complex diagrams" },
        { type: "PDFs", desc: "Tagged structure, reading order", challenge: "Scanned documents, multi-column layouts, forms" },
        { type: "Presentations", desc: "Slide structure, image descriptions", challenge: "Embedded media, animations, speaker notes context" }
      ],
      note: "Today we focus on the image challenges\u2014particularly math notation and handwritten content\u2014where AI tools can help bridge the gap."
    },
    {
      id: 7,
      type: "pdf-inspector",
      title: "PDF Inspector Tool",
      subtitle: "Investigate PDF accessibility issues and preview screen reader experience",
      url: "https://huggingface.co/spaces/rianders/pdfinspector",
      shortUrl: "huggingface.co/spaces/rianders/pdfinspector",
      features: [
        "Upload any PDF to analyze its accessibility",
        "See how screen readers interpret the document",
        "Identify missing tags, reading order issues, and more",
        "Get specific feedback on what needs fixing"
      ],
      callToAction: "Try it with your own PDFs during the workshop!"
    },
    {
      id: 9,
      type: "toolkit",
      title: "Our Existing Toolkit at Rutgers",
      intro: "These built-in tools handle standard accessibility tasks well:",
      columns: [
        {
          heading: "Canvas & ALLY",
          items: [
            "Accessibility score indicators",
            "Auto-generated alt text suggestions",
            "Alternative format downloads",
            "Document structure checking"
          ]
        },
        {
          heading: "Microsoft 365",
          items: [
            "PowerPoint alt-text generator",
            "Accessibility Checker",
            "Immersive Reader",
            "Auto-captions in video"
          ]
        }
      ]
    },
    {
      id: 9,
      type: "standards",
      title: "Our Target: WCAG Standards",
      subtitle: "POUR Principles",
      principles: [
        { letter: "P", name: "Perceivable", desc: "Content works for all senses\u2014alt text, captions, good contrast" },
        { letter: "O", name: "Operable", desc: "Keyboard accessible, enough time to interact" },
        { letter: "U", name: "Understandable", desc: "Clear language, predictable layout" },
        { letter: "R", name: "Robust", desc: "Works across devices and assistive technologies" }
      ]
    },
    {
      id: 10,
      type: "success-with-examples",
      title: "Where Built-in Tools Excel",
      intro: "ALLY and PowerPoint handle these well:",
      items: [
        { icon: "\u2713", text: "Standard photographs with clear subjects" },
        { icon: "\u2713", text: "Simple diagrams and flowcharts" },
        { icon: "\u2713", text: "Typed text documents" },
        { icon: "\u2713", text: "Basic charts with clear labels" },
        { icon: "\u2713", text: "Decorative images (mark as decorative)" }
      ],
      conclusion: "For typical course content, these tools get you 80% of the way there.",
      placeholder: {
        type: "screenshots",
        instruction: "ADD SCREENSHOTS: ALLY success examples in Canvas",
        suggestions: [
          "ALLY accessibility score indicator (green) on a standard image",
          "ALLY auto-generated alt text for a photograph",
          "PowerPoint accessibility checker passing"
        ]
      }
    },
    // ACT 2: THE GAP
    {
      id: 11,
      type: "problem-with-examples",
      title: "Where Built-in Tools Fail Us",
      intro: "But what about content like this?",
      items: [
        { icon: "\u2717", text: "Handwritten notes and annotations", example: "Lecture notes, student work" },
        { icon: "\u2717", text: "Chalkboard and whiteboard images", example: "Classroom captures, worked problems" },
        { icon: "\u2717", text: "Mathematical notation and equations", example: "Formulas, proofs, expressions" },
        { icon: "\u2717", text: "Scientific notation and symbols", example: "Chemistry, physics, engineering" },
        { icon: "\u2717", text: "Complex graphs and data visualizations", example: "Research figures, technical diagrams" },
        { icon: "\u2717", text: "Videos containing notation", example: "Recorded lectures with equations" }
      ],
      conclusion: "These are where screen readers and auto-generators struggle\u2014or fail completely.",
      placeholder: {
        type: "screenshots",
        instruction: "ADD SCREENSHOTS: ALLY failure examples",
        suggestions: [
          "ALLY accessibility score (red/orange) on a math equation image",
          "ALLY's inadequate auto-generated text for handwritten notes",
          `ALLY's description of a graph showing "image of a chart"`
        ]
      }
    },
    {
      id: 12,
      type: "focus-with-examples",
      title: "Focus: Math & Scientific Notation",
      subtitle: "Why is this particularly challenging?",
      challenges: [
        {
          problem: "Visual complexity",
          detail: "Fractions, exponents, integrals, matrices\u2014structure matters as much as symbols"
        },
        {
          problem: "Screen reader limitations",
          detail: 'Reading "x squared" vs. displaying x\xB2 requires proper encoding (LaTeX, MathML)'
        },
        {
          problem: "Handwritten variability",
          detail: "Every instructor's notation looks different\u2014OCR struggles"
        },
        {
          problem: "Context dependency",
          detail: "The same symbol means different things in different fields"
        }
      ],
      placeholder: {
        type: "images",
        instruction: "ADD EXAMPLE IMAGES: Real math/science content",
        suggestions: [
          "Handwritten equation from a real lecture",
          "Whiteboard capture with calculus notation",
          "Chemistry notation (molecular formulas)",
          "Physics diagram with vectors/equations"
        ]
      }
    },
    {
      id: 13,
      type: "screen-reader-demo",
      title: "Hearing the Difference: Screen Reader Demo",
      subtitle: "What does inaccessible content sound like?",
      demos: [
        { label: "Good", desc: "Screen reader successfully reading MathML equation", status: "working" },
        { label: "Bad", desc: "Screen reader hitting image with no alt text", status: "failing" },
        { label: "Inadequate", desc: 'Screen reader reading "image of mathematical formula"', status: "poor" }
      ],
      placeholder: {
        type: "video",
        instruction: "ADD VIDEO: Screen reader demonstration (60-90 seconds)",
        suggestions: [
          "Option A: Embedded video with three short clips",
          "Option B: Link to external demonstration",
          "Option C: Live demo during presentation"
        ]
      }
    },
    {
      id: 14,
      type: "gap-example",
      title: "The Accessibility Gap in STEM",
      subtitle: "What happens when tools fail:",
      scenarios: [
        {
          situation: "Professor uploads photo of whiteboard with derivation",
          builtin: 'ALLY says: "Image of whiteboard with writing"',
          needed: "Full transcription of the mathematical steps in accessible format"
        },
        {
          situation: "Scanned PDF of textbook page with equations",
          builtin: "No text layer\u2014completely inaccessible",
          needed: "OCR with proper math notation (LaTeX/MathML)"
        },
        {
          situation: "Graph showing function behavior",
          builtin: '"A graph with lines"',
          needed: "Description of what the graph communicates mathematically"
        }
      ]
    },
    // ACT 3: THE SOLUTION
    {
      id: 15,
      type: "solution",
      title: "Enter AI-Enabled Tools",
      subtitle: "Multimodal AI can bridge the gap",
      intro: "Modern AI chatbots can see images AND understand mathematical context:",
      tools: [
        { name: "Google Gemini", capability: "Strong math OCR, LaTeX/MathML output, context understanding" },
        { name: "ChatGPT", capability: "Image analysis, equation transcription, explanations" },
        { name: "Microsoft Copilot", capability: "Integrated with Office, good for document workflows" }
      ],
      keypoint: "These aren't replacements for ALLY\u2014they're gap-fillers for the hard cases.",
      formatNote: "Output note: AI tools output LaTeX/MathML notation. MathJax (built into Canvas) renders these formats accessibly in the browser.",
      pipelineNote: "AI Tool \u2192 LaTeX/MathML \u2192 Canvas \u2192 MathJax renders \u2192 Screen readers can read"
    },
    {
      id: 16,
      type: "framework",
      title: "The Prompt Framework",
      heading: "Getting good results requires good prompts:",
      elements: [
        { name: "Role", desc: "You are an accessibility specialist creating alt text for STEM education..." },
        { name: "Task", desc: "Transcribe this handwritten equation into LaTeX and provide a verbal description..." },
        { name: "Context", desc: "This is from a Calculus II lecture on integration by parts..." },
        { name: "Objective", desc: "A screen reader user should understand both the notation AND the concept..." },
        { name: "Format", desc: "Provide: 1) LaTeX code, 2) Plain English reading, 3) Conceptual summary" }
      ]
    },
    {
      id: 17,
      type: "workflow-example",
      title: "Prompt Framework in Action",
      subtitle: "A complete example from image to accessible content",
      placeholder: {
        type: "workflow-demo",
        instruction: "ADD COMPLETE EXAMPLE: Show the full workflow",
        example: {
          inputImage: "[Photo of handwritten integral: \u222Bx\xB2dx]",
          promptUsed: "You are an accessibility specialist for STEM education... This is from a Calculus I lecture on basic integration. Transcribe and provide accessible description.",
          aiOutput: {
            latex: "\\int x^2 \\, dx = \\frac{x^3}{3} + C",
            screenReader: "The integral of x squared dx equals x cubed over 3 plus C",
            altText: "Integration example: the antiderivative of x squared is x cubed divided by 3, plus constant"
          },
          canvasRender: "[Screenshot of how this looks in Canvas with MathJax]"
        },
        suggestions: [
          "Use a real image from one of your courses",
          "Show the actual AI conversation",
          "Include screenshot of final Canvas page"
        ]
      }
    },
    {
      id: 18,
      type: "prompt-example",
      title: "Example Prompt: General Images",
      subtitle: "For photographs, diagrams, icons, and standard visuals",
      prompt: `You are an accessibility checker and alt text generator following WCAG 2.2 and the POUR principles (Perceivable, Operable, Understandable, Robust).

Your task: evaluate the current alt text (if any) and suggest improvements based on the image, its function, and the surrounding course content.

Step 1 \u2013 Analyze Context & Image
\u2022 Type of image: photo, chart, diagram, icon, decorative, or functional?
\u2022 Core information: what is the main message or data shown?
\u2022 Surrounding content: is this already described in nearby text?
\u2022 Complexity: short alt text or long description needed?

Step 2 \u2013 POUR Evaluation
\u2022 Perceivable: Is essential visual info described? If decorative, should alt="" be used?
\u2022 Operable: If interactive, does the alt text describe the action or purpose, not appearance?
\u2022 Understandable: Is it clear, accurate, concise (\u2264125 chars), or is a longer description required?
\u2022 Robust: Is it in correct syntax and compatible with assistive tech?

Step 3 \u2013 Output Format
1. Current Alt Text Evaluation (Strengths / Weaknesses)
2. POUR Compliance (\u2705/\u274C for each principle with reason)
3. Suggested Alt Text (short \u2264125 chars, long description if needed, or alt="" if decorative)
4. Rationale explaining how the new alt text improves accessibility

AI Rules
\u2022 Check page context first before writing alt text.
\u2022 Avoid "Image of\u2026" unless essential to meaning.
\u2022 Keep language plain and clear.
\u2022 Prioritize the most relevant interpretation for the learner.`
    },
    {
      id: 19,
      type: "prompt-example",
      title: "Example Prompt: Math & Science Images",
      subtitle: "For equations, graphs, scientific notation, and handwritten content",
      prompt: `You are an accessibility specialist for STEM education. Your task has two parts: (1) convert this image to accessible HTML for Canvas LMS, and (2) provide an accessibility report explaining your decisions.

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
- Suggested alt text (\u2264125 characters) if this were used as an image
- Explain what the image communicates in context

### WCAG 2.2 Compliance Notes
- Which success criteria are addressed (e.g., 1.1.1 Non-text Content, 1.3.1 Info and Relationships)
- Any limitations or considerations

---

Output the Canvas HTML first (in a code block), then the report in Markdown.`
    },
    {
      id: 20,
      type: "setup",
      title: "Setting Up Your AI Workflow",
      subtitle: "Save time with reusable configurations",
      methods: [
        {
          tool: "Gemini Gems",
          desc: 'Create a custom "Gem" with your accessibility prompt pre-loaded',
          benefit: "One click to start with the right context every time"
        },
        {
          tool: "ChatGPT Custom Instructions",
          desc: "Set persistent instructions for accessibility-focused responses",
          benefit: "Automatically applies your preferences to every conversation"
        },
        {
          tool: "Saved Prompts",
          desc: "Keep a document of tested prompts for different content types",
          benefit: "Copy-paste efficiency for common scenarios"
        }
      ]
    },
    {
      id: 21,
      type: "demo",
      title: "Demo: Math Notation \u2192 Accessible Text",
      description: "Converting an equation image to accessible format",
      steps: [
        "Upload image of equation to Gemini/ChatGPT",
        'Use prompt: "Transcribe this equation to LaTeX and provide a screen-reader-friendly description"',
        "Review the LaTeX output for accuracy",
        "Copy the verbal description for alt text",
        "Convert Markdown to HTML if needed (LaTeX/MathML syntax stays the same)",
        "Paste into Canvas\u2014MathJax renders LaTeX/MathML notation accessibly"
      ],
      example: {
        input: "Photo of handwritten quadratic formula",
        output: 'LaTeX: x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\nAlt text: "The quadratic formula: x equals negative b plus or minus the square root of b squared minus 4ac, all divided by 2a"'
      }
    },
    {
      id: 22,
      type: "demo",
      title: "Demo: Handwritten Notes \u2192 Digital Text",
      description: "Converting lecture whiteboard captures",
      steps: [
        "Capture clear image of whiteboard/chalkboard",
        "Upload to AI tool with context about the subject",
        'Prompt: "Transcribe all text and notation. For equations, provide LaTeX. Preserve the logical structure."',
        "Review and correct any OCR errors",
        "Format as accessible document or Canvas page"
      ],
      tips: [
        "Better lighting = better results",
        "Include subject context in your prompt",
        "Always verify mathematical accuracy",
        "AI outputs Markdown\u2014Canvas HTML editor accepts it, or convert as needed"
      ]
    },
    {
      id: 23,
      type: "workflow",
      title: "The Complete Accessible Workflow",
      subtitle: "Combining built-in tools with AI assistance",
      steps: [
        { num: 1, tool: "ALLY", action: "Identify content with low accessibility scores", color: "blue" },
        { num: 2, tool: "Evaluate", action: 'Is this standard content or a "hard case"?', color: "gray" },
        { num: 3, tool: "Built-in", action: "For standard content: use ALLY/PowerPoint auto-generate", color: "green" },
        { num: 4, tool: "AI Tool", action: "For hard cases: bring to Gemini/ChatGPT with your prompt framework", color: "purple" },
        { num: 5, tool: "Convert", action: "AI outputs Markdown \u2192 convert to HTML for Canvas (math notation works in both)", color: "orange" },
        { num: 6, tool: "Review", action: "Verify accuracy\u2014especially for math notation", color: "orange" },
        { num: 7, tool: "Canvas", action: "Add accessible content; MathJax renders LaTeX/MathML", color: "blue" }
      ],
      warning: {
        title: "PDF Export Warning",
        text: "When exporting accessible Canvas content to PDF, accessibility features may be lost. The new PDF might not retain proper heading structure, alt text, or MathML accessibility. Keep content in Canvas when possible, or use dedicated accessible PDF creation tools."
      }
    },
    // ACT 4: PRACTICE & APPLICATION
    {
      id: 24,
      type: "activity",
      title: "Hands-On Activity",
      subtitle: "Try it with challenging content",
      steps: [
        { num: 1, text: 'Select a "hard case" image\u2014handwritten notes, equations, or complex diagram' },
        { num: 2, text: "Identify the context: What course? What concept? What should a student learn?" },
        { num: 3, text: "Build your prompt using the framework (Role, Task, Context, Objective, Format)" },
        { num: 4, text: "Submit to an AI tool and evaluate the output" },
        { num: 5, text: "Refine your prompt if needed\u2014iterate for better results" }
      ],
      timeboxed: "15 minutes"
    },
    {
      id: 25,
      type: "discussion",
      title: "Debrief: Comparing Results",
      questions: [
        "How did AI-generated descriptions compare to ALLY auto-generate?",
        "What types of content worked best? What still struggled?",
        "How much prompt refinement was needed?",
        "Would you trust the output without review? Why or why not?"
      ],
      insight: "AI tools are powerful assistants, but human expertise remains essential for verification."
    },
    {
      id: 26,
      type: "student",
      title: "The Student Perspective",
      subtitle: "Empowering students to help themselves",
      points: [
        {
          prompt: '"Describe this image from my textbook so I can understand it"',
          use: "Students with visual impairments can get on-demand descriptions"
        },
        {
          prompt: '"Convert this equation image to text I can use with my screen reader"',
          use: "Immediate access to inaccessible content"
        },
        {
          prompt: '"Explain what this graph is showing in plain language"',
          use: "Comprehension support beyond just accessibility"
        }
      ],
      note: "Teaching students these skills extends accessibility beyond what we can pre-create."
    },
    // CLOSING
    {
      id: 27,
      type: "takeaways",
      title: "Key Takeaways",
      items: [
        { point: "Built-in tools first", detail: "ALLY and PowerPoint handle 80% of accessibility needs effectively" },
        { point: "AI for the gaps", detail: "Handwritten content, math notation, and complex visuals need AI assistance" },
        { point: "Prompts matter", detail: "Context-rich prompts with clear objectives produce better accessible content" },
        { point: "Always verify", detail: "AI output requires human review\u2014especially for STEM notation" },
        { point: "Mind the format", detail: "AI outputs Markdown; Canvas uses HTML; MathJax renders LaTeX/MathML" },
        { point: "PDF caution", detail: "Exporting to PDF may lose accessibility\u2014keep in Canvas when possible" }
      ]
    },
    {
      id: 28,
      type: "resources",
      title: "Resources",
      resources: [
        { name: "Making Learning Accessible for All: Meeting ADA Title II Standards", type: "Policy" },
        { name: "Rutgers University Digital Accessibility Policy", type: "Policy" },
        { name: "Workshop Prompt Templates", type: "Toolkit" },
        { name: "MathJax Documentation for Canvas", type: "Technical" }
      ],
      question: "What other challenging content types should we address in future workshops?"
    },
    {
      id: 29,
      type: "upcoming-workshops",
      title: "Continue Learning",
      categories: [
        {
          heading: "Accessibility Workshops",
          org: "Office of University Online Education Services",
          placeholder: {
            instruction: "ADD: Current accessibility workshop schedule",
            suggestions: [
              "Workshop title, date, registration link",
              "Workshop title, date, registration link"
            ]
          }
        },
        {
          heading: "GenAI Workshops",
          org: "Institute for Teaching, Innovation, and Inclusive Pedagogy",
          sessions: [
            { name: "Beyond ChatGPT \u2013 Navigating Alternative Models", date: "March 6 @ 11:00 am - 12:30 pm" },
            { name: "Teaching and GenAI Explorations: Images", date: "February 20 @ 10:30 am - 11:30 am" }
          ]
        }
      ]
    },
    {
      id: 30,
      type: "closing",
      title: "Thank You!",
      contacts: [
        { name: "Suparna Sinha", email: "suparna@uoes.rutgers.edu" },
        { name: "Rick Anderson", email: "rick.anderson@uoes.rutgers.edu" }
      ],
      org: "Office of University Online Education Services"
    }
  ];
  var TitleSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content title-slide" }, /* @__PURE__ */ React.createElement("div", { className: "title-badge" }, "RUTGERS UNIVERSITY"), /* @__PURE__ */ React.createElement("h1", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("div", { className: "presenter-info" }, /* @__PURE__ */ React.createElement("p", { className: "presenter" }, data.presenter), /* @__PURE__ */ React.createElement("p", { className: "org" }, data.org), /* @__PURE__ */ React.createElement("p", { className: "date" }, data.date)));
  var AccessMaterialsSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content access-materials-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("div", { className: "access-content" }, /* @__PURE__ */ React.createElement("div", { className: "qr-section" }, /* @__PURE__ */ React.createElement("div", { className: "qr-code-container" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(data.url)}`,
      alt: `QR code linking to ${data.url}`,
      className: "qr-code"
    }
  )), /* @__PURE__ */ React.createElement("p", { className: "qr-label" }, "Scan to access on your device")), /* @__PURE__ */ React.createElement("div", { className: "url-section" }, /* @__PURE__ */ React.createElement("div", { className: "url-display" }, /* @__PURE__ */ React.createElement("a", { href: data.url, target: "_blank", rel: "noopener noreferrer", className: "presentation-url" }, data.shortUrl)), /* @__PURE__ */ React.createElement("ul", { className: "access-instructions", role: "list" }, data.instructions.map((instruction, i) => /* @__PURE__ */ React.createElement("li", { key: i }, instruction))))));
  var PDFInspectorSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content pdf-inspector-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "pdf-inspector-subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("div", { className: "pdf-inspector-content" }, /* @__PURE__ */ React.createElement("div", { className: "qr-section" }, /* @__PURE__ */ React.createElement("div", { className: "qr-code-container" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(data.url)}`,
      alt: `QR code linking to ${data.url}`,
      className: "qr-code"
    }
  )), /* @__PURE__ */ React.createElement("p", { className: "qr-label" }, "Scan to try it now")), /* @__PURE__ */ React.createElement("div", { className: "tool-info" }, /* @__PURE__ */ React.createElement("div", { className: "url-display-small" }, /* @__PURE__ */ React.createElement("a", { href: data.url, target: "_blank", rel: "noopener noreferrer", className: "tool-url" }, data.shortUrl)), /* @__PURE__ */ React.createElement("h3", { className: "features-heading" }, "Key Features:"), /* @__PURE__ */ React.createElement("ul", { className: "tool-features", role: "list" }, data.features.map((feature, i) => /* @__PURE__ */ React.createElement("li", { key: i }, feature))), /* @__PURE__ */ React.createElement("div", { className: "call-to-action" }, data.callToAction))));
  var AgendaSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content agenda-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "duration-badge" }, "Duration: ", data.duration), /* @__PURE__ */ React.createElement("div", { className: "agenda-items" }, data.sections.map((section, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "agenda-item" }, /* @__PURE__ */ React.createElement("div", { className: "agenda-num" }, i + 1), /* @__PURE__ */ React.createElement("div", { className: "agenda-content" }, /* @__PURE__ */ React.createElement("h3", null, section.name), /* @__PURE__ */ React.createElement("p", null, section.desc)), /* @__PURE__ */ React.createElement("div", { className: "agenda-time" }, section.time)))));
  var ObjectivesSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "objectives-subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("ul", { className: "objectives-list", role: "list" }, data.items.map((item, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "verb" }, item.verb), /* @__PURE__ */ React.createElement("span", null, item.text)))));
  var AlertSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content alert-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("div", { className: "alert-box", role: "alert" }, /* @__PURE__ */ React.createElement("h3", null, data.headline), /* @__PURE__ */ React.createElement("p", { className: "deadline" }, data.deadline)), /* @__PURE__ */ React.createElement("p", { className: "question" }, data.question));
  var ContentTypesSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("div", { className: "content-types-grid" }, data.items.map((item, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "content-type-card" }, /* @__PURE__ */ React.createElement("h3", null, item.type), /* @__PURE__ */ React.createElement("p", null, item.desc)))), data.note && /* @__PURE__ */ React.createElement("p", { className: "slide-note" }, data.note));
  var ContentChallengesSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "slide-intro" }, data.intro), /* @__PURE__ */ React.createElement("div", { className: "content-challenges-grid" }, data.items.map((item, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "content-challenge-card" }, /* @__PURE__ */ React.createElement("div", { className: "challenge-header" }, /* @__PURE__ */ React.createElement("h3", null, item.type), /* @__PURE__ */ React.createElement("p", { className: "challenge-desc" }, item.desc)), /* @__PURE__ */ React.createElement("div", { className: "challenge-edge" }, /* @__PURE__ */ React.createElement("span", { className: "edge-label" }, "Edge cases:"), /* @__PURE__ */ React.createElement("span", { className: "edge-text" }, item.challenge))))), data.note && /* @__PURE__ */ React.createElement("p", { className: "slide-note" }, data.note));
  var ToolkitSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content" }, /* @__PURE__ */ React.createElement("h2", null, data.title), data.intro && /* @__PURE__ */ React.createElement("p", { className: "slide-intro" }, data.intro), /* @__PURE__ */ React.createElement("div", { className: "toolkit-grid" }, data.columns.map((col, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "toolkit-column" }, /* @__PURE__ */ React.createElement("h3", null, col.heading), /* @__PURE__ */ React.createElement("ul", { role: "list" }, col.items.map((item, j) => /* @__PURE__ */ React.createElement("li", { key: j }, item)))))));
  var StandardsSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content standards-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "standards-subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("div", { className: "principles-grid" }, data.principles.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "principle-card", role: "article" }, /* @__PURE__ */ React.createElement("span", { className: "letter", "aria-hidden": "true" }, p.letter), /* @__PURE__ */ React.createElement("h3", null, p.name), /* @__PURE__ */ React.createElement("p", null, p.desc)))));
  var SuccessWithExamplesSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content success-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "slide-intro" }, data.intro), /* @__PURE__ */ React.createElement("ul", { className: "success-list", role: "list" }, data.items.map((item, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "success-item" }, /* @__PURE__ */ React.createElement("span", { className: "success-icon", "aria-hidden": "true" }, item.icon), /* @__PURE__ */ React.createElement("span", null, item.text)))), /* @__PURE__ */ React.createElement("p", { className: "slide-conclusion" }, data.conclusion), data.placeholder && /* @__PURE__ */ React.createElement("div", { className: "placeholder-box" }, /* @__PURE__ */ React.createElement("div", { className: "placeholder-header" }, "\u{1F4F7} ", data.placeholder.instruction), /* @__PURE__ */ React.createElement("ul", { className: "placeholder-suggestions" }, data.placeholder.suggestions.map((s, i) => /* @__PURE__ */ React.createElement("li", { key: i }, s)))));
  var ProblemWithExamplesSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content problem-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "slide-intro" }, data.intro), /* @__PURE__ */ React.createElement("ul", { className: "problem-list", role: "list" }, data.items.map((item, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "problem-item" }, /* @__PURE__ */ React.createElement("span", { className: "problem-icon", "aria-hidden": "true" }, item.icon), /* @__PURE__ */ React.createElement("div", { className: "problem-content" }, /* @__PURE__ */ React.createElement("span", { className: "problem-text" }, item.text), /* @__PURE__ */ React.createElement("span", { className: "problem-example" }, item.example))))), /* @__PURE__ */ React.createElement("p", { className: "slide-conclusion warning" }, data.conclusion), data.placeholder && /* @__PURE__ */ React.createElement("div", { className: "placeholder-box" }, /* @__PURE__ */ React.createElement("div", { className: "placeholder-header" }, "\u{1F4F7} ", data.placeholder.instruction), /* @__PURE__ */ React.createElement("ul", { className: "placeholder-suggestions" }, data.placeholder.suggestions.map((s, i) => /* @__PURE__ */ React.createElement("li", { key: i }, s)))));
  var FocusWithExamplesSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content focus-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "focus-subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("div", { className: "challenges-list" }, data.challenges.map((c, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "challenge-item" }, /* @__PURE__ */ React.createElement("h3", null, c.problem), /* @__PURE__ */ React.createElement("p", null, c.detail)))), data.placeholder && /* @__PURE__ */ React.createElement("div", { className: "placeholder-box" }, /* @__PURE__ */ React.createElement("div", { className: "placeholder-header" }, "\u{1F5BC}\uFE0F ", data.placeholder.instruction), /* @__PURE__ */ React.createElement("ul", { className: "placeholder-suggestions" }, data.placeholder.suggestions.map((s, i) => /* @__PURE__ */ React.createElement("li", { key: i }, s)))));
  var ScreenReaderDemoSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content screen-reader-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "slide-subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("div", { className: "demo-cards" }, data.demos.map((demo, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: `demo-card status-${demo.status}` }, /* @__PURE__ */ React.createElement("span", { className: "demo-label" }, demo.label), /* @__PURE__ */ React.createElement("p", null, demo.desc)))), data.placeholder && /* @__PURE__ */ React.createElement("div", { className: "placeholder-box video-placeholder" }, /* @__PURE__ */ React.createElement("div", { className: "placeholder-header" }, "\u{1F3AC} ", data.placeholder.instruction), /* @__PURE__ */ React.createElement("ul", { className: "placeholder-suggestions" }, data.placeholder.suggestions.map((s, i) => /* @__PURE__ */ React.createElement("li", { key: i }, s)))));
  var GapExampleSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content gap-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "slide-subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("div", { className: "scenarios" }, data.scenarios.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "scenario-card" }, /* @__PURE__ */ React.createElement("p", { className: "scenario-situation" }, s.situation), /* @__PURE__ */ React.createElement("div", { className: "scenario-comparison" }, /* @__PURE__ */ React.createElement("div", { className: "scenario-builtin" }, /* @__PURE__ */ React.createElement("span", { className: "label" }, "Built-in tools say:"), /* @__PURE__ */ React.createElement("span", { className: "value" }, '"', s.builtin, '"')), /* @__PURE__ */ React.createElement("div", { className: "scenario-needed" }, /* @__PURE__ */ React.createElement("span", { className: "label" }, "What's actually needed:"), /* @__PURE__ */ React.createElement("span", { className: "value" }, s.needed)))))));
  var SolutionSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content solution-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "solution-subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("p", { className: "slide-intro" }, data.intro), /* @__PURE__ */ React.createElement("div", { className: "tools-grid" }, data.tools.map((tool, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "tool-card" }, /* @__PURE__ */ React.createElement("h3", null, tool.name), /* @__PURE__ */ React.createElement("p", null, tool.capability)))), /* @__PURE__ */ React.createElement("p", { className: "keypoint" }, data.keypoint), data.formatNote && /* @__PURE__ */ React.createElement("p", { className: "format-note" }, data.formatNote), data.pipelineNote && /* @__PURE__ */ React.createElement("p", { className: "pipeline-note" }, "Pipeline: ", data.pipelineNote));
  var FrameworkSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("h3", { className: "framework-heading" }, data.heading), /* @__PURE__ */ React.createElement("div", { className: "framework-elements" }, data.elements.map((el, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "framework-item" }, /* @__PURE__ */ React.createElement("span", { className: "element-name" }, el.name), /* @__PURE__ */ React.createElement("span", { className: "element-desc" }, el.desc)))));
  var WorkflowExampleSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content workflow-example-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "slide-subtitle" }, data.subtitle), data.placeholder && /* @__PURE__ */ React.createElement("div", { className: "placeholder-box large-placeholder" }, /* @__PURE__ */ React.createElement("div", { className: "placeholder-header" }, "\u{1F4CB} ", data.placeholder.instruction), /* @__PURE__ */ React.createElement("div", { className: "example-structure" }, /* @__PURE__ */ React.createElement("div", { className: "example-section" }, /* @__PURE__ */ React.createElement("h4", null, "Input Image"), /* @__PURE__ */ React.createElement("p", { className: "example-placeholder" }, data.placeholder.example.inputImage)), /* @__PURE__ */ React.createElement("div", { className: "example-section" }, /* @__PURE__ */ React.createElement("h4", null, "Prompt Used"), /* @__PURE__ */ React.createElement("p", { className: "example-placeholder" }, data.placeholder.example.promptUsed)), /* @__PURE__ */ React.createElement("div", { className: "example-section" }, /* @__PURE__ */ React.createElement("h4", null, "AI Output"), /* @__PURE__ */ React.createElement("div", { className: "ai-output-preview" }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "LaTeX:"), " ", /* @__PURE__ */ React.createElement("code", null, data.placeholder.example.aiOutput.latex)), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Screen Reader:"), ' "', data.placeholder.example.aiOutput.screenReader, '"'), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Alt Text:"), ' "', data.placeholder.example.aiOutput.altText, '"'))), /* @__PURE__ */ React.createElement("div", { className: "example-section" }, /* @__PURE__ */ React.createElement("h4", null, "Canvas Render"), /* @__PURE__ */ React.createElement("p", { className: "example-placeholder" }, data.placeholder.example.canvasRender))), /* @__PURE__ */ React.createElement("ul", { className: "placeholder-suggestions" }, data.placeholder.suggestions.map((s, i) => /* @__PURE__ */ React.createElement("li", { key: i }, s)))));
  var PromptExampleSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content prompt-example-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "prompt-subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("div", { className: "prompt-box" }, /* @__PURE__ */ React.createElement("pre", { className: "prompt-text" }, data.prompt)), /* @__PURE__ */ React.createElement("p", { className: "prompt-tip" }, "\u{1F4A1} Save this as a Gemini Gem or ChatGPT Custom Instruction for reuse"));
  var SetupSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "slide-subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("div", { className: "methods-list" }, data.methods.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "method-card" }, /* @__PURE__ */ React.createElement("h3", null, m.tool), /* @__PURE__ */ React.createElement("p", { className: "method-desc" }, m.desc), /* @__PURE__ */ React.createElement("p", { className: "method-benefit" }, "\u2192 ", m.benefit)))));
  var DemoSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content demo-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "demo-description" }, data.description), /* @__PURE__ */ React.createElement("ol", { className: "demo-steps", role: "list" }, data.steps.map((step, i) => /* @__PURE__ */ React.createElement("li", { key: i }, step))), data.example && /* @__PURE__ */ React.createElement("div", { className: "demo-example" }, /* @__PURE__ */ React.createElement("div", { className: "example-input" }, /* @__PURE__ */ React.createElement("span", { className: "example-label" }, "Input:"), /* @__PURE__ */ React.createElement("span", null, data.example.input)), /* @__PURE__ */ React.createElement("div", { className: "example-output" }, /* @__PURE__ */ React.createElement("span", { className: "example-label" }, "Output:"), /* @__PURE__ */ React.createElement("pre", null, data.example.output))), data.tips && /* @__PURE__ */ React.createElement("div", { className: "demo-tips" }, /* @__PURE__ */ React.createElement("h4", null, "Tips:"), /* @__PURE__ */ React.createElement("ul", null, data.tips.map((tip, i) => /* @__PURE__ */ React.createElement("li", { key: i }, tip)))));
  var WorkflowSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "slide-subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("ol", { className: "workflow-steps", role: "list" }, data.steps.map((step, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: `workflow-step color-${step.color}` }, /* @__PURE__ */ React.createElement("span", { className: "step-num" }, step.num), /* @__PURE__ */ React.createElement("span", { className: "step-tool" }, step.tool), /* @__PURE__ */ React.createElement("span", { className: "step-action" }, step.action)))), data.warning && /* @__PURE__ */ React.createElement("div", { className: "warning-box" }, /* @__PURE__ */ React.createElement("h4", null, "\u26A0\uFE0F ", data.warning.title), /* @__PURE__ */ React.createElement("p", null, data.warning.text)));
  var ActivitySlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content activity-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "activity-subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("ol", { className: "activity-steps", role: "list" }, data.steps.map((step, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "step-number" }, "Step ", step.num), /* @__PURE__ */ React.createElement("span", null, step.text)))), data.timeboxed && /* @__PURE__ */ React.createElement("p", { className: "timebox" }, "\u23F1 Time: ", data.timeboxed));
  var DiscussionSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content discussion-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("ul", { className: "discussion-questions", role: "list" }, data.questions.map((q, i) => /* @__PURE__ */ React.createElement("li", { key: i }, q))), data.insight && /* @__PURE__ */ React.createElement("p", { className: "insight" }, data.insight));
  var StudentSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content student-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("p", { className: "student-subtitle" }, data.subtitle), /* @__PURE__ */ React.createElement("div", { className: "student-examples" }, data.points.map((point, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "student-example" }, /* @__PURE__ */ React.createElement("p", { className: "student-prompt" }, '"', point.prompt, '"'), /* @__PURE__ */ React.createElement("p", { className: "student-use" }, point.use)))), data.note && /* @__PURE__ */ React.createElement("p", { className: "slide-note" }, data.note));
  var TakeawaysSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content takeaways-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("div", { className: "takeaways-list" }, data.items.map((item, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "takeaway-item" }, /* @__PURE__ */ React.createElement("h3", null, item.point), /* @__PURE__ */ React.createElement("p", null, item.detail)))));
  var ResourcesSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("ul", { className: "resources-list", role: "list" }, data.resources.map((r, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "resource-name" }, r.name), /* @__PURE__ */ React.createElement("span", { className: "resource-type" }, r.type)))), /* @__PURE__ */ React.createElement("p", { className: "closing-question" }, data.question));
  var UpcomingWorkshopsSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content upcoming-workshops-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("div", { className: "workshop-categories" }, data.categories.map((cat, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "workshop-category" }, /* @__PURE__ */ React.createElement("h3", null, cat.heading), /* @__PURE__ */ React.createElement("p", { className: "org-name" }, cat.org), cat.sessions ? /* @__PURE__ */ React.createElement("div", { className: "session-list" }, cat.sessions.map((session, j) => /* @__PURE__ */ React.createElement("div", { key: j, className: "session-item" }, /* @__PURE__ */ React.createElement("span", { className: "session-name" }, session.name), /* @__PURE__ */ React.createElement("span", { className: "session-date" }, session.date)))) : cat.placeholder ? /* @__PURE__ */ React.createElement("div", { className: "placeholder-box small" }, /* @__PURE__ */ React.createElement("div", { className: "placeholder-header" }, "\u{1F4C5} ", cat.placeholder.instruction), /* @__PURE__ */ React.createElement("ul", { className: "placeholder-suggestions" }, cat.placeholder.suggestions.map((s, j) => /* @__PURE__ */ React.createElement("li", { key: j }, s)))) : null))));
  var ClosingSlide = ({ data }) => /* @__PURE__ */ React.createElement("div", { className: "slide-content closing-slide" }, /* @__PURE__ */ React.createElement("h2", null, data.title), /* @__PURE__ */ React.createElement("div", { className: "contacts" }, data.contacts.map((c, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "contact" }, /* @__PURE__ */ React.createElement("span", { className: "contact-name" }, c.name), /* @__PURE__ */ React.createElement("a", { href: `mailto:${c.email}`, className: "contact-email" }, c.email)))), /* @__PURE__ */ React.createElement("p", { className: "closing-org" }, data.org));
  var slideComponents = {
    title: TitleSlide,
    "access-materials": AccessMaterialsSlide,
    agenda: AgendaSlide,
    objectives: ObjectivesSlide,
    alert: AlertSlide,
    "content-types": ContentTypesSlide,
    "content-challenges": ContentChallengesSlide,
    "pdf-inspector": PDFInspectorSlide,
    toolkit: ToolkitSlide,
    standards: StandardsSlide,
    "success-with-examples": SuccessWithExamplesSlide,
    "problem-with-examples": ProblemWithExamplesSlide,
    "focus-with-examples": FocusWithExamplesSlide,
    "screen-reader-demo": ScreenReaderDemoSlide,
    "gap-example": GapExampleSlide,
    solution: SolutionSlide,
    framework: FrameworkSlide,
    "workflow-example": WorkflowExampleSlide,
    "prompt-example": PromptExampleSlide,
    setup: SetupSlide,
    demo: DemoSlide,
    workflow: WorkflowSlide,
    activity: ActivitySlide,
    discussion: DiscussionSlide,
    student: StudentSlide,
    takeaways: TakeawaysSlide,
    resources: ResourcesSlide,
    "upcoming-workshops": UpcomingWorkshopsSlide,
    closing: ClosingSlide
  };
  function Presentation() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const totalSlides = slides.length;
    const goToSlide = useCallback((index) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentSlide(index);
        setIsMenuOpen(false);
      }
    }, [totalSlides]);
    const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
    const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
          e.preventDefault();
          nextSlide();
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
          e.preventDefault();
          prevSlide();
        } else if (e.key === "Home") {
          e.preventDefault();
          goToSlide(0);
        } else if (e.key === "End") {
          e.preventDefault();
          goToSlide(totalSlides - 1);
        } else if (e.key === "Escape") {
          setIsMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide, goToSlide, totalSlides]);
    const slide = slides[currentSlide];
    const SlideComponent = slideComponents[slide.type];
    const getAct = (slideIndex) => {
      if (slideIndex < 10)
        return { num: 1, name: "The Challenge" };
      if (slideIndex < 14)
        return { num: 2, name: "The Gap" };
      if (slideIndex < 23)
        return { num: 3, name: "The Solution" };
      if (slideIndex < 26)
        return { num: 4, name: "Practice" };
      return { num: 5, name: "Closing" };
    };
    const currentAct = getAct(currentSlide);
    return /* @__PURE__ */ React.createElement("div", { className: "presentation-container" }, /* @__PURE__ */ React.createElement("style", null, `
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        :root {
          --rutgers-scarlet: #CC0033;
          --rutgers-dark: #5C0016;
          --rutgers-light: #FFF0F3;
          --text-primary: #1a1a2e;
          --text-secondary: #4a4a6a;
          --bg-primary: #FAFBFC;
          --bg-card: #FFFFFF;
          --accent-blue: #0066B8;
          --accent-green: #2E7D32;
          --accent-purple: #6B46C1;
          --accent-orange: #D97706;
          --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
          --shadow-md: 0 4px 20px rgba(0,0,0,0.12);
          --radius-sm: 8px;
          --radius-md: 12px;
          --radius-lg: 20px;
          --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .presentation-container {
          min-height: 100vh;
          background: var(--bg-primary);
          font-family: 'Source Sans 3', -apple-system, sans-serif;
          color: var(--text-primary);
          display: flex;
          flex-direction: column;
        }
        
        .skip-link {
          position: absolute;
          top: -40px;
          left: 0;
          background: var(--rutgers-scarlet);
          color: white;
          padding: 8px 16px;
          z-index: 100;
          text-decoration: none;
          font-weight: 600;
        }

        .skip-link:focus { top: 0; }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        
        /* Header */
        .header {
          background: white;
          border-bottom: 3px solid var(--rutgers-scarlet);
          padding: 12px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .logo-mark {
          background: var(--rutgers-scarlet);
          color: white;
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }
        
        .logo-text {
          font-size: 14px;
          line-height: 1.3;
          color: var(--text-secondary);
        }
        
        .logo-text strong {
          display: block;
          color: var(--text-primary);
          font-weight: 600;
        }
        
        .nav-controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .act-indicator {
          font-size: 13px;
          color: var(--text-secondary);
          background: #f0f0f5;
          padding: 4px 12px;
          border-radius: 20px;
        }
        
        .slide-counter {
          font-size: 14px;
          color: var(--text-secondary);
          font-variant-numeric: tabular-nums;
          min-width: 60px;
          text-align: center;
        }
        
        .menu-button {
          background: none;
          border: 2px solid var(--text-secondary);
          padding: 10px 18px;
          min-height: 44px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition);
        }
        
        .menu-button:hover, .menu-button:focus {
          border-color: var(--rutgers-scarlet);
          color: var(--rutgers-scarlet);
          outline: none;
        }
        
        /* Main */
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 24px;
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
        }
        
        .slide {
          flex: 1;
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          padding: 40px;
          min-height: 520px;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.4s ease-out;
          overflow-y: auto;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .slide-content { flex: 1; }
        
        .slide h2 {
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
          line-height: 1.2;
        }
        
        .slide h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--rutgers-scarlet);
          margin-bottom: 8px;
        }
        
        .slide-intro, .slide-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        
        .slide-note {
          margin-top: 20px;
          padding: 12px 16px;
          background: var(--rutgers-light);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          color: var(--rutgers-dark);
          border-left: 4px solid var(--rutgers-scarlet);
        }
        
        .slide-conclusion {
          margin-top: 20px;
          font-size: 1rem;
          font-weight: 600;
          color: var(--accent-green);
          text-align: center;
          padding: 14px;
          background: #E8F5E9;
          border-radius: var(--radius-sm);
        }
        
        .slide-conclusion.warning {
          color: var(--rutgers-dark);
          background: var(--rutgers-light);
        }
        
        /* Placeholder Boxes */
        .placeholder-box {
          margin-top: 20px;
          padding: 16px;
          background: #FFF3E0;
          border: 2px dashed var(--accent-orange);
          border-radius: var(--radius-md);
        }
        
        .placeholder-box.large-placeholder {
          background: #F3E5F5;
          border-color: var(--accent-purple);
        }
        
        .placeholder-box.video-placeholder {
          background: #E3F2FD;
          border-color: var(--accent-blue);
        }
        
        .placeholder-box.small {
          padding: 12px;
          margin-top: 12px;
        }
        
        .placeholder-header {
          font-weight: 700;
          color: var(--accent-orange);
          margin-bottom: 10px;
          font-size: 0.95rem;
        }
        
        .large-placeholder .placeholder-header {
          color: var(--accent-purple);
        }
        
        .video-placeholder .placeholder-header {
          color: var(--accent-blue);
        }
        
        .placeholder-suggestions {
          list-style: disc;
          margin-left: 20px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        
        .placeholder-suggestions li {
          padding: 3px 0;
        }
        
        /* Title Slide */
        .title-slide {
          text-align: center;
          justify-content: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .title-badge {
          background: var(--rutgers-scarlet);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }
        
        .title-slide h1 {
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 14px;
          max-width: 800px;
        }
        
        .title-slide .subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 650px;
          margin-bottom: 36px;
          line-height: 1.5;
        }
        
        .presenter-info {
          margin-top: auto;
          padding-top: 28px;
          border-top: 1px solid #eee;
        }
        
        .presenter { font-weight: 600; font-size: 1.05rem; margin-bottom: 4px; }
        .org, .date { color: var(--text-secondary); font-size: 0.9rem; }

        /* Access Materials */
        .access-materials-slide {
          text-align: center;
        }

        .access-content {
          display: flex;
          gap: 60px;
          align-items: center;
          justify-content: center;
          margin-top: 40px;
        }

        .qr-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .qr-code-container {
          background: white;
          padding: 20px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          border: 3px solid var(--rutgers-scarlet);
        }

        .qr-code {
          display: block;
          width: 300px;
          height: 300px;
        }

        .qr-label {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .url-section {
          text-align: left;
          max-width: 400px;
        }

        .url-display {
          background: var(--rutgers-light);
          padding: 20px;
          border-radius: var(--radius-md);
          border-left: 4px solid var(--rutgers-scarlet);
          margin-bottom: 24px;
        }

        .presentation-url {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--rutgers-scarlet);
          text-decoration: none;
          word-break: break-all;
          display: block;
        }

        .presentation-url:hover {
          text-decoration: underline;
        }

        .access-instructions {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .access-instructions li {
          padding: 12px 16px;
          background: #f8f9fa;
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          position: relative;
          padding-left: 40px;
        }

        .access-instructions li::before {
          content: '\u2713';
          position: absolute;
          left: 16px;
          color: var(--accent-green);
          font-weight: 700;
          font-size: 1.1rem;
        }

        /* PDF Inspector */
        .pdf-inspector-slide {
          text-align: center;
        }

        .pdf-inspector-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 32px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .pdf-inspector-content {
          display: flex;
          gap: 50px;
          align-items: flex-start;
          justify-content: center;
          margin-top: 24px;
        }

        .pdf-inspector-content .qr-code {
          width: 250px;
          height: 250px;
        }

        .tool-info {
          text-align: left;
          max-width: 450px;
        }

        .url-display-small {
          background: #f0f7ff;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--accent-blue);
          margin-bottom: 20px;
        }

        .tool-url {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--accent-blue);
          text-decoration: none;
          word-break: break-all;
          display: block;
        }

        .tool-url:hover {
          text-decoration: underline;
        }

        .features-heading {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 12px;
          font-weight: 600;
        }

        .tool-features {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .tool-features li {
          padding: 10px 12px;
          padding-left: 36px;
          background: #f8f9fa;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          position: relative;
          line-height: 1.4;
        }

        .tool-features li::before {
          content: '\u2192';
          position: absolute;
          left: 12px;
          color: var(--accent-blue);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .call-to-action {
          background: linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-blue) 100%);
          color: white;
          padding: 14px 20px;
          border-radius: var(--radius-md);
          font-weight: 600;
          text-align: center;
          font-size: 1rem;
        }

        /* Agenda */
        .agenda-slide h2 { margin-bottom: 8px; }
        
        .duration-badge {
          display: inline-block;
          background: var(--accent-blue);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .agenda-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .agenda-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px;
          background: #f8f9fa;
          border-radius: var(--radius-sm);
        }
        
        .agenda-num {
          width: 32px;
          height: 32px;
          background: var(--rutgers-scarlet);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
        }
        
        .agenda-content {
          flex: 1;
        }
        
        .agenda-content h3 {
          color: var(--text-primary);
          margin-bottom: 2px;
          font-size: 1rem;
        }
        
        .agenda-content p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        .agenda-time {
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: white;
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 500;
        }
        
        /* Objectives */
        .objectives-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        
        .objectives-list {
          list-style: none;
        }
        
        .objectives-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f5;
          font-size: 1rem;
        }
        
        .verb {
          background: var(--rutgers-scarlet);
          color: white;
          padding: 3px 10px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.8rem;
          flex-shrink: 0;
        }
        
        /* Alert */
        .alert-box {
          background: linear-gradient(135deg, var(--rutgers-scarlet) 0%, var(--rutgers-dark) 100%);
          color: white;
          padding: 28px;
          border-radius: var(--radius-md);
          text-align: center;
          margin: 20px 0;
        }
        
        .alert-box h3 { color: white; font-size: 1.3rem; margin-bottom: 10px; }
        .deadline { font-size: 1.2rem; font-weight: 700; }
        .question {
          font-size: 1.1rem;
          font-style: italic;
          color: var(--text-secondary);
          text-align: center;
          margin-top: 20px;
        }
        
        /* Content Types */
        .content-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 12px;
        }
        
        .content-type-card {
          background: #f8f9fa;
          padding: 16px;
          border-radius: var(--radius-sm);
          border-left: 4px solid var(--accent-blue);
        }
        
        .content-type-card h3 { color: var(--text-primary); margin-bottom: 4px; font-size: 1rem; }
        .content-type-card p { font-size: 0.85rem; color: var(--text-secondary); }
        
        /* Content Challenges */
        .content-challenges-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .content-challenge-card {
          background: #f8f9fa;
          padding: 14px 16px;
          border-radius: var(--radius-sm);
          border-left: 4px solid var(--accent-blue);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        
        .challenge-header {
          flex: 1;
        }
        
        .challenge-header h3 {
          color: var(--text-primary);
          margin-bottom: 2px;
          font-size: 1rem;
        }
        
        .challenge-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        
        .challenge-edge {
          background: #FFF8E1;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          max-width: 280px;
        }
        
        .edge-label {
          color: var(--accent-orange);
          font-weight: 600;
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        
        .edge-text {
          color: var(--text-secondary);
        }
        
        /* Toolkit */
        .toolkit-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }
        
        .toolkit-column {
          background: #f8f9fa;
          padding: 20px;
          border-radius: var(--radius-md);
        }
        
        .toolkit-column h3 {
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 2px solid var(--rutgers-scarlet);
        }
        
        .toolkit-column ul { list-style: none; }
        .toolkit-column li {
          padding: 8px 0;
          padding-left: 22px;
          position: relative;
          font-size: 0.95rem;
        }
        
        .toolkit-column li::before {
          content: '\u2713';
          position: absolute;
          left: 0;
          color: var(--accent-green);
          font-weight: bold;
        }
        
        /* Standards */
        .standards-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 14px;
        }
        
        .principle-card {
          background: #f8f9fa;
          padding: 16px;
          border-radius: var(--radius-md);
          border-left: 4px solid var(--rutgers-scarlet);
        }
        
        .letter {
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--rutgers-scarlet);
          line-height: 1;
        }
        
        .principle-card h3 { margin: 6px 0; color: var(--text-primary); font-size: 1rem; }
        .principle-card p { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4; }
        
        /* Success & Problem Lists */
        .success-list, .problem-list { list-style: none; }
        
        .success-item, .problem-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid #f0f0f5;
          font-size: 0.95rem;
        }
        
        .success-icon { color: var(--accent-green); font-weight: bold; }
        .problem-icon { color: var(--rutgers-scarlet); font-weight: bold; }
        
        .problem-content { display: flex; flex-direction: column; gap: 2px; }
        .problem-text { font-weight: 500; }
        .problem-example { font-size: 0.85rem; color: var(--text-secondary); font-style: italic; }
        
        /* Focus */
        .focus-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        
        .challenges-list {
          display: grid;
          gap: 12px;
        }
        
        .challenge-item {
          background: #FFF8E1;
          padding: 14px;
          border-radius: var(--radius-sm);
          border-left: 4px solid var(--accent-orange);
        }
        
        .challenge-item h3 { color: var(--accent-orange); margin-bottom: 4px; font-size: 0.95rem; }
        .challenge-item p { color: var(--text-secondary); font-size: 0.9rem; }
        
        /* Screen Reader Demo */
        .screen-reader-slide .slide-subtitle {
          margin-bottom: 20px;
        }
        
        .demo-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 14px;
          margin-bottom: 20px;
        }
        
        .demo-card {
          padding: 16px;
          border-radius: var(--radius-md);
          text-align: center;
        }
        
        .demo-card.status-working {
          background: #E8F5E9;
          border: 2px solid var(--accent-green);
        }
        
        .demo-card.status-failing {
          background: var(--rutgers-light);
          border: 2px solid var(--rutgers-scarlet);
        }
        
        .demo-card.status-poor {
          background: #FFF8E1;
          border: 2px solid var(--accent-orange);
        }
        
        .demo-label {
          font-weight: 700;
          font-size: 1.1rem;
          display: block;
          margin-bottom: 6px;
        }
        
        .status-working .demo-label { color: var(--accent-green); }
        .status-failing .demo-label { color: var(--rutgers-scarlet); }
        .status-poor .demo-label { color: var(--accent-orange); }
        
        .demo-card p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        
        /* Gap Example */
        .scenarios { display: flex; flex-direction: column; gap: 14px; }
        
        .scenario-card {
          background: #f8f9fa;
          padding: 16px;
          border-radius: var(--radius-md);
        }
        
        .scenario-situation {
          font-weight: 600;
          margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e0e0e0;
          font-size: 0.95rem;
        }
        
        .scenario-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        
        .scenario-builtin, .scenario-needed {
          padding: 10px;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
        }
        
        .scenario-builtin { background: var(--rutgers-light); }
        .scenario-needed { background: #E8F5E9; }
        
        .scenario-comparison .label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
          color: var(--text-secondary);
        }
        
        /* Solution */
        .solution-subtitle {
          font-size: 1.15rem;
          color: var(--accent-purple);
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          margin: 16px 0;
        }
        
        .tool-card {
          background: linear-gradient(135deg, #4A148C 0%, #7B1FA2 100%);
          color: white;
          padding: 16px;
          border-radius: var(--radius-md);
        }
        
        .tool-card h3 { color: white; margin-bottom: 6px; font-size: 1rem; }
        .tool-card p { font-size: 0.85rem; opacity: 0.9; }
        
        .keypoint {
          text-align: center;
          font-weight: 600;
          color: var(--text-primary);
          padding: 12px;
          background: #EDE7F6;
          border-radius: var(--radius-sm);
          margin-top: 12px;
          font-size: 0.95rem;
        }
        
        .format-note {
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 10px;
          padding: 8px 14px;
          background: #E3F2FD;
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--accent-blue);
        }
        
        .pipeline-note {
          text-align: center;
          font-size: 0.8rem;
          color: var(--accent-purple);
          margin-top: 8px;
          font-family: 'Monaco', monospace;
        }
        
        /* Framework */
        .framework-heading {
          font-size: 1.05rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 16px;
        }
        
        .framework-elements { display: flex; flex-direction: column; gap: 10px; }
        
        .framework-item {
          display: flex;
          gap: 14px;
          padding: 12px 14px;
          background: #f8f9fa;
          border-radius: var(--radius-sm);
          align-items: baseline;
          font-size: 0.95rem;
        }
        
        .element-name {
          font-weight: 700;
          color: var(--rutgers-scarlet);
          min-width: 80px;
        }
        
        .element-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-style: italic;
        }
        
        /* Workflow Example */
        .example-structure {
          display: grid;
          gap: 12px;
          margin: 16px 0;
        }
        
        .example-section {
          background: white;
          padding: 12px;
          border-radius: var(--radius-sm);
        }
        
        .example-section h4 {
          font-size: 0.85rem;
          color: var(--accent-purple);
          margin-bottom: 6px;
        }
        
        .example-placeholder {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-style: italic;
        }
        
        .ai-output-preview {
          font-size: 0.85rem;
        }
        
        .ai-output-preview code {
          background: #f0f0f5;
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 0.8rem;
        }
        
        /* Prompt Example */
        .prompt-example-slide h2 {
          font-size: 1.7rem;
          margin-bottom: 6px;
        }
        
        .prompt-subtitle {
          color: var(--text-secondary);
          margin-bottom: 12px;
          font-size: 1rem;
        }
        
        .prompt-box {
          background: #1E1E1E;
          border-radius: var(--radius-md);
          padding: 16px;
          max-height: 340px;
          overflow-y: auto;
        }
        
        .prompt-text {
          color: #D4D4D4;
          font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
          font-size: 0.7rem;
          line-height: 1.45;
          white-space: pre-wrap;
          margin: 0;
        }
        
        .prompt-tip {
          margin-top: 12px;
          text-align: center;
          color: var(--accent-blue);
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        /* Setup */
        .methods-list { display: flex; flex-direction: column; gap: 12px; }
        
        .method-card {
          background: #f8f9fa;
          padding: 16px;
          border-radius: var(--radius-md);
          border-left: 4px solid var(--accent-blue);
        }
        
        .method-card h3 { color: var(--accent-blue); margin-bottom: 6px; font-size: 1rem; }
        .method-desc { color: var(--text-secondary); margin-bottom: 6px; font-size: 0.9rem; }
        .method-benefit { color: var(--accent-green); font-weight: 500; font-size: 0.9rem; }
        
        /* Demo */
        .demo-description {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        
        .demo-steps {
          list-style: none;
          counter-reset: demo;
        }
        
        .demo-steps li {
          padding: 10px 14px 10px 44px;
          margin-bottom: 8px;
          background: #f8f9fa;
          border-radius: var(--radius-sm);
          position: relative;
          counter-increment: demo;
          font-size: 0.9rem;
        }
        
        .demo-steps li::before {
          content: counter(demo);
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 22px;
          height: 22px;
          background: var(--accent-blue);
          color: white;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .demo-example {
          margin-top: 16px;
          background: #263238;
          color: #ECEFF1;
          padding: 14px;
          border-radius: var(--radius-md);
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 0.8rem;
        }
        
        .example-label {
          color: #80CBC4;
          font-weight: 600;
          display: block;
          margin-bottom: 4px;
        }
        
        .example-output pre {
          white-space: pre-wrap;
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid #455A64;
        }
        
        .demo-tips {
          margin-top: 16px;
          padding: 12px;
          background: #FFF8E1;
          border-radius: var(--radius-sm);
        }
        
        .demo-tips h4 { color: var(--accent-orange); margin-bottom: 8px; font-size: 0.9rem; }
        .demo-tips ul { list-style: disc; margin-left: 18px; }
        .demo-tips li { padding: 3px 0; color: var(--text-secondary); font-size: 0.85rem; }
        
        /* Workflow */
        .workflow-steps {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .workflow-step {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f8f9fa;
          border-radius: var(--radius-sm);
          border-left: 4px solid;
          font-size: 0.9rem;
        }
        
        .workflow-step.color-blue { border-color: var(--accent-blue); }
        .workflow-step.color-gray { border-color: #9E9E9E; }
        .workflow-step.color-green { border-color: var(--accent-green); }
        .workflow-step.color-purple { border-color: var(--accent-purple); }
        .workflow-step.color-orange { border-color: var(--accent-orange); }
        
        .step-num {
          width: 24px;
          height: 24px;
          background: var(--text-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.75rem;
          flex-shrink: 0;
        }
        
        .step-tool {
          background: var(--rutgers-scarlet);
          color: white;
          padding: 3px 10px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.75rem;
          min-width: 60px;
          text-align: center;
        }
        
        .step-action { flex: 1; }
        
        .warning-box {
          margin-top: 16px;
          padding: 14px;
          background: #FFF8E1;
          border: 1px solid var(--accent-orange);
          border-radius: var(--radius-sm);
        }
        
        .warning-box h4 {
          color: var(--accent-orange);
          margin-bottom: 6px;
          font-size: 0.95rem;
        }
        
        .warning-box p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        
        /* Activity */
        .activity-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        
        .activity-steps { list-style: none; }
        
        .activity-steps li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px;
          margin-bottom: 10px;
          background: linear-gradient(90deg, var(--rutgers-light) 0%, white 100%);
          border-radius: var(--radius-sm);
          border-left: 4px solid var(--rutgers-scarlet);
          font-size: 0.95rem;
        }
        
        .step-number {
          font-weight: 700;
          color: var(--rutgers-scarlet);
          font-size: 0.8rem;
          white-space: nowrap;
        }
        
        .timebox {
          margin-top: 20px;
          text-align: center;
          font-weight: 600;
          color: var(--accent-blue);
          font-size: 1rem;
        }
        
        /* Discussion */
        .discussion-questions { list-style: none; }
        
        .discussion-questions li {
          padding: 14px;
          margin-bottom: 10px;
          background: #f8f9fa;
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          border-left: 4px solid var(--accent-blue);
        }
        
        .insight {
          margin-top: 20px;
          padding: 14px;
          background: #EDE7F6;
          border-radius: var(--radius-sm);
          text-align: center;
          font-weight: 500;
          color: var(--accent-purple);
          font-size: 0.95rem;
        }
        
        /* Student */
        .student-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }
        
        .student-examples {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .student-example {
          background: #f8f9fa;
          padding: 14px;
          border-radius: var(--radius-md);
        }
        
        .student-prompt {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 0.9rem;
          color: var(--accent-purple);
          margin-bottom: 8px;
          padding: 8px;
          background: #EDE7F6;
          border-radius: var(--radius-sm);
        }
        
        .student-use {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        /* Takeaways */
        .takeaways-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 12px;
        }
        
        .takeaway-item {
          padding: 14px;
          background: #f8f9fa;
          border-radius: var(--radius-sm);
          border-left: 4px solid var(--accent-green);
        }
        
        .takeaway-item h3 { color: var(--text-primary); font-size: 0.95rem; margin-bottom: 4px; }
        .takeaway-item p { color: var(--text-secondary); font-size: 0.85rem; }
        
        /* Resources */
        .resources-list { list-style: none; }
        
        .resources-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          margin-bottom: 8px;
          background: #f8f9fa;
          border-radius: var(--radius-sm);
        }
        
        .resource-name { font-weight: 500; font-size: 0.95rem; }
        .resource-type {
          font-size: 0.75rem;
          color: var(--text-secondary);
          background: white;
          padding: 3px 8px;
          border-radius: 4px;
        }
        
        .closing-question {
          margin-top: 20px;
          text-align: center;
          font-style: italic;
          color: var(--text-secondary);
        }
        
        /* Upcoming Workshops */
        .workshop-categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        
        .workshop-category {
          background: #f8f9fa;
          padding: 20px;
          border-radius: var(--radius-md);
        }
        
        .workshop-category h3 {
          color: var(--text-primary);
          margin-bottom: 4px;
          font-size: 1.1rem;
        }
        
        .workshop-category .org-name {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 14px;
        }
        
        .session-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .session-item {
          background: linear-gradient(135deg, #1a4d6e 0%, #2d6e8c 100%);
          color: white;
          padding: 12px;
          border-radius: var(--radius-sm);
        }
        
        .session-name {
          display: block;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 4px;
        }
        
        .session-date {
          font-size: 0.8rem;
          opacity: 0.9;
        }
        
        /* Closing */
        .closing-slide {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .contacts {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin: 28px 0;
        }
        
        .contact { display: flex; flex-direction: column; gap: 4px; }
        .contact-name { font-weight: 600; font-size: 1.1rem; }
        .contact-email { color: var(--accent-blue); text-decoration: none; }
        .contact-email:hover { text-decoration: underline; }
        .closing-org { color: var(--text-secondary); margin-top: 12px; }
        
        /* Navigation */
        .navigation {
          display: flex;
          justify-content: center;
          gap: 14px;
          padding: 20px;
        }
        
        .nav-btn {
          background: white;
          border: 2px solid #ddd;
          padding: 12px 24px;
          min-height: 44px;
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .nav-btn:hover:not(:disabled) {
          border-color: var(--rutgers-scarlet);
          color: var(--rutgers-scarlet);
        }
        
        .nav-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        
        /* Progress */
        .progress-bar {
          height: 4px;
          background: #eee;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
        }
        
        .progress-fill {
          height: 100%;
          background: var(--rutgers-scarlet);
          transition: width 0.3s ease;
        }
        
        /* Menu */
        .slide-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 100;
          display: flex;
          justify-content: flex-end;
        }
        
        .slide-menu {
          background: white;
          width: 380px;
          max-width: 90vw;
          height: 100%;
          overflow-y: auto;
          padding: 20px;
          animation: slideInRight 0.3s ease;
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        .slide-menu h2 {
          font-size: 1.2rem;
          margin: 0;
        }

        .slide-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 2px solid var(--rutgers-scarlet);
        }

        .close-menu-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px 8px;
          min-width: 32px;
          min-height: 32px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .close-menu-btn:hover {
          background: #f0f0f5;
          color: var(--rutgers-scarlet);
        }

        .slide-menu-section { margin-bottom: 16px; }
        
        .section-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-secondary);
          margin-bottom: 6px;
          padding-left: 8px;
        }
        
        .slide-menu-list { display: flex; flex-direction: column; gap: 2px; }
        
        .slide-menu-item {
          background: none;
          border: none;
          padding: 10px 12px;
          min-height: 44px;
          text-align: left;
          cursor: pointer;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          transition: var(--transition);
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .slide-menu-item:hover { background: #f0f0f5; }
        .slide-menu-item.active {
          background: var(--rutgers-light);
          color: var(--rutgers-scarlet);
          font-weight: 600;
        }
        
        .slide-num { min-width: 18px; color: var(--text-secondary); font-size: 0.8rem; }
        
        /* Keyboard hints */
        .keyboard-hints {
          position: fixed;
          bottom: 14px;
          right: 14px;
          background: white;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
          font-size: 0.75rem;
          color: var(--text-secondary);
          display: flex;
          gap: 12px;
        }
        
        .keyboard-hints kbd {
          background: #f0f0f5;
          padding: 2px 5px;
          border-radius: 3px;
          font-family: inherit;
        }
        
        *:focus-visible {
          outline: 3px solid var(--rutgers-scarlet);
          outline-offset: 2px;
        }
        
        @media (max-width: 768px) {
          main { padding: 12px; }
          .slide { padding: 20px; }
          .slide h2 { font-size: 1.5rem; }
          .title-slide h1 { font-size: 1.8rem; }
          .principles-grid, .toolkit-grid, .takeaways-list { grid-template-columns: 1fr; }
          .scenario-comparison { grid-template-columns: 1fr; }
          .contacts { flex-direction: column; gap: 16px; }
          .keyboard-hints { display: none; }
          .act-indicator { display: none; }
          .workshop-categories { grid-template-columns: 1fr; }
          .access-content { flex-direction: column; gap: 30px; }
          .qr-code { width: 250px; height: 250px; }
          .url-section { max-width: 100%; }
          .presentation-url { font-size: 1rem; }
          .pdf-inspector-content { flex-direction: column; gap: 24px; align-items: center; }
          .pdf-inspector-content .qr-code { width: 220px; height: 220px; }
          .tool-info { max-width: 100%; }
          .tool-url { font-size: 0.85rem; }
        }
      `), /* @__PURE__ */ React.createElement("a", { href: "#main-content", className: "skip-link" }, "Skip to content"), /* @__PURE__ */ React.createElement("header", { className: "header", role: "banner" }, /* @__PURE__ */ React.createElement("div", { className: "logo" }, /* @__PURE__ */ React.createElement("div", { className: "logo-mark", "aria-hidden": "true" }, "R"), /* @__PURE__ */ React.createElement("div", { className: "logo-text" }, /* @__PURE__ */ React.createElement("strong", null, "RUTGERS UNIVERSITY"), "Office of University Online Education Services")), /* @__PURE__ */ React.createElement("div", { className: "nav-controls" }, /* @__PURE__ */ React.createElement("span", { className: "act-indicator" }, "Part ", currentAct.num, ": ", currentAct.name), /* @__PURE__ */ React.createElement("span", { className: "slide-counter", "aria-live": "polite" }, currentSlide + 1, " / ", totalSlides), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "menu-button",
        onClick: () => setIsMenuOpen(true),
        "aria-expanded": isMenuOpen
      },
      "All Slides"
    ))), /* @__PURE__ */ React.createElement("div", { className: "sr-only", "aria-live": "assertive", "aria-atomic": "true" }, `Slide ${currentSlide + 1} of ${totalSlides}: ${slide.title}`), /* @__PURE__ */ React.createElement("main", { id: "main-content", role: "main" }, /* @__PURE__ */ React.createElement("article", { className: "slide", "aria-label": `Slide ${currentSlide + 1}: ${slide.title}` }, /* @__PURE__ */ React.createElement(SlideComponent, { data: slide })), /* @__PURE__ */ React.createElement("nav", { className: "navigation", "aria-label": "Slide navigation" }, /* @__PURE__ */ React.createElement("button", { className: "nav-btn", onClick: prevSlide, disabled: currentSlide === 0, "aria-label": "Previous slide" }, "\u2190 Previous"), /* @__PURE__ */ React.createElement("button", { className: "nav-btn", onClick: nextSlide, disabled: currentSlide === totalSlides - 1, "aria-label": "Next slide" }, "Next \u2192"))), /* @__PURE__ */ React.createElement("div", { className: "progress-bar", role: "progressbar", "aria-valuenow": currentSlide + 1, "aria-valuemin": 1, "aria-valuemax": totalSlides }, /* @__PURE__ */ React.createElement("div", { className: "progress-fill", style: { width: `${(currentSlide + 1) / totalSlides * 100}%` } })), /* @__PURE__ */ React.createElement("div", { className: "keyboard-hints", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("kbd", null, "\u2190"), " ", /* @__PURE__ */ React.createElement("kbd", null, "\u2192"), " Navigate"), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("kbd", null, "Home"), " ", /* @__PURE__ */ React.createElement("kbd", null, "End"), " Jump")), isMenuOpen && /* @__PURE__ */ React.createElement("div", { className: "slide-menu-overlay", onClick: (e) => e.target === e.currentTarget && setIsMenuOpen(false), role: "dialog", "aria-modal": "true", "aria-label": "Slide navigation menu" }, /* @__PURE__ */ React.createElement("div", { className: "slide-menu" }, /* @__PURE__ */ React.createElement("div", { className: "slide-menu-header" }, /* @__PURE__ */ React.createElement("h2", { id: "slide-menu-title" }, "Slides"), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "close-menu-btn",
        onClick: () => setIsMenuOpen(false),
        "aria-label": "Close slide menu"
      },
      "\u2715"
    )), /* @__PURE__ */ React.createElement("div", { className: "slide-menu-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Part 1: The Challenge"), /* @__PURE__ */ React.createElement("div", { className: "slide-menu-list" }, slides.slice(0, 10).map((s, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: s.id,
        className: `slide-menu-item ${i === currentSlide ? "active" : ""}`,
        onClick: () => goToSlide(i),
        "aria-current": i === currentSlide ? "page" : void 0
      },
      /* @__PURE__ */ React.createElement("span", { className: "slide-num" }, i + 1, "."),
      /* @__PURE__ */ React.createElement("span", null, s.title)
    )))), /* @__PURE__ */ React.createElement("div", { className: "slide-menu-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Part 2: The Gap"), /* @__PURE__ */ React.createElement("div", { className: "slide-menu-list" }, slides.slice(10, 14).map((s, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: s.id,
        className: `slide-menu-item ${i + 10 === currentSlide ? "active" : ""}`,
        onClick: () => goToSlide(i + 10),
        "aria-current": i + 10 === currentSlide ? "page" : void 0
      },
      /* @__PURE__ */ React.createElement("span", { className: "slide-num" }, i + 11, "."),
      /* @__PURE__ */ React.createElement("span", null, s.title)
    )))), /* @__PURE__ */ React.createElement("div", { className: "slide-menu-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Part 3: The Solution"), /* @__PURE__ */ React.createElement("div", { className: "slide-menu-list" }, slides.slice(14, 23).map((s, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: s.id,
        className: `slide-menu-item ${i + 14 === currentSlide ? "active" : ""}`,
        onClick: () => goToSlide(i + 14),
        "aria-current": i + 14 === currentSlide ? "page" : void 0
      },
      /* @__PURE__ */ React.createElement("span", { className: "slide-num" }, i + 15, "."),
      /* @__PURE__ */ React.createElement("span", null, s.title)
    )))), /* @__PURE__ */ React.createElement("div", { className: "slide-menu-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Part 4: Practice"), /* @__PURE__ */ React.createElement("div", { className: "slide-menu-list" }, slides.slice(23, 26).map((s, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: s.id,
        className: `slide-menu-item ${i + 23 === currentSlide ? "active" : ""}`,
        onClick: () => goToSlide(i + 23),
        "aria-current": i + 23 === currentSlide ? "page" : void 0
      },
      /* @__PURE__ */ React.createElement("span", { className: "slide-num" }, i + 24, "."),
      /* @__PURE__ */ React.createElement("span", null, s.title)
    )))), /* @__PURE__ */ React.createElement("div", { className: "slide-menu-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Closing"), /* @__PURE__ */ React.createElement("div", { className: "slide-menu-list" }, slides.slice(26).map((s, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: s.id,
        className: `slide-menu-item ${i + 26 === currentSlide ? "active" : ""}`,
        onClick: () => goToSlide(i + 26),
        "aria-current": i + 26 === currentSlide ? "page" : void 0
      },
      /* @__PURE__ */ React.createElement("span", { className: "slide-num" }, i + 27, "."),
      /* @__PURE__ */ React.createElement("span", null, s.title)
    )))))));
  }
  return __toCommonJS(AI_Accessibility_Presentation_exports);
})();
