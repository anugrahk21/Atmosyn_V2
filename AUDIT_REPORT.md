# 🔍 ATMOSYN Codebase Audit Report

**Date:** February 19, 2026  
**Scope:** Full codebase + `public/assets` directory  
**Framework:** Next.js 14 (App Router, Static Export)

---

## Table of Contents
1. [Executive Summary](#executive-summary)
2. [Dead Code & Unused Components](#dead-code--unused-components)
3. [Unused Dependencies (npm)](#unused-dependencies-npm)
4. [Unused & Redundant Assets](#unused--redundant-assets)
5. [Redundant CSS Files](#redundant-css-files)
6. [Performance Bottlenecks](#performance-bottlenecks)
7. [Code Quality Issues](#code-quality-issues)
8. [Architecture & Reusability](#architecture--reusability)
9. [SEO & Accessibility](#seo--accessibility)
10. [Prioritized Refactoring Roadmap](#prioritized-refactoring-roadmap)

---

## 1. Executive Summary

| Category | Severity | Count |
|---|---|---|
| 🔴 Critical (blocks perf/build) | High | 5 |
| 🟠 Major (significant waste/risk) | Medium | 11 |
| 🟡 Minor (tech debt, cleanup) | Low | 9 |

**Total `public/assets` size: ~39.9 MB** — This is very large for a static site. Significant savings possible.

---

## 2. Dead Code & Unused Components

### 🔴 Files that are NEVER imported anywhere:

| File | Status | Action |
|---|---|---|
| `components/elements/Preloader.tsx` | Empty component (renders nothing). Never imported. | **DELETE** |
| `components/elements/ThemeSwitch.tsx` | Never imported by any other file. Also uses `localStorage` directly in `useState` init (SSR crash risk). | **DELETE** |
| `components/elements/CircleComponent.tsx` | Never imported by any other file. | **DELETE** |
| `components/elements/ScheduleCallToast.tsx` | Never imported by any other file. | **DELETE** |
| `components/sections/Video.tsx` | Never imported by any page. Also pulls in `react-modal-video` dependency. | **DELETE** (also remove `react-modal-video` from package.json) |
| `app/page.module.css` | Never imported (`page.tsx` doesn't reference it). This is the default Next.js CSS module boilerplate — **231 lines of dead CSS**. | **DELETE** |

### 🟠 Partially Dead Code:

| Item | Location | Detail |
|---|---|---|
| `AddClassBody.tsx` | `components/elements/` | References `home-2`, `home-4`, `home-5`, `home-6`, `home-8` routes that **don't exist** in the `app/` directory. All conditional branches are dead code except the `else` (always `theme-green`). | 
| `DataBg.tsx` | `components/elements/` | Queries `[data-background]` elements. Verify if any template actually uses `data-background` attributes — likely from the original theme but may be unused now. |

---

## 3. Unused Dependencies (npm)

These packages are installed in `package.json` but **never imported** in any `.tsx` or `.ts` file:

| Package | Size Impact | Evidence | Action |
|---|---|---|---|
| `framer-motion` | **~115KB gzipped** | Zero imports of `motion`, `framer-motion`, `AnimatePresence`, etc. across entire codebase. | **UNINSTALL** |
| `@lottiefiles/dotlottie-react` | ~50KB | Zero imports of `DotLottie`, `@lottiefiles`, etc. | **UNINSTALL** |
| `react-modal-video` | ~15KB + CSS | Only imported in `Video.tsx` (which is itself unused). | **UNINSTALL** (after deleting `Video.tsx`) |

**Estimated bundle size savings: ~180KB+ gzipped**

---

## 4. Unused & Redundant Assets

### 🔴 Unused Images (confirmed via grep — never referenced in code):

| File | Size | Action |
|---|---|---|
| `assets/img/others/about5-1.jpg` | 377 KB | **DELETE** |
| `assets/img/others/about8-1.jpg` | 96 KB | **DELETE** |
| `assets/img/others/contact6-1.jpg` | 234 KB | **DELETE** |
| `assets/img/others/contact1-1.jpg` | **2,258 KB** | **DELETE** — note: `contact1-1.svg` IS used (in About page), but the `.jpg` variant is unused |
| `assets/img/others/error-img.png` | 24 KB | **DELETE** — the SVG variant (`error-img.svg`) is used in `not-found.tsx` |
| `assets/img/bg/footer-bg-4.jpg` | **543 KB** | **DELETE** — not referenced in any TSX/CSS/SCSS file |
| `assets/img/icon/pinterest.svg` | <1 KB | **DELETE** — never referenced |
| `assets/img/logo/logomain.svg` | 47 KB | **DELETE** — never referenced |

**Total savings from unused images: ~3.6 MB**

### 🟠 Empty Directory:

| Directory | Issue |
|---|---|
| `assets/img/partner/` | **Empty folder** — 0 files. `PartnerMarquee.tsx` defaults to using `logo.svg` instead (Array of 6 logos). Either populate with real partner logos or remove the directory. |

### 🟠 Oversized Images (Critical for Page Speed):

These raster images are **massive** and should be compressed/converted to WebP:

| File | Current Size | Target (WebP ~80% quality) | Action |
|---|---|---|---|
| `assets/img/others/skill1-1.jpg` | **2,407 KB** | ~200–400 KB | Convert to WebP, resize to max 1200px wide |
| `assets/img/hero/hero-1-1.jpg` | **2,356 KB** | ~200–400 KB | Convert to WebP. **This is the LCP image on homepage!** |
| `assets/img/service/1.png` | **1,996 KB** | ~200–400 KB | Convert to WebP |
| `assets/img/service/2.png` | **2,057 KB** | ~200–400 KB | Convert to WebP |
| `assets/img/service/3.png` | **2,160 KB** | ~200–400 KB | Convert to WebP |
| `assets/img/service/4.png` | **2,180 KB** | ~200–400 KB | Convert to WebP |
| `assets/img/service/5.png` | **2,042 KB** | ~200–400 KB | Convert to WebP |
| `assets/img/project/project_3_2.png` | **1,757 KB** | ~200–300 KB | Convert to WebP |

**Total current size of oversized images: ~17 MB**  
**Estimated size after optimization: ~3 MB** (~14 MB savings)

### 🟡 Font File Redundancy:

Font files are served in 3 formats (`.woff2`, `.woff`, `.ttf`). Modern browsers only need `.woff2`. The `.ttf` and `.woff` files can be removed if you don't need IE11/very old browser support:

| Removable Files | Savings |
|---|---|
| `fa-brands-400.ttf` + `.woff` | ~219 KB |
| `fa-regular-400.ttf` + `.woff` | ~49 KB |
| `fa-solid-900.ttf` + `.woff` | ~297 KB |
| **Total** | **~565 KB** |

---

## 5. Redundant CSS Files

### 🔴 CSS files imported but features unused:

| File | Size | Issue | Action |
|---|---|---|---|
| `select2.min.css` | 16 KB | Imported in `layout.tsx` but no `<select>` uses Select2 jQuery plugin anywhere. This is a jQuery library — **not compatible with React**. | **Remove import + delete file** |
| `magnific-popup.css` | 7 KB | Imported in `layout.tsx` but Magnific Popup (jQuery lightbox) is never used. All modals use custom React components. | **Remove import + delete file** |
| `imageRevealHover.css` | 2.5 KB | Never imported anywhere (not in layout, not in any component). | **DELETE** |

### 🟠 CSS overlap/bloat:

| File | Size | Notes |
|---|---|---|
| `style.css` | **234 KB** | Compiled from SCSS. Contains styles for many theme variants (home-2 through home-8) that **don't exist** in this app. A significant portion is dead CSS. |
| `animate.min.css` | 67 KB | Full Animate.css library imported, but only a few animation classes are actually used (e.g., `fadeIn`, `slideInUp`). Consider using only needed animations. |
| `aos.css` | 25 KB | AOS (Animate on Scroll) styles. Used in `Layout.tsx`. Keep but verify all AOS data attributes are actually present. |
| `globals.css` | 2 KB | Contains CSS custom properties with `prefers-color-scheme` media queries for a dark/light mode system. However, your site doesn't use this CSS variable system at all — it uses the theme's own SCSS. **This is leftover Next.js boilerplate.** | 

### 🟡 CSS Source Map in Production:

| File | Size | Issue |
|---|---|---|
| `style.css.map` | 44 KB | Source map file. Should **NOT** be deployed to production (exposes source structure). Exclude from deployment. |

---

## 6. Performance Bottlenecks

### 🔴 Image Loading (Biggest Impact):

1. **No `next/image` optimization**: Every image uses raw `<img>` tags. With `output: 'export'`, `next/image` optimization won't work at build time, BUT you should still use `next/image` with `unoptimized` prop for proper `loading="lazy"`, `width`/`height` attributes (prevents CLS), and `srcSet` generation.

2. **Hero image (2.3 MB)**: The LCP element (`hero-1-1.jpg`) is a 2.3 MB JPG. This alone adds 2–5 seconds to initial page load on mobile. **Converting to WebP and sizing to ~1200px would reduce it to ~300 KB**.

3. **Service images (5 × ~2 MB each)**: 10 MB of PNGs loaded on the home page's service tabs section. These should be lazy-loaded and converted to WebP.

### 🔴 Console.log in Production:

`ProjectModal.tsx` has **7 `console.log()` statements** that run in production:
- Lines 131, 137, 160, 173, 179, 209, 272
- These fire repeatedly during the scroll animation loop (every `requestAnimationFrame`), causing performance overhead.

### 🟠 Multiple Timer-Based Toasts:

Both `ContactToastButton.tsx` and `ScheduleCallToast.tsx` implement recurring toast notifications with `setInterval` (every 30 seconds) and nested `setTimeout` chains. Issues:
- `ScheduleCallToast.tsx` is unused (never imported) — DELETE it.
- `ContactToastButton.tsx` has potential memory leaks: inner `setTimeout` calls inside `setInterval` are not properly cleaned up on unmount.
- Both components create identical UX patterns. Should be a single reusable component.

### 🟠 Isotope Library (Dynamic Import):

`ProjectFilterOne.tsx` dynamically imports `isotope-layout` with a **1000ms setTimeout** before initialization. This is fragile — the delay is arbitrary and may not be enough on slow connections, or wasted time on fast ones. Use `MutationObserver` or `useLayoutEffect` instead.

### 🟡 GSAP Magnetic Effect:

`MagnetsComponent.tsx` adds `mousemove` event listeners to every `.gsap-magnetic` element. The cleanup function creates **new anonymous functions** for `mouseout` removal instead of referencing the originals, so event listeners are never properly removed:
```tsx
// BUG: This doesn't actually remove the listener
magnet.removeEventListener('mouseout', () => { })
```

### 🟡 SCSS Compilation:

The SCSS is pre-compiled to `style.css` (234 KB). The `sass` package and `sass` script in `package.json` suggest manual compilation. This CSS should be reviewed for dead rules from theme variants that were removed.

---

## 7. Code Quality Issues

### 🟠 Type Safety:

| Location | Issue |
|---|---|
| `BackToTop.tsx` | Props typed as `any`. `document.querySelector(target)` has no null check — will crash if selector doesn't match. |
| `Header1.tsx` | All props typed as `any`: `{ scroll, isMobileMenu, handleMobileMenu, isOffcanvasMenu, handleOffcanvasMenu }: any` |
| `Layout.tsx` | Props typed as `any` |
| `ProjectModal.tsx` line 17 | `useState<any>(null)` for project state. Should use the proper project interface. |
| `ProjectModal.tsx` | `Link` imported but never used (line 4). `Image` imported but never used (line 8). |

### 🟠 Hardcoded Values / Magic Strings:

Contact information is hardcoded in **7+ different files**:
- Phone number `919539694902` appears in: `ContactForm.tsx`, `OffcanvasMenu.tsx`, `MobileMenu.tsx`, `WhatsAppButton.tsx` (×2), `contact/page.tsx` (×2)
- Email `info@atmosyn.com` appears in: `OffcanvasMenu.tsx`, `MobileMenu.tsx`, `Footer1.tsx`, `privacy-policy/page.tsx`, `contact/page.tsx`

**Should be centralized** into a single `constants.ts` or `siteConfig.ts` file.

### 🟠 Social Media Links are Placeholders:

In `Footer1.tsx`, all social links point to generic URLs:
- `https://www.instagram.com/` (not the actual Atmosyn Instagram)
- `https://www.linkedin.com/` (not the actual Atmosyn LinkedIn)
- `https://www.twitter.com/`
- `https://www.facebook.com/`

These should point to actual Atmosyn social profiles.

### 🟡 Duplicate Code Patterns:

1. **WhatsApp URL construction**: The WhatsApp URL (`wa.me/919539694902?text=...`) is built identically in `WhatsAppButton.tsx` (default export), `WhatsAppButtonOffcanvas` (named export in same file), and `ContactForm.tsx`. Should be a shared utility.

2. **Scroll detection pattern**: The "show after scroll threshold" pattern is duplicated across `BackToTop.tsx` (>250px), `WhatsAppButton.tsx` (>200px), `ScrollIndicator.tsx` (>150px). A reusable `useScrollThreshold` hook would eliminate this.

3. **Blog image URL helper**: `getBlogImageUrl()` in `app/blog/[id]/page.tsx` and `getImageUrl()` in `components/sections/Blog1.tsx` do similar things. Should be unified in a `util/` file.

4. **Pricing plan data**: Pricing plans are hardcoded in BOTH `components/sections/Pricing.tsx` AND `app/pricing/page.tsx` — same data, duplicated. Should be in a JSON file like services and blog data.

### 🟡 Random() in Server Components:

`service-details/[slug]/page.tsx` uses `Math.random()` to shuffle "Other Services":
```tsx
const shuffledServices = [...allOtherServices].sort(() => 0.5 - Math.random());
```
This runs at **build time** (static export), so the "random" selection is fixed per build. This is misleading — either make it deterministic or implement client-side randomization.

`blog/[id]/page.tsx` uses `Math.random()` for quote selection (`getCategoryQuote`). Same issue.

---

## 8. Architecture & Reusability

### 🟠 Component Hierarchy:

The `Layout.tsx` component does too much:
- Manages mobile menu state
- Manages offcanvas menu state
- Initializes AOS
- Initializes WOW.js
- Renders header, footer, breadcrumb, back-to-top, scroll indicator, WhatsApp button, contact toast, magnets

**Recommendation**: Extract animation initialization into a dedicated `useAnimations()` hook.

### 🟠 Data Layer:

Data files are well-organized in `util/`:
- `blog.json` — blog posts
- `services.json` — services
- `projects.json` — projects
- `testimonials.json` — testimonials
- `team.json` — team members

✅ This is good. However, **pricing data should follow the same pattern** instead of being hardcoded in component JSX (duplicated across 2 files).

### 🟡 Missing Error Boundaries:

No error boundary components exist. If any component throws during render, the entire page crashes with no graceful fallback.

---

## 9. SEO & Accessibility

### ✅ Strengths:

- Excellent structured metadata via `util/metadata.ts`
- JSON-LD structured data for blog posts and services
- Proper `<h1>` tags on pages
- Static generation with `generateStaticParams`
- Proper `notFound()` handling

### 🟡 Issues:

| Issue | Location | Detail |
|---|---|---|
| Multiple `<h1>` tags risk | Blog detail page | `<h1>` in content + breadcrumb title could conflict |
| Missing `alt` specificity | Various `<img>` tags | Many use generic "img" as alt text |
| `<a>` without `href` | `BackToTop.tsx`, `Header1.tsx` | `<a>` tags used as buttons without `href` or proper `role="button"` |
| Missing `aria-label` | Mobile menu toggle, offcanvas toggle | Hamburger menu buttons have no accessible label |

---

## 10. Prioritized Refactoring Roadmap

### 🔥 Phase 1: Quick Wins (Do Before Next Build) — Est. 1–2 hours

| # | Task | Impact | Effort |
|---|---|---|---|
| 1 | Delete dead components: `Preloader.tsx`, `ThemeSwitch.tsx`, `CircleComponent.tsx`, `ScheduleCallToast.tsx`, `Video.tsx`, `page.module.css` | Cleanliness | 5 min |
| 2 | Remove unused npm packages: `framer-motion`, `@lottiefiles/dotlottie-react`, `react-modal-video` | **~180 KB bundle savings** | 5 min |
| 3 | Remove unused CSS imports from `layout.tsx`: `select2.min.css`, `magnific-popup.css` | **23 KB CSS savings** | 2 min |
| 4 | Delete unused CSS files: `select2.min.css`, `magnific-popup.css`, `imageRevealHover.css` | Cleanliness | 2 min |
| 5 | Delete unused images (about5-1, about8-1, contact6-1, contact1-1.jpg, error-img.png, footer-bg-4.jpg, pinterest.svg, logomain.svg) | **~3.6 MB savings** | 5 min |
| 6 | Remove all `console.log` from `ProjectModal.tsx` | Performance | 5 min |
| 7 | Remove unused imports (`Link`, `Image`) from `ProjectModal.tsx` | Build warnings | 2 min |
| 8 | Fix `globals.css` — trim to only needed resets (or delete entirely since `default.css` handles resets) | Cleanliness | 5 min |
| 9 | Delete `style.css.map` or exclude from deployment | Security | 1 min |

### ⚡ Phase 2: Image Optimization (Biggest Performance Win) — Est. 2–3 hours

| # | Task | Impact | Effort |
|---|---|---|---|
| 10 | Convert all `.jpg`/`.png` images to WebP format | **~14 MB → ~3 MB** | 1 hr |
| 11 | Resize hero image to max 1200px wide | LCP improvement | 15 min |
| 12 | Add `loading="lazy"` to all non-above-fold images | Page speed | 30 min |
| 13 | Add explicit `width`/`height` to all `<img>` tags | CLS improvement | 1 hr |
| 14 | Consider using `next/image` with `unoptimized` prop for automatic lazy loading and dimension handling | Best practice | 1 hr |

### 🔧 Phase 3: Code Quality (Before Feature Development) — Est. 3–4 hours

| # | Task | Impact | Effort |
|---|---|---|---|
| 15 | Create `util/constants.ts` with site-wide config (phone, email, social links, company name) | Maintainability | 30 min |
| 16 | Replace all hardcoded contact info with constants | DRY, Maintainability | 1 hr |
| 17 | Fix `Footer1.tsx` social links to point to actual Atmosyn profiles | Credibility | 10 min |
| 18 | Add proper TypeScript interfaces (replace `any` types) in `BackToTop.tsx`, `Header1.tsx`, `Layout.tsx`, `ProjectModal.tsx` | Type safety | 30 min |
| 19 | Create `useScrollThreshold` custom hook, refactor scroll-based components | DRY | 30 min |
| 20 | Centralize blog image URL logic into `util/blogHelpers.ts` | DRY | 20 min |
| 21 | Extract pricing data into `util/pricing.json`, update both pricing components | DRY | 30 min |
| 22 | Fix `MagnetsComponent.tsx` event listener cleanup bug | Memory leak | 10 min |
| 23 | Fix `ContactToastButton.tsx` timeout cleanup | Memory leak | 10 min |
| 24 | Simplify `AddClassBody.tsx` — remove dead route conditions | Cleanliness | 5 min |

### 🏗️ Phase 4: Architecture (Long-term Scalability) — Est. 4–6 hours

| # | Task | Impact | Effort |
|---|---|---|---|
| 25 | Audit `style.css` for dead CSS rules (home-2 through home-8 styles, etc.) | ~50-100 KB CSS savings | 2 hr |
| 26 | Extract animation initialization from `Layout.tsx` into `useAnimations` hook | Separation of concerns | 1 hr |
| 27 | Add React Error Boundary wrapper | Robustness | 1 hr |
| 28 | Remove `.woff` and `.ttf` font files (keep only `.woff2`) | ~565 KB savings | 30 min |
| 29 | Review and slim down `animate.min.css` to only used animations | ~50 KB savings | 1 hr |
| 30 | Replace Isotope's `setTimeout(1000)` with proper initialization timing | Reliability | 30 min |

---

## Asset Size Summary

| Category | Current Size | After Optimization | Savings |
|---|---|---|---|
| Images (raster) | 34.3 MB | ~10 MB | ~24 MB |
| CSS files (unused + redundant) | ~26 KB | 0 | ~26 KB |
| Font files (redundant formats) | ~565 KB | 0 | ~565 KB |
| JS bundle (unused packages) | ~180 KB gzipped | 0 | ~180 KB |
| **Total estimated savings** | | | **~25 MB** |

---

## File Deletion Checklist

```
# Dead Components (safe to delete)
components/elements/Preloader.tsx
components/elements/ThemeSwitch.tsx
components/elements/CircleComponent.tsx
components/elements/ScheduleCallToast.tsx
components/sections/Video.tsx
app/page.module.css

# Dead Assets (safe to delete)
public/assets/img/others/about5-1.jpg
public/assets/img/others/about8-1.jpg
public/assets/img/others/contact6-1.jpg
public/assets/img/others/contact1-1.jpg
public/assets/img/others/error-img.png
public/assets/img/bg/footer-bg-4.jpg
public/assets/img/icon/pinterest.svg
public/assets/img/logo/logomain.svg

# Dead CSS Files (safe to delete)
public/assets/css/select2.min.css
public/assets/css/imageRevealHover.css
public/assets/css/style.css.map  (exclude from deployment at minimum)

# CSS imports to remove from app/layout.tsx
import "/public/assets/css/magnific-popup.css"   ← DELETE this line
import "/public/assets/css/select2.min.css"       ← DELETE this line

# After removing magnific-popup.css import from layout.tsx:
public/assets/css/magnific-popup.css              ← safe to delete

# npm packages to uninstall
npm uninstall framer-motion @lottiefiles/dotlottie-react react-modal-video
```
