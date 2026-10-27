# Portfolio V1 Project Inventory

**Audit date:** 2026-10-23  
**Source of truth:** `src/constants/index.jsx:44-73`  
**Renderer:** `src/components/Projects.jsx` → `src/components/Card.jsx`  
**Status note:** URL reachability was checked using read-only public GET requests. A 404 means the URL was not publicly reachable at audit time; it does not establish whether the repository is private, renamed, transferred, or deleted.

## Summary

| Order | Project | Technologies exactly as stored | Screenshot | Live URL | GitHub/source URL status | V3 status |
|---:|---|---|---|---|---|---|
| 1 | Dobu Martial Arts | `HTML \| CSS \| Javascript \| JQuery` | `src/assets/DobuMartialArts.png` | None | Configured; public 404 | Review against V2 inventory |
| 2 | ABC Cars Portal | `Spring Boot \| Java \| MySQL` | `src/assets/ABCCarsportal.png` | None | Configured; public 404 | **MARKED FOR FUTURE REMOVAL** |
| 3 | Boutiqa | `Axure \| Prototyping \| Wireframing` | `src/assets/Boutiqa.png` | None | Configured; public 404 | **MARKED FOR FUTURE REMOVAL** |
| 4 | Meals on Wheels | `PHP \| Laravel \| Vue \| MySQL` | `src/assets/MealsOnWheels.png` | None | Configured; public 404 | Review against V2 inventory |

No project contains a `liveUrl`, case-study link, route, slug, stable ID, role, date, outcome, or structured `technologies` array. `Projects.jsx` passes `project.technologies` to `Card`, but every value is `undefined`; technology chips therefore do not render. Technologies are displayed only through the pipe-delimited `subtitle`.

## 1. Dobu Martial Arts

| Field | Value |
|---|---|
| Exact displayed name | Dobu Martial Arts |
| Existing description | DoBu Martial Arts is a dynamic martial arts gym offering diverse classes, fitness training, and self-defense courses, now supported by a custom-designed, user-friendly website to enhance its online presence and operations. |
| Technologies listed in code | HTML, CSS, Javascript, JQuery |
| Screenshot | `src/assets/DobuMartialArts.png` |
| Screenshot format/dimensions/size | PNG; 1,877×1,049; 1,096,363 bytes |
| Live URL | Not provided |
| GitHub/source URL | `https://github.com/BryanFrancis27/Dobu-Martial-Arts.git` |
| Public link check | HTTP 404 on 2026-10-23 |
| Data source | Hardcoded centralized object in `src/constants/index.jsx:45-51` |
| List component | `src/components/Projects.jsx` |
| Card component | `src/components/Card.jsx` |
| Interaction | Card enters from the left, scales on hover, zooms/brightens its image, and exposes an icon-only GitHub link in a new tab. The card/image itself is not a link. |
| V3 disposition | Not specified; compare with the authoritative V2 project inventory before retaining. |

## 2. ABC Cars Portal — marked for future removal

| Field | Value |
|---|---|
| Exact displayed name | ABC Cars Portal |
| Existing description | ABC Cars is a user-friendly used car sales portal built with Spring Framework and MySQL, focusing on seamless functionality and quality assurance through Risk-Based Testing. |
| Technologies listed in code | Spring Boot, Java, MySQL |
| Screenshot | `src/assets/ABCCarsportal.png` |
| Screenshot format/dimensions/size | PNG; 1,874×1,008; 1,429,645 bytes |
| Live URL | Not provided |
| GitHub/source URL | `https://github.com/BryanFrancis27/ABCcars_portal.git` |
| Public link check | HTTP 404 on 2026-10-23 |
| Data source | Hardcoded centralized object in `src/constants/index.jsx:52-58` |
| List component | `src/components/Projects.jsx` |
| Card component | `src/components/Card.jsx` |
| Interaction | Card enters from the right, scales on hover, zooms/brightens its image, and exposes an icon-only GitHub link in a new tab. The card/image itself is not a link. |
| V3 disposition | **Remove from the V3 project inventory. Do not delete from V1 during the audit.** |

## 3. Boutiqa — marked for future removal

| Field | Value |
|---|---|
| Exact displayed name | Boutiqa |
| Existing description | Boutiqa is a user-focused marketplace designed with high-fidelity prototypes to ensure seamless experiences for both vendors and consumers, prioritizing usability and efficient interactions. |
| Technologies listed in code | Axure, Prototyping, Wireframing |
| Screenshot | `src/assets/Boutiqa.png` |
| Screenshot format/dimensions/size | PNG; 1,874×1,345; 2,612,673 bytes |
| Live URL | Not provided |
| GitHub/source URL | `https://github.com/BryanFrancis27/Boutiqa-Prototype-.git` |
| Public link check | HTTP 404 on 2026-10-23 |
| Data source | Hardcoded centralized object in `src/constants/index.jsx:59-65` |
| List component | `src/components/Projects.jsx` |
| Card component | `src/components/Card.jsx` |
| Interaction | Card enters from the left, scales on hover, zooms/brightens its image, and exposes an icon-only GitHub link in a new tab. The card/image itself is not a link. |
| V3 disposition | **Remove from the V3 project inventory. Do not delete from V1 during the audit.** |

## 4. Meals on Wheels

| Field | Value |
|---|---|
| Exact displayed name | Meals on Wheels |
| Existing description | This web application focuses on assisting individuals with disabilities and the elderly by offering them free food delivery services, specifically tailored to support the efforts of charity organizations. |
| Technologies listed in code | PHP, Laravel, Vue, MySQL |
| Screenshot | `src/assets/MealsOnWheels.png` |
| Screenshot format/dimensions/size | PNG; 1,863×1,011; 3,559,237 bytes |
| Live URL | Not provided |
| GitHub/source URL | `https://github.com/itsnaaur/Merry-Meals---Enterprise-Application.git` |
| Public link check | HTTP 404 on 2026-10-23 |
| Data source | Hardcoded centralized object in `src/constants/index.jsx:66-72` |
| List component | `src/components/Projects.jsx` |
| Card component | `src/components/Card.jsx` |
| Interaction | Card enters from the right, scales on hover, zooms/brightens its image, and exposes an icon-only GitHub link in a new tab. The card/image itself is not a link. |
| V3 disposition | Not specified; compare with the authoritative V2 project inventory and confirm repository ownership/link policy. |

## Current rendering contract

```text
PROJECTS[] in src/constants/index.jsx
  title          -> Card h3
  subtitle       -> Card h4 (the only visible technology list)
  details        -> Card description prop -> paragraph
  image          -> Card img src; title becomes alt text
  sourceCodeLink -> icon-only external GitHub anchor
  technologies   -> requested by Projects/Card, absent from every record
```

Grid and behavior:

- One column below 640 px; two columns from 640 px upward.
- Items animate once into view from alternating left/right directions.
- The `Projects` wrapper applies a 1.05 hover scale; `Card` adds a 1.03 hover scale and shadow.
- Images are rendered at `h-48 w-full object-cover` with hover zoom and brightness changes.
- There are no featured/archive distinctions, filters, active project tracking, sticky navigation, internal routes, live links, or case-study links.

## Recommended V3 inventory shape

Use a plain data model that is independent of a specific card design:

```js
{
  id: "stable-project-id",
  slug: "url-safe-project-name",
  title: "Project name",
  summary: "Verified concise description",
  technologies: ["Technology A", "Technology B"],
  role: "Verified role",
  year: "Verified year",
  image: {
    src: projectImage,
    alt: "Specific description of the project screen"
  },
  featured: true,
  liveUrl: null,
  sourceUrl: null,
  caseStudyUrl: null
}
```

Only add role, year, outcomes, metrics, team details, and case-study claims when they are supported by the V2 source or confirmed manually. Use stable IDs for fragment chapters and the sticky project index. Keep links separate so a missing/private source repository does not suppress a valid live demo or case study.

## Migration actions

1. Obtain and approve the authoritative V2 inventory.
2. Mark ABC Cars Portal and Boutiqa as excluded in the new data source; do not destructively remove their source assets until migration is complete.
3. Decide whether Dobu Martial Arts and Meals on Wheels remain, and verify their wording and ownership.
4. Repair, replace, or intentionally omit each public source URL.
5. Add verified live and case-study URLs independently.
6. Re-encode retained screenshots into appropriately sized AVIF/WebP variants.
7. Add descriptive alt text, stable IDs/slugs, and structured technology arrays.
8. Split the inventory into featured editorial chapters and a compact secondary archive.

## Items requiring manual verification

- The authoritative project names/content currently present in Portfolio V2.
- Whether any 404 repository is private, renamed, transferred, or removed.
- Whether the external Meals on Wheels repository is owned by a collaborator and may be publicly represented.
- Functional live/demo URLs for retained projects.
- Accurate individual role, dates, team context, outcomes, and metrics.
- Screenshot ownership and whether the displayed screens reflect the final versions.
- Which retained projects warrant full case studies versus archive-only entries.
