# WCAG 2.2 Accessibility Guidelines for AI Accessibility Presentation

This document outlines the accessibility features and standards maintained in this presentation.

## Current WCAG 2.2 Compliance

### Level A & AA Features Implemented

#### 1. Perceivable
- ✅ **1.1.1 Non-text Content**: All decorative elements use `aria-hidden="true"`
- ✅ **1.3.1 Info and Relationships**: Semantic HTML (headings, lists, navigation, articles)
- ✅ **1.4.1 Use of Color**: Information not conveyed by color alone
- ✅ **1.4.3 Contrast (Minimum)**: Text meets 4.5:1 contrast ratio
- ✅ **1.4.10 Reflow**: Responsive design supports 320px width
- ✅ **1.4.11 Non-text Contrast**: UI components meet 3:1 contrast
- ✅ **1.4.13 Content on Hover or Focus**: No content appears only on hover

#### 2. Operable
- ✅ **2.1.1 Keyboard**: All functionality available via keyboard
- ✅ **2.1.2 No Keyboard Trap**: Users can navigate away from all components
- ✅ **2.1.4 Character Key Shortcuts**: Keyboard hints displayed, can be dismissed
- ✅ **2.4.1 Bypass Blocks**: Skip link implemented (`#main-content`)
- ✅ **2.4.3 Focus Order**: Logical tab order maintained
- ✅ **2.4.6 Headings and Labels**: All interactive elements properly labeled
- ✅ **2.4.7 Focus Visible**: 3px solid outline on `:focus-visible`
- ✅ **2.4.11 Focus Not Obscured (Minimum)** - NEW IN 2.2: Focus indicators not obscured by other content
- ✅ **2.5.3 Label in Name**: Button text matches accessible name
- ✅ **2.5.8 Target Size (Minimum)** - NEW IN 2.2: Interactive elements at least 24×24 CSS pixels

#### 3. Understandable
- ✅ **3.1.1 Language of Page**: `<html lang="en">` specified
- ✅ **3.2.1 On Focus**: No context change on focus alone
- ✅ **3.2.2 On Input**: No unexpected context changes on input
- ✅ **3.2.6 Consistent Help** - NEW IN 2.2: Help mechanisms in consistent locations
- ✅ **3.3.2 Labels or Instructions**: All form controls have labels

#### 4. Robust
- ✅ **4.1.2 Name, Role, Value**: ARIA attributes properly implemented
- ✅ **4.1.3 Status Messages**: `aria-live="polite"` on slide counter

## Key Accessibility Features

### Keyboard Navigation
- **Arrow Keys / Space / PageDown**: Next slide
- **Arrow Left / PageUp**: Previous slide
- **Home**: First slide
- **End**: Last slide
- **Escape**: Close slide menu
- **Tab / Shift+Tab**: Navigate interactive elements

### Screen Reader Support
- Skip link to main content
- ARIA labels on all controls
- Live regions announce slide changes
- Proper heading hierarchy (h1 → h2 → h3)
- Role attributes for semantic structure
- `aria-expanded` state on menu button
- `aria-current` on active slides (if implemented)
- Progress bar with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`

### Visual Design
- Minimum 4.5:1 contrast ratio for text
- Minimum 3:1 contrast for UI components
- 3px focus indicator with 2px offset
- Minimum 24×24px touch targets
- Responsive design down to 320px width
- No information conveyed by color alone

### Modal Dialog (Slide Menu)
- `role="dialog"` with `aria-modal="true"`
- Focus trapped within dialog when open
- Escape key closes dialog
- Click outside closes dialog

## Development Guidelines

### When Adding New Slides

1. **Use Semantic HTML**
   ```jsx
   <h2>{title}</h2>  // Use proper heading levels
   <ul role="list">  // Explicit list roles
   <nav aria-label="...">  // Label navigation regions
   ```

2. **Add ARIA Labels to Interactive Elements**
   ```jsx
   <button aria-label="Clear description">
     Click here
   </button>
   ```

3. **Mark Decorative Elements**
   ```jsx
   <span aria-hidden="true">🎨</span>
   <div className="icon" aria-hidden="true">...</div>
   ```

4. **Ensure Color Contrast**
   - Normal text: 4.5:1 minimum
   - Large text (18pt+): 3:1 minimum
   - UI components: 3:1 minimum
   - Use tools: WebAIM Contrast Checker, Chrome DevTools

5. **Maintain Focus Indicators**
   - Never use `outline: none` without replacement
   - Use `:focus-visible` for keyboard-only focus
   - Minimum 3px outline, 2px offset

6. **Size Interactive Elements**
   - Minimum 24×24 CSS pixels (WCAG 2.2)
   - Larger for primary actions (44×44 recommended)
   - Ensure adequate spacing between targets

### When Adding Images/Media

1. **Images**
   ```jsx
   // Informative
   <img src="..." alt="Description of what's shown" />

   // Decorative
   <img src="..." alt="" aria-hidden="true" />

   // Complex (use long description)
   <img src="..." alt="Brief" aria-describedby="detailed-desc" />
   <div id="detailed-desc">Full description...</div>
   ```

2. **Icons**
   - Use `aria-hidden="true"` if adjacent text exists
   - Use `aria-label` if icon alone conveys meaning

3. **Video/Audio** (if added)
   - Provide captions/transcripts
   - Keyboard-accessible controls
   - No autoplay

### Testing Checklist

Before committing changes:

- [ ] Test keyboard navigation (Tab, Arrow keys, Enter, Escape)
- [ ] Test with screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] Verify focus indicators are visible
- [ ] Check color contrast with automated tools
- [ ] Resize to 320px width and verify functionality
- [ ] Test with browser zoom at 200%
- [ ] Verify heading hierarchy (no skipped levels)
- [ ] Ensure ARIA attributes are correctly applied

## Testing Tools

### Automated Testing
- **axe DevTools** (Chrome/Firefox extension)
- **WAVE** (WebAIM browser extension)
- **Lighthouse** (Chrome DevTools)
- **Pa11y** (Command line)

### Manual Testing
- **Screen Readers**
  - macOS: VoiceOver (Cmd+F5)
  - Windows: NVDA (free) or JAWS
  - Mobile: VoiceOver (iOS), TalkBack (Android)

- **Keyboard Testing**
  - Use Tab key only (no mouse)
  - Test all interactive elements
  - Verify focus is always visible

- **Contrast Checkers**
  - WebAIM Contrast Checker
  - Chrome DevTools (CSS Overview)
  - Colour Contrast Analyser (desktop app)

## Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Articles](https://webaim.org/articles/)
- [The A11y Project](https://www.a11yproject.com/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

## Reporting Issues

If you discover accessibility issues:
1. Test with multiple tools to confirm
2. Document the specific WCAG criterion violated
3. Provide steps to reproduce
4. Suggest a solution if possible
5. Open an issue on GitHub

## Continuous Improvement

Accessibility is an ongoing process. As the presentation evolves:
- Regularly audit with automated tools
- Test with real users who rely on assistive technologies
- Stay updated with WCAG guidelines
- Consider AAA criteria where feasible
- Document any accessibility decisions or trade-offs
