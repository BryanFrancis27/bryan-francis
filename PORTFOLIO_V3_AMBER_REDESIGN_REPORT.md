# Portfolio V3 — Black & Amber Redesign

Implementation date: October 27, 2026 (Asia/Manila).

## Starting state and scope

Branch: `feat/portfolio-v3-foundation`.

The working tree already contained the Phase 1–3 implementation and refinement work. Before edits, tracked changes were present in `package.json`, `package-lock.json`, `src/App.jsx`, `Card.jsx`, `ContactForm.jsx`, `Education.jsx`, `Navbar.jsx`, `Projects.jsx`, `Skills.jsx`, `src/constants/index.jsx`, and `src/index.css`. `SkillBar.jsx` was already deleted. Prior reports, project chapter/index/archive/link components, the data directory, and LunarLedger/BryanOS preview assets were untracked. Nothing was staged in the starting status.

The supplied redesign brief, prior implementation reports, existing components, constants, and data modules were inspected. No applicable AGENTS.md was found at the repository or immediate parent level.

Baseline lint and build passed. Their first sandboxed attempt failed with Node `EPERM` while resolving `C:\Users\Bryan`; rerunning outside that restriction succeeded. This was an environment restriction, not an application failure.

This work preserves the existing React/Vite architecture, dependencies, five-project inventory, full skills data, distinct education records, original assets, and earlier reports. No commit, push, deployment, or real test message was performed.

## Files

Created:

- `src/components/Portrait.jsx`
- `src/components/ProjectCard.jsx`
- `src/components/ProjectDetails.jsx`
- `src/components/ProjectMedia.jsx`
- `src/components/SocialLinks.jsx`
- `src/data/portrait.js`
- `PORTFOLIO_V3_AMBER_REDESIGN_REPORT.md`

Modified for this redesign:

- `src/App.jsx`: main landmark, skip link, header/footer composition.
- `src/components/HeroSection.jsx`: introduction, approved headline, native CTA links, shared portrait.
- `src/components/About.jsx`: circular portrait and concise biography.
- `src/components/Navbar.jsx`: branding, disclosure, active section, native fragments.
- `src/components/Footer.jsx`: restrained footer and shared social links.
- `src/components/Skills.jsx`: title, three-column presentation, initially visible content.
- `src/components/Education.jsx`: initially visible content; dark styling supplied through shared tokens.
- `src/components/Projects.jsx`: gallery composition and selected-project dialog state.
- `src/components/ContactForm.jsx`: two-column contact layout, validation and EmailJS feedback.
- `src/index.css`: visual system, reusable controls, responsive layouts, focus and motion rules.

Retired from active rendering, retained on disk: `ProjectIndex.jsx`, `ProjectChapter.jsx`, `ProjectArchive.jsx`, and their older `Card.jsx` renderer. `ProjectLinks.jsx` is reused by the new dialog. Keeping the old files preserves earlier work while browser verification remains outstanding. No asset or project-data file was deleted or rewritten.

Package manifests and the earlier `SkillBar.jsx` deletion remain as they were before this redesign.

## Visual system

| Token | Value |
| --- | --- |
| Background | `#070708` |
| Surface | `#121214` |
| Elevated surface | `#1B1B1E` |
| Accent | `#F59E0B` |
| Accent hover/focus | `#FBBF24` |
| Primary text | `#F5F5F5` |
| Secondary text | `#A3A3A3` |
| Border | `#303034` |
| Soft glow | `0 0 20px rgba(245,158,11,.18)` |
| Medium glow | `0 0 30px rgba(245,158,11,.28)` |
| Strong glow | `0 0 48px rgba(245,158,11,.38)` |

Shared button, surface, focus, border, and glow treatments replace the previous mixed section themes. Compatibility aliases connect the existing Skills/Education token references to the new colors. The malformed external font import was replaced with an Inter/system font stack; there is no new font dependency or external font request. Local Inter availability can affect exact typography.

Glows are strongest on the Hero portrait and primary CTA, softer on About, and activated on project interactions. Paragraphs have no glow. Ambient light is static and restrained.

## Hero, portrait, and About

Hero uses the approved “Software Developer / UI/UX Designer” positioning and “I design the feeling. I build the function.” headline, with native `#projects` and `#contact` links.

`Portrait` has `hero` and `about` variants sharing `src/data/portrait.js`. Both currently display the same neutral SVG silhouette and explicit “Portrait to come” label. No old portrait, stock person, or generated person is displayed. Hero has a larger ring and halo; About has a smaller circle and softer outline/glow.

To add an approved portrait, set `PORTRAIT.src`, descriptive `PORTRAIT.alt`, and optional `objectPosition` in one place. Images use a controlled circular crop and can contain transparency. The placeholder silhouette is decorative to assistive technology; its visible label conveys the pending-image state.

About places the portrait left and biography right on desktop and stacks naturally on mobile. Copy condenses the existing developer/design background and personal interests. The old age/personal-data table is no longer displayed; its source constants are preserved. The optional résumé action is omitted because prior reports identify its existing Drive destination as unresolved, and no verified replacement was supplied. This does not claim that the old URL is broken.

## Tech Stack and Education

“My Tech Stack.” keeps `id="skills"` and consumes the existing curated Frontend, Backend, and Design lists. Desktop/tablet uses three columns from 768px; narrow screens stack the groups. Full inventories and professional-skill records remain intact in `src/data/skills.js`. There are no proficiency bars, tabs, capability paragraphs, or per-skill cards.

Education retains Connected Academic Journey, both separate current-study records, the earlier STEM record, and all existing qualification/date/location data. Shared tokens make the section black with dark education surfaces, white institution names, muted supporting text, a thin connector, and amber markers. No graduation date or qualification relationship was invented.

Skills and Education begin visible rather than depending on an entrance animation to expose their content.

## Project gallery and details

The gallery displays AutoCare+, LunarLedger, DoBu Martial Arts, Meals on Wheels, and BryanOS in source order. It uses three columns from 1024px, two from 768px, and one below 768px. Cards have consistent media areas, title, source description/summary, three selected technologies, optional featured label, and a separate View Details button. Cards use a subtle default amber border, restrained lift, and visible hover/focus border/glow. Decorative media is not presented as clickable.

`ProjectMedia` uses the real existing DoBu and Meals on Wheels screenshots. AutoCare+, LunarLedger, and BryanOS use explicit typographic placeholders. The LunarLedger/BryanOS preview references remain untouched in the source data and their files remain on disk; the new renderer intentionally does not display them as verified screenshots. A future approved screenshot requires updating the renderer's screenshot selection as well as supplying the asset/data.

Every View Details button selects its project and records its triggering button. `ProjectDetails` uses native `<dialog>.showModal()` for top-layer modality and browser focus containment/background inertness. It includes an accessible title and autofocus close control. Escape is handled through the native cancel event; both Escape and the close button unmount the dialog. Effect cleanup closes it, restores body overflow, and returns focus to the exact trigger. The effect is reversible for React Strict Mode. Body scrolling is locked while open; the dialog itself can scroll within the viewport. Backdrop clicks intentionally do not dismiss it.

Details include the original description, all technologies, and verified features/contributions only when present. Missing features, roles, dates, metrics, and destinations are not invented. Existing `ProjectLinks` renders only actual non-null destinations; currently all project destinations are null, so no demo/source links are displayed.

Top-level section fragments remain stable. Existing featured-project fragments and `#project-archive` remain valid, now targeting gallery items/the gallery rather than editorial chapters. Browser history stays native.

## Contact, navigation, and footer

Contact provides an actionable `mailto:` link using the existing email constant and existing GitHub/LinkedIn destinations. Link presence comes from repository evidence; account ownership, destination reachability, and inbox receipt were not externally reverified.

The form retains the original EmailJS service/template/public key and field names. Optional `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` overrides are supported. No backend or dependency was added. Existing configuration is populated, but remote validity and delivery remain unverified because no real test submission was authorized.

The form trims whitespace, validates required fields/email, focuses the first invalid field, associates visible text errors through `aria-describedby`, sets `aria-invalid`, and announces pending/success/error feedback in a persistent live region. Pending submission disables fields and guards duplicate sends. Fields retain their content after failures. Success wording describes email-service acceptance rather than claiming inbox delivery. Direct email remains available when the form fails.

Navigation uses text BE branding, a Contact action, and an amber active-section border/text with `aria-current="location"`. Native fragments preserve URL/history. The fixed 76px header uses shared responsive scroll clearance: 6rem below 1024px and 7rem from 1024px. The mobile menu has a named button, expanded state, controlled menu ID, Escape dismissal with focus return, link dismissal, outside-pointer dismissal, and desktop-breakpoint cleanup. Closed links are hidden from keyboard navigation. A skip link leads to the main landmark.

Footer has BE branding, existing GitHub/LinkedIn links, a separator, and a runtime copyright year with the existing full name.

## Responsiveness and accessibility

Hero/About/Contact use two-column desktop layouts and stack below 768px. Portrait sizes shrink at tablet/mobile breakpoints. The form and project grid use flexible widths; email can wrap. Dialog width/height are capped to the viewport, with internal scrolling. Global horizontal clipping remains on the main shell. No browser measurement of overflow was possible.

Semantic sections, one h1, h2 section titles, nested h3/h4 headings, lists, visible field labels, and accessible button names are present. Focus uses a 2px amber outline with offset rather than glow alone. Active navigation also has a border. Error messages use words as well as color. Reduced-motion CSS disables animation, transitions, smooth scrolling, and interaction transforms; retained Framer Motion components also respect reduced motion.

Calculated solid-color contrast checks:

| Pair | Ratio |
| --- | --- |
| Primary text / black | 18.47:1 |
| Secondary text / surface | 7.42:1 |
| Amber / surface | 8.71:1 |
| Dark button text / amber | 9.38:1 |
| Error text / surface | 9.86:1 |

These calculations validate selected token pairs, not every composited browser state or a complete accessibility audit.

## Verification

| Check | Actual result |
| --- | --- |
| Baseline lint | Passed, zero warnings |
| Baseline build | Passed, 1,968 transformed modules |
| Final `npm run lint` | Passed, zero warnings |
| Final `npm run build` | Passed, 1,963 transformed modules |
| `npm audit --omit=dev` | Passed, zero vulnerabilities |
| `git diff --check` | Passed; existing LF/CRLF conversion notices only |
| React server-rendered markup checks | Passed; see below |
| Selected token contrast calculations | All tested pairs exceeded 4.5:1 |

Production build: JavaScript approximately 290.07 kB (95.12 kB gzip), CSS 27.98 kB (6.73 kB gzip). This is build output, not a runtime performance benchmark. The existing Browserslist outdated-data notice remains.

A temporary inline Node/Vite SSR verification rendered App and all five detail views. Assertions checked stable section/legacy project anchors, one h1, five dialog triggers, two portrait placeholders, three project placeholders, two screenshot images, three education records, three form labels, accessible dialog title references, each project's technologies, and no empty project links. SSR does not execute effects or test browser interaction.

## Browser testing and outstanding work

Browser testing was attempted through the computer-use skill. The native service returned: `Computer Use native pipe is unavailable: failed to connect native pipe: The system cannot find the file specified. (os error 2)`. The alternate computer/browser inventory returned no apps or browsers and the same native-service error. No browser could be selected. No browser screenshots were captured.

Consequently none of the requested 1440px, 1024px, 768px, or 390px checks is reported as passed. Visual balance, measured overflow, actual heading clearance, active-navigation scrolling, mobile-menu keyboard behavior, dialog opening/Escape/Tab containment/focus restoration, form validation interaction, reduced-motion emulation, 200% zoom, and runtime console output remain unverified in a browser.

Follow-up priorities:

1. Run the requested four viewport checks with a browser, including all five dialogs, Tab/Shift+Tab/Escape, repeated opening, trigger focus return, native fragments/back history, and mobile menu operation.
2. Check invalid and whitespace-only form submissions without submitting valid test messages. Verify EmailJS remotely only with approval for a real test message.
3. Supply the approved final portrait and verified project screenshots; verify the résumé destination before restoring its optional action.
4. Confirm the existing education “Present” dates and qualification relationship before changing those records.
5. Consider optimized derivatives of the retained large screenshots after visual verification; original assets have been preserved.

The code implementation and requested command checks are complete. Visual and browser-interaction acceptance remain outstanding due to the unavailable browser service.
