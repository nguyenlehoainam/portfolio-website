---
name: NeLam
description: Warm editorial personal archive
colors:
  paper: "#f4f0e7"
  white: "#fffdf7"
  ink: "#332f28"
  muted: "#716757"
  wheat: "#e3d5b9"
  light-wheat: "#ece5d6"
  coffee: "#554630"
  night: "#302b24"
  on-dark: "#f7f0e2"
  dark-paper: "#24231f"
  dark-white: "#302e27"
  dark-ink: "#f1e9da"
  dark-muted: "#beb29c"
  dark-wheat: "#4b4334"
  dark-light-wheat: "#353127"
  dark-coffee: "#d7c29b"
  dark-night: "#191813"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(85px, 9vw, 132px)"
    fontWeight: 500
    lineHeight: 0.97
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(36px, 4vw, 58px)"
    fontWeight: 500
    lineHeight: 1.16
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "29px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
  discipline:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.035em"
rounded:
  square: "0px"
spacing:
  inset: "20px"
  group: "30px"
  spread: "60px"
  section: "88px"
components:
  button-primary:
    backgroundColor: "{colors.coffee}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "14px 20px"
  button-quiet:
    padding: "10px 0"
  paper-container:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "32px"
---

# Design System: NeLam

## Overview

**Creative North Star: "Warm editorial personal archive"**

A creative dossier with the tactile calm of paper, photographic keepsakes and handwritten marginal notes. Large serif names and headings establish authorship; precise Vietnamese sans-serif text makes the archive readable and approachable.

Bounded grids and a few consolidated surfaces organize content. A dimensional workspace is an authored artifact with computer, camera and design sheet. The independent homepage CSS is the authority; historical scrapbook and concept pages are not the current system.

**Key Characteristics:**
- Ivory paper, wheat layers and coffee emphasis.
- Editorial serif scale with Vietnamese sans-serif clarity.
- Consolidated rectangular surfaces and restrained paper rotation.
- Natural linear scrolling and accessible controls.

## Colors

Warm low-saturation neutrals create hierarchy through value and material.

### Primary
- **Coffee:** actions, focus, SVG line icons and handwritten emphasis.

### Neutral
- **Paper / warm white:** page ground and consolidated reading surfaces.
- **Ink / muted:** primary reading and secondary descriptions.
- **Wheat / light wheat:** workspace backing, interest grouping and project chapter.
- **Night / on dark:** leadership emphasis and the contact close.
- **Dark-prefixed tokens:** theme substitutions for corresponding light roles; on-dark remains unchanged. Procedural artwork retains warm material colors independently.

**The Material Hierarchy Rule.** Group related content with tonal surfaces before adding another enclosing panel.

## Typography

**Display Font:** Playfair Display, Georgia, serif.
**Body Font:** Be Vietnam Pro, sans-serif.

Literary headings pair with compact functional reading. Italic display type supplies handwriting-like notes without a third family.

### Hierarchy
- **Display:** frontmatter name scale; medium (100px), mobile (clamp(80px, 20vw, 108px)).
- **Headline:** frontmatter chapter scale; mobile chapter headings (36px), contact heading (47px).
- **Title:** default frontmatter scale; work titles (32px), medium (29px), mobile (30px).
- **Body:** frontmatter base; narrative line height (1.8–1.85), hero introduction maximum (46ch), biography story (61ch).
- **Discipline:** all four titles use the same semibold frontmatter role; descriptions (12px).
- **Supporting text:** navigation (13px), mobile (12px); factual captions and disclosures (10–12px). These are metadata, not a decorative eyebrow system.

**The Authored Voice Rule.** Use serif and italic emphasis for headings, signatures and marginal notes; keep factual reading and actions in sans-serif.

## Layout

Centered container maximum (1344px), width (100% - 96px); section padding (88px) vertically. Hero grid (1fr 1.05fr), horizontal gap (60px). Section headings pair title and introduction. Biography grid (.78fr 1.22fr), gap (50px), padding (32px). Work has two columns and a full-width featured split (1.1fr 1fr), followed by two smaller studies. Leadership and contact use two columns.

At (1100px) and below: container subtraction (64px), sections (65px), discipline and secondary club roles become single columns. At (760px) and below: container subtraction (40px), sections (52px); navigation wraps to a full second row; hero, headings, biography, work, leadership and contact stack in semantic order. Biography padding (23px), work padding (25px), large marginal note hidden. No custom scrolling or horizontal carousel.

Canvas height (320px), medium (290px), mobile (270px), and (350px) at widths of (1600px) and above. Portrait aspect ratio is desktop (4 / 4.5), mobile (1.1). Portrait pixels remain unchanged; CSS crop uses object-position (50% 68%), scale (1.24) and origin (50% 60%).

## Elevation & Depth

DOM surfaces use tonal layering and overlap without CSS box shadows. Workspace card rotation (1deg), photograph (-2deg), paper tab (8deg). A translucent tape strip anchors the portrait. Physical soft shadows belong inside the procedural workspace.

Entrances use (cubic-bezier(.16,1,.3,1)) over (0.7–1s). Controls transition over (0.2–0.3s); primary hover lifts (-3px), SVG arrows shift (2px, -2px). The studio responds subtly to pointer and scroll. Reduced motion disables CSS animation, transitions and smooth scrolling; studio rotation is fixed and bobbing stops.

**The Artifact Depth Rule.** Concentrate dimensionality in authored artifacts; keep reading surfaces calm and flat.

## Shapes

Content surfaces and actions use square corners. Circular dots indicate availability. Inline SVG strokes, tape and a paper tab supply detail. Project typographic symbols are artwork content rather than interface icons.

## Components

### Buttons

Compact rectangular actions use coffee and paper, minimum height (49px), gap (24px); mobile padding (13px 17px). Quiet actions are underlined at offset (6px). The contact action uses light wheat on night. Links, buttons and summaries receive a coffee focus outline (3px) offset (5px).

### Cards / Containers

One warm-white biography spread contains photograph and disciplines; interests share a light-wheat inset. Each work study combines artwork and copy in a single surface. The leadership record combines a night president panel, secondary roles and wheat disclosure. Flat tonal surfaces carry grouping, without arbitrary shadows or rounded-card presets.

### Navigation

Sans-serif links receive a left-origin hover underline over (0.25s). Language/theme buttons have minimum size (40px by 44px); choices persist locally. Header stays in document flow and navigation wraps on mobile.

### Disclosures and feedback

Native details/summary exposes pending study and milestone information. A fixed live status message reports unavailable CV content for (4s) and is hidden when inactive. The reading-progress line is (3px) high and ignores pointer input.

### Authored artifacts

The substantial procedural workspace depicts computer, camera and design sheet. The owner photo uses CSS framing. Project artwork is a CSS typography study with a visible illustrative disclosure immediately below its heading; it is not product evidence. The page has no form inputs or filter chips.

## Do's and Don'ts

### Do:
- Do consolidate related content on tonal paper surfaces.
- Do keep equal title emphasis across all four disciplines.
- Do preserve focus, native disclosures and reduced-motion behavior.
- Do preserve portrait pixels and label illustrative project art.

### Don't:
- Don't restore peach, olive or burgundy dominance.
- Don't inherit discarded scrapbook layouts or overrides.
- Don't turn each role or paragraph into a separate colored card.
- Don't invent credentials, achievement badges or project screenshots.
- Don't promote decorative kickers, glyph icons or hard offset shadows into reusable patterns.


## CV content integration — 2026-11-13
The current visual system is preserved. Two real project case-study cards replace three empty studies; both use the existing featured-card composition, true project dates, frontend role, team-stack label, source link and expandable contribution/result/lesson sections. Covers are explicitly presentation artwork. A shared skills surface extends the biography with frontend, Adobe design tools and AI workflow groups. Education and location appear in the biography. Confirmed HIT roles and three dated awards replace placeholders; awards are visible by default. Actual unchanged PDF is downloadable at /cv.pdf and viewable in a new tab. Verified live download hash matches supplied original, both locales, dark mode and 390/768/1840px overflow.

## Project banners and disclosure affordance
Owner supplied E:/innovation/signet-banner.png (2172×724) and E:/innovation/banner.svg (1600×540, EcoWarning). Copied unchanged into public/images/projects/. Project cards now present full-width banners at intrinsic aspect ratio with no crop, followed by a two-column intro/overview that stacks on mobile. Removed the previous typographic placeholder covers and their disclaimer. Native details/summary now has a large padded full-width disclosure, explicit View details/Show less label, helper copy, authored chevron, hover/focus treatment and open-state feedback in both languages. Expanded contribution/result/lesson text is arranged in readable labeled rows, stacked on mobile. Passed actual image-load/aspect checks, keyboard Enter open, pointer close, VI/EN, dark mode and overflow checks at320/390/768/1440. Source banners remain pixel/vector-identical to owner's originals; no generative image edits performed.

## Secondary leadership typography
Preserved the community composition and President feature. The two secondary roles now use full-width stacked records, bold 23px Be Vietnam Pro titles, a separate 2025–2026 period and readable 13px full-ink descriptions. Periods move below titles on mobile. This avoids thin serif titles squeezed into two narrow columns; no new colored cards or interactions added. Reviewed desktop, mobile and English dark renders, with no browser errors or mobile overflow; build passes.
