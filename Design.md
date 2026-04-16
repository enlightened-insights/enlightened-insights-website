```markdown
# Design System Document: Architectural Tonalism
 
## 1. Overview & Creative North Star: "The Architectural Tonalist"
This design system rejects the "flatness" of standard SaaS templates in favor of structural depth and light-play. Our Creative North Star is **Architectural Tonalism**—a philosophy where hierarchy is defined not by lines or boxes, but by the intersection of light, shadow, and material mass.
 
We are building for a professional consultancy. The aesthetic must feel authoritative yet innovative. By utilizing a "middle-ground" palette—avoiding the starkness of pure black or pure white—we create a sophisticated, immersive environment. We break the grid through intentional asymmetry, overlapping elements that "float" at different Z-indices, and an editorial approach to typography that prioritizes high-contrast legibility.
 
---
 
## 2. Colors & Surface Logic
The palette is rooted in a deep, atmospheric teal (`#081616`). This isn't just a background; it is the "foundation" of our architecture.
 
### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections or containers. In this design system, boundaries are created through **Tonal Shifting**. 
- To separate a section, transition from `surface` to `surface_container_low`. 
- To highlight a feature, use `surface_bright`. 
- Structural definition comes from color-blocking, not outlining.
 
### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the Material Design container tiers to create natural depth:
- **Base Level:** `surface` (#081616)
- **Lower Inset:** `surface_container_lowest` (#041010) for background utility areas.
- **Raised Planes:** `surface_container` (#152222) and `surface_container_high` (#1f2c2c) for primary content cards.
- **Action Layers:** `surface_bright` (#2e3c3b) for elements that need to catch the eye.
 
### The "Glass & Gradient" Rule
To add a "signature" polish, floating elements (modals, dropdowns, sticky navs) should utilize **Glassmorphism**:
- **Fill:** `surface_variant` at 60% opacity.
- **Effect:** `backdrop-filter: blur(12px)`.
- **Gradients:** Use a subtle linear gradient from `primary` (#76d5de) to `primary_container` (#00818A) for hero CTAs to provide a "glow" that feels professional and weighted.
 
---
 
## 3. Typography: Editorial Authority
We use **Manrope** exclusively. Its geometric structure feels engineered, while its open apertures keep it legible in high-contrast settings.
 
- **Display Scales (`display-lg` to `display-sm`):** Use these for high-impact editorial moments. They should be tracked slightly tighter (-2%) to feel like a cohesive block of "stone."
- **High Contrast:** Always use `on_surface` (#d7e5e5) on dark backgrounds. For light-colored accents (like Cyan cards), switch to `on_primary_container` (#f4feff) or `on_primary_fixed` (#002022) to maintain a sharp, ink-on-paper feel.
- **Visual Rhythm:** Use `headline-md` for section headers with significant top-padding (at least 80px) to let the "architecture" breathe.
 
---
 
## 4. Elevation & Depth
In this system, elevation is a product of light, not just darkness.
 
### The Layering Principle
Depth is achieved by stacking. A `surface_container_highest` card sitting on a `surface` background creates a natural "lift." Avoid shadows for standard cards; let the color shift do the work.
 
### Ambient Shadows
When a component must "float" (e.g., a primary Modal), use **Ambient Shadows**:
- **Blur:** 32px to 64px.
- **Color:** Use `surface_container_lowest` at 40% opacity (a tinted shadow) rather than pure black. This ensures the shadow feels like a natural occlusion of the teal light.
 
### The "Ghost Border" Fallback
If accessibility requirements demand a border, use a **Ghost Border**:
- **Token:** `outline_variant` at 15% opacity. It should be felt, not seen.
 
---
 
## 5. Components
 
### Buttons
- **Primary:** Background `primary_container` (#00818A) with `on_primary_container` (#f4feff) text. Corner radius: `ROUND_FOUR` (0.25rem). 
- **Secondary:** Glassmorphic fill (`surface_variant` at 20%) with a `primary` (#76d5de) Ghost Border.
- **States:** On hover, the primary button should shift to `primary` (#76d5de), creating a "lighting up" effect.
 
### Cards & Lists
- **Strict Rule:** No dividers. Use `surface_container_low` for the card body and `surface_container_high` for a header "tab" effect within the card.
- **Spacing:** Use exaggerated vertical whitespace (Scale: 24px, 32px, 48px) to separate list items rather than lines.
 
### Input Fields
- **Background:** `surface_container_highest` (#2a3737).
- **Indicator:** A 2px bottom-bar of `primary` (#76d5de) only appears on focus. This mimics an architectural "accent line."
 
### Chips
- Use `tertiary_container` for a muted, professional look. Text should be `on_tertiary_container`.
 
---
 
## 6. Do's and Don'ts
 
### Do:
- **Do** use `surface_bright` to draw attention to interactive modules.
- **Do** allow content to bleed off the edge of containers in a controlled, asymmetrical way to create a modern editorial feel.
- **Do** use `primary_fixed_dim` for subtle icons that shouldn't compete with the text.
 
### Don't:
- **Don't** use 100% white (#FFFFFF). It breaks the "Tonalism" and causes eye strain. Use `on_surface` (#d7e5e5).
- **Don't** use standard "Drop Shadows" from a UI kit. They look cheap against our deep teal palette.
- **Don't** use 1px lines to separate content. If the content feels cluttered, increase the padding or shift the background tone.
 
---
 
## 7. Spacing & Roundness
- **Roundness:** Every element (buttons, cards, inputs) must use `ROUND_FOUR` (0.25rem). This "slight" rounding provides a professional, precision-milled look—softer than a sharp 90-degree angle, but more disciplined than "bubbly" standard UI.
- **The Grid:** Use an 8px base grid, but favor "Golden Ratio" proportions (e.g., 1.618x) for layout widths to maintain the architectural feel.```