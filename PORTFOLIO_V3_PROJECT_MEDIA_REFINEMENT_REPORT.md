# Portfolio V3 Project Media Refinement

Date: 2026-10-28 (Asia/Manila)

## Starting state and scope

The working tree already contained modifications to `src/components/About.jsx`, `src/components/ProjectCard.jsx`, `src/components/ProjectLinks.jsx`, `src/data/projects.js`, and `src/index.css`. These were preserved, including the previous Featured-label removal and three supplied Live Preview URLs. No link-update discrepancy was found.

During the audit, `src/assets/DobuMartialArts.png` changed externally from 1877×1049 to 2544×1309. The replacement was re-inspected and preserved. This task did not write any source image, install packages, commit, push, or deploy.

Files changed by this task:

- `src/components/ProjectMedia.jsx`: reusable screenshot presentation and placeholder fallback.
- `src/index.css`: scoped project media frames, backgrounds, hover effects, and restrained dialog treatment; retained prior action-row styles.
- `PORTFOLIO_V3_PROJECT_MEDIA_REFINEMENT_REPORT.md`: this report.

## Asset inspection and mapping

All 24 image assets were visually inspected in a diagnostic contact sheet. The four selected screenshots were also inspected individually. Dimensions were read from the actual image files. Original assets were not overwritten. No reference screenshots were present alongside the pasted brief; its written direction guided the presentation.

| Project | Reused asset | Dimensions | Ratio (width/height) | Visual findings and treatment |
| --- | --- | --- | --- | --- |
| AutoCare+ | None | — | — | No positively identified matching screenshot. Retains initials, project name, and explicit “Screenshot to come” placeholder. |
| LunarLedger | `LunarLedger_preview.png` | 2543×1317 | 1.931 | Single finance planner page capture with income, payable-entry, payable-table, and monthly-distribution panels. Dashboard variant with warm charcoal background. All panels retained. |
| DoBu Martial Arts | `DobuMartialArts.png` | 2544×1309 | 1.943 | Current homepage capture with “Train with purpose” hero, monochrome photography, red website accents, and three approach cards. Browser variant; screenshot colors unchanged. |
| Meals on Wheels | `MealsOnWheels.png` | 1863×1011 | 1.843 | Homepage capture with navigation, colorful meal photography, and donation action. Neutral browser variant; full image retained without filters. |
| BryanOS | `BryanOS_preview.png` | 2554×1325 | 1.928 | Single dark activation-page capture with system-status panels and geometric digital core. Desktop variant with minimal amber ambient background; no fabricated or duplicated windows. |

These are existing page/viewport captures, not generated device mockups or long full-site screenshots. All four are suitable for the gallery. `object-fit: contain` retains their entire contents; small interface text naturally becomes smaller at card/mobile sizes, while the existing dialog provides a larger view.

The earlier DoBu image contained browser chrome and a “No limits, no rules, no fears” hero. The externally updated image contains no browser chrome, so the final implementation adds a single decorative top bar.

Other assets inspected and excluded from this gallery:

| Asset | Dimensions | Ratio | Contents / exclusion reason |
| --- | --- | --- | --- |
| `ABCCarsportal.png` | 1874×1008 | 1.859 | ABC Car dealership login screenshot; a different project, not AutoCare+. |
| `Boutiqa.png` | 1874×1345 | 1.393 | Boutiqa marketplace landing screen; a different project. |
| `bryanFrancis1.jpg` | 4640×3206 | 1.447 | Laptop/work photograph; not an application screenshot. |
| `bryanFrancis2.jpg` | 3874×2734 | 1.417 | Personal work photograph; not an application screenshot. |
| `joey.jpg` | 426×600 | 0.710 | Portrait; unrelated to project previews. |
| `lithan-logo.png` | 200×200 | 1.000 | Education logo; unrelated to project previews. |
| `logo.png` | 500×500 | 1.000 | Personal monogram; not product media. |
| `Portrait.png` | 1254×1254 | 1.000 | Personal portrait; not product media. |
| `prof.jpg` | 6000×4000 | 1.500 | Hands/laptop photograph; not product media. |
| `profilePic.jpg` | 2221×3024 | 0.734 | Personal photograph; not product media. |
| `project1.jpeg` | 3537×3537 | 1.000 | Yellow flower photograph; no project interface. |
| `project2.jpeg` | 3554×3554 | 1.000 | Flowering branch photograph; no project interface. |
| `project3.jpeg` | 3886×3886 | 1.000 | Pale flower photograph; no project interface. |
| `project4.jpeg` | 3768×3768 | 1.000 | Flowers in a vase; no project interface. |
| `project5.jpeg` | 4838×4838 | 1.000 | Yellow flowers against sky; no project interface. |
| `project6.jpeg` | 3198×3198 | 1.000 | Pink blossoms; no project interface. |
| `project7.jpeg` | 3798×3798 | 1.000 | Pink calla lilies; no project interface. |
| `project8.jpeg` | 2993×2993 | 1.000 | Yellow tulips; no project interface. |
| `robertButcher1.jpg` | 2400×1600 | 1.500 | Portrait photograph; unrelated to project previews. |
| `uc-logo.png` | 612×408 | 1.500 | University logo; unrelated to project previews. |

No removed projects were reintroduced. AutoCare+ remains the only missing confirmed screenshot.

## Component and framing decisions

The active gallery and dialogs already share `ProjectMedia`. Its previous two-project screenshot allowlist was removed: a supplied image is now displayed unless loading fails or the optional `placeholder` variant is requested. A small local metadata map records inspected dimensions, descriptive alt text, and the default `browser`, `dashboard`, or `desktop` variant. Existing imported project image data is reused without changing project records.

All image variants share one markup implementation: charcoal showcase surface, thin rounded frame, a narrow decorative top bar with three noninteractive dots, and a contained screenshot. Controls are hidden from assistive technology. No fake address, charts, application panels, or new interactive screenshot controls were added. Missing/failed images render the intentional text placeholder instead of a broken image.

The outer 16:10 container reserves space before loading. The screenshot is positioned within a bounded flexible screen area, using its full available width/height with `object-fit: contain`; source dimensions are included on the image. Images remain lazy loaded and decode asynchronously. No color filters are applied.

## Hover, responsiveness, and dialogs

On hover-capable devices with no reduced-motion preference, the complete frame scales from 1 to 1.03 over 300ms while its border and shadow deepen slightly. Surrounding padding leaves room for this restrained scale. Transitions are declared on the resting frame so mouse leave reverses smoothly. Existing card hover/focus behavior and visible action focus styling remain intact. Essential content is always visible. Reduced-motion users receive no new scale effect; existing global reduced-motion rules also disable transitions.

The existing grid breakpoints are unchanged. Expected layout from CSS (not browser-verified):

| Requested viewport | Columns | Media behavior |
| --- | --- | --- |
| 1440px | 3 | Equal 16:10 areas, full contained screenshots. |
| 1024px | 3 | Same layout with fluid padding and frame sizes. |
| 768px | 2 | Same images and proportions. |
| 390px | 1 | Decorative padding reduces to 8px; actions retain wrapping. |
| 320px | 1 | Full-width contained media with no fixed screenshot width. |

Dialogs use the shared media component with an 8px surround, neutral background, reduced top-bar height, and no frame shadow or hover zoom. `ProjectDetails.jsx` was not modified. Source review confirms native `showModal()`, animation lifecycle, backdrop blur, Escape cancellation/close handling, focus restoration, and internal scrolling remain in place. Runtime regression checks for these behaviors remain pending browser access.

Titles, descriptions, technologies, contributions, ordering, and verified external links were not edited. View Details and Live Preview action markup was preserved. No unrelated website sections were modified by this task.

## Validation and limitations

- `npm.cmd run lint`: passed.
- `npm.cmd run build`: passed; existing Browserslist data-age warning remains. No dependency updates were made.
- `npm.cmd test`: passed, 26/26 existing Contact tests. These tests do not cover project media, dialogs, or browser layout.
- `git diff --check`: passed. Git emits line-ending normalization notices for working files; no whitespace errors were reported.
- Build and tests ran with the access required to avoid the previously observed sandbox Node path-resolution error.
- Browser inventory returned no apps or browsers and reported: `Computer Use native pipe is unavailable: failed to connect native pipe: The system cannot find the file specified. (os error 2)`.

Actual image-content inspection was completed using local image viewing, not a browser. No browser visual verification is claimed. The five requested viewport sizes, loaded-image layout, overflow, hover reversal/smoothness, focus/keyboard interactions, modal opening/closing/scrolling, and browser console still require live browser QA. External preview sites were not tested during this media refinement, and no operational status is claimed.
