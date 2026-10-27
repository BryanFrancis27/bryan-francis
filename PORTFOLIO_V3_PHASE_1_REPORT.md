# Portfolio V3 — Phase 1 Implementation Report

## 1. Git baseline

- Repository: Portfolio V1 React/Vite application at `bryan-francis`
- Working branch: `feat/portfolio-v3-foundation`
- Starting commit: `40d881d437100e7462377354d90848db3d0e1539` (`Updated Images`)
- Starting branch: `main` tracking `origin/main`
- Pre-existing uncommitted work preserved: `PORTFOLIO_V1_CODEBASE_AUDIT.md` and `PORTFOLIO_V1_PROJECT_INVENTORY.md` were untracked before implementation and were not modified.
- No remotes were changed, and no commit, push, or deployment was performed.

## 2. Files created and modified

Created:

- `src/data/projects.js` — UI-independent V3 project inventory and schema.
- `PORTFOLIO_V3_PHASE_1_REPORT.md` — this implementation record.

Modified:

- `src/constants/index.jsx` — removed the legacy project array and its project-image imports; all non-project constants remain in place.
- `src/components/Projects.jsx` — consumes the dedicated project module and uses stable project IDs as React keys.
- `src/components/Card.jsx` — consumes structured project records, handles missing media deliberately, renders technology arrays, and conditionally exposes only available links.
- `src/components/ContactForm.jsx` — resolved the two baseline ESLint errors without changing the EmailJS workflow.
- `package.json` and `package-lock.json` — removed the confirmed-unused `swiper` production dependency.

No image assets were deleted. The legacy ABC Cars Portal and Boutiqa images remain available for migration cleanup later.

## 3. Data-model decisions

Project content was moved to `src/data/projects.js` because it is application data rather than a UI constant. Keeping it independent of the renderer prepares the inventory for future editorial chapters, a sticky index, and a compact archive without coupling those views to `Card.jsx`.

Every record provides the same fields: `id`, `slug`, `title`, `category`, `summary`, `description`, `technologies`, `contributions`, `features`, `role`, `year`, `image`, `featured`, `liveUrl`, `sourceUrl`, and `caseStudyUrl`.

- Stable, human-readable IDs and slugs are used.
- Technologies are arrays rather than pipe-delimited strings.
- Unknown scalar values use `null`; unknown list values use empty arrays.
- `featured: true` on AutoCare+ and LunarLedger records the supplied provisional placement only. It does not imply that a case study, verified link, or final Phase 2 editorial decision exists.
- Supplied descriptions and verified contribution statements were preserved without adding roles, dates, achievements, or URLs.
- DoBu Martial Arts and Meals on Wheels preserve their V1 descriptions, technology information, and existing screenshots.

## 4. Final displayed inventory

1. AutoCare+ — provisional featured placement; text-first card because no project screenshot is verified.
2. LunarLedger — provisional featured placement; text-first card because no project screenshot is verified.
3. DoBu Martial Arts — More Work placement; retained V1 screenshot.
4. Meals on Wheels — More Work placement; retained V1 screenshot.
5. BryanOS — More Work placement; text-first card because no project screenshot is verified.

## 5. Removed or excluded projects

ABC Cars Portal and Boutiqa were removed from the displayed project data and are absent from the production bundle's rendered inventory. Their original image files were intentionally retained.

## 6. Link and media handling

- The previous project repository URLs were not migrated because the V1 investigation found public 404 responses and no replacement URLs were verified.
- All `liveUrl`, `sourceUrl`, and `caseStudyUrl` values are currently `null`. The renderer creates no empty anchors, dead icons, or nonfunctional actions.
- When a valid destination is added later, the card supports descriptive live-project, source-code, and case-study labels with new-tab context and visible keyboard-focus styling.
- Verified V1 screenshots use descriptive project-specific alt text.
- Projects without verified screenshots render a readable text-first header instead of a missing or broken image.
- The existing résumé destination in `src/components/About.jsx` remains unresolved. It was not changed because no replacement was verified and the available V2 résumé files were not compared in this phase.

## 7. Dependency changes

A source-wide search found `swiper` only in `package.json` and `package-lock.json`; there were no application imports or usages. It was removed with `npm uninstall swiper`, keeping the manifest, lockfile, and installed dependency tree consistent.

No React, Vite, Tailwind, or other framework upgrades were performed, and no new dependency was installed.

## 8. Verification results

### Before implementation

| Check | Result |
| --- | --- |
| `npm run lint` | Failed with 2 errors in `ContactForm.jsx`: unused `error` catch parameter and an unescaped apostrophe. |
| `npm run build` | Passed after rerunning with permission to traverse the full Windows workspace path. Vite transformed 1,963 modules. |
| `npm audit --omit=dev` | Failed with 1 critical production vulnerability: Swiper prototype pollution (`GHSA-hmx5-qpq5-p643`). |

The initial build and audit attempts inside the restricted sandbox failed for environment reasons (`EPERM` while resolving `C:\Users\Bryan`, then registry/cache access failure). Those were not application failures; both checks were rerun with the required access to establish the results above.

### After implementation

| Check | Result |
| --- | --- |
| `npm run lint` | Passed with 0 errors and 0 warnings. |
| `npm run build` | Passed. Vite transformed 1,962 modules and emitted the DoBu Martial Arts and Meals on Wheels project images. |
| `npm audit --omit=dev` | Passed with 0 production vulnerabilities. |
| `git diff --check` | Passed; no whitespace errors. |
| Source inventory search | Confirmed no displayed ABC Cars Portal or Boutiqa records and no remaining Swiper reference. |

The build still reports the pre-existing Browserslist notice that `caniuse-lite` is outdated. Updating browser compatibility metadata was outside this narrowly scoped dependency change.

Browser smoke testing was attempted, but the available computer-use environment exposed no browser or application surfaces. Consequently, interactive homepage rendering, navigation behavior, image loading in a real browser, keyboard traversal, and viewport-specific mobile visual checks remain unverified. The successful production build verifies compilation and asset resolution but is not a substitute for visual UAT.

## 9. Existing issues left unresolved

- The résumé URL remains unverified and unchanged.
- Project-specific live, source, and case-study URLs are unavailable.
- AutoCare+, LunarLedger, and BryanOS still need verified project-specific media.
- Browser and mobile visual UAT could not be completed in the current environment.
- The production build retains the existing outdated Browserslist database notice.
- The automatic full dependency audit shown by `npm uninstall` reported 23 vulnerabilities across the complete development-inclusive tree (1 low, 5 moderate, 17 high). The requested production-only audit is clean; broad dependency upgrades were intentionally not attempted in Phase 1.

## 10. Risks and missing information

- Featured placement is provisional and should be confirmed before the Phase 2 editorial hierarchy is finalized.
- `category`, `summary`, `role`, and `year` remain `null` because verified values were not supplied.
- Contributions and feature lists for the two retained V1 projects remain empty because no verified statements were supplied.
- Adding unverified repository or deployment destinations later would reintroduce dead-link risk; each URL should be checked before it enters project data.
- Large retained image assets continue to affect bundle weight. Asset optimization was not part of this foundation phase.

## 11. Recommended Phase 2 next steps

1. Confirm featured-project ordering and editorial categories.
2. Collect and verify screenshots, live URLs, source URLs, roles, dates, summaries, and case-study destinations.
3. Compare the available V2 résumé files and choose a verified replacement before changing the résumé link.
4. Run desktop and mobile browser UAT, including section navigation, card readability, keyboard focus, and image rendering.
5. Design the Editorial Project Chapters and Sticky Project Index against the new shared schema.
6. Plan image optimization and separately review development-only dependency advisories without forcing breaking upgrades into the visual redesign.
