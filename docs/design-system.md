# Portfolio design system

## Foundations

`src/styles.css` is the single source for theme and layout tokens. Spacing uses 8, 16, 24 and 32 px; Cards use 28 px inset on desktop and 24 px on mobile. Grids use 24 px gaps on desktop and 16 px on mobile. Section introductions have 32 px separation from content. Controls use a 12 px radius and cards use 16 px. Glass surfaces use bounded theme-specific fills; solid fallbacks preserve reading when blur is unsupported or reduced transparency is requested. Both themes expose background, panel, surface, text, muted, accent, line, success and primary action colors.

## Components

- `ActionLink`: `variant="primary"` for the main contact action, `variant="secondary"` for downloads and repository links. All controls have a minimum 44 px target. Contact and certificate request links reuse this component. Use a distinct repository name in each link.
- Cards: shared inset, border and radius for cases, projects, skills, experience and education. Informational cards must not acquire hover effects.
- Section headings: `.section-heading` for a title and description; `.section-bubble` for other section introductions. Neither introduces an additional surface.
- Tags: `.case-stack`, `.skill-items` and `.ai-tools` share the same informational treatment; they are not buttons.
- Stats: All three `.stat-card` links share one visual treatment and show their destination. The first metric counts the three listed projects rather than repeating career duration. Preserve numeric values in accessible names.

## Navigation and content

Five top-level destinations: overview, case studies, personal projects, background and contact. Education, skills and courses belong to background. Education, skills and courses have visible sublinks with their own active states. Contact has its own final section. Anchor navigation focuses the destination heading; dismissing the mobile menu returns focus to its trigger. Case studies describe verifiable work delivered; add numerical outcomes only with supporting evidence.

## Accessibility

Keep visible control text within its accessible name. The theme toggle has a stable “Dark theme” / “Tema escuro” name and uses `aria-pressed` for its state. Maintain visible focus, skip navigation, mobile focus containment, Escape handling and reduced-motion support. Do not convey status or interactivity by color alone. Test both languages, both themes, narrow viewports and enlarged text when changing components.

## Content and semantic structure

- One `main` contains the portfolio sections; navigation, topbar and footer stay outside it.
- Each primary section is named by a focusable heading. Tags, benefits and AI use cases use semantic lists.
- Experience shows its first highlight and preserves remaining information inside native `details` / `summary`, operable by keyboard.
- Cases separate challenge, technical decision and delivery. Do not add unsupported performance claims.
- `TagList` provides consistent semantic tags. Project cards share grid rows on larger screens to align titles, tags and actions; the featured project uses an accent border.
- Initial language follows the browser when there is no saved valid preference.
- Control borders use `#7a94ad` (dark) and `#63768a` (light); decorative icons and education status use neutral colors.

## Content requiring source material

Project screenshots/live demo URLs and course issuers/dates are not available in this checkout. Add verified material when available; do not invent previews, certificates or credentials.

## Liquid Glass with Tailwind CSS

Tailwind is compiled through `@tailwindcss/vite`. The `liquid-glass` utility composes `backdrop-blur-xl` and `backdrop-saturate-150` with theme-specific translucency, a diagonal highlight, a thin reflective edge and a soft external shadow. Cards, navigation, controls and the portrait frame share this treatment. The primary action stays opaque for visual hierarchy and contrast.

The page uses stationary, low-intensity blue, violet and cyan radial gradients. Text colors and sufficiently dense panel fills bound the backgrounds behind content. Navigation uses a denser glass fill to keep scrolling content from interfering with its labels. No continuous animations or pointer tracking are used. Reduced motion is respected; unsupported backdrop filters and reduced transparency use solid panels. Card spacing, semantic headings, mobile navigation and focus behavior are preserved.
