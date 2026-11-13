# NeLam portfolio

Personal portfolio for Nguyễn Lê Hoài Nam: frontend development, design, open-source projects and creative interests.

## Run locally

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5174/. Build with `npm run build`, then serve the generated `dist/` directory. Nothing is deployed automatically.

## Update content

- `src/portfolio.js`: page composition and interactions.
- `src/portfolio.css`: current visual system and responsive layouts.
- `src/content.js`: Vietnamese/English page copy.
- `src/cv-data.js`: project case studies, education, skills and awards.
- `src/profile.js`: CV path and contact destinations.
- `src/portfolio-studio.js`: procedural Three.js workspace with scroll/pointer motion, offscreen pause and cleanup.
- `public/cv.pdf`: downloadable CV.
- `public/images/`: portrait and owner-supplied project banners.

The current projects are Signet and DaNang EcoWarning. Project details include the frontend contribution, team technology stack, outcomes, lessons and repository links. Native disclosure controls support mouse and keyboard. Zalo, TopCV and Upwork remain pending.

Language and theme preferences persist locally. The page supports reduced motion, responsive layouts, visible keyboard focus, and mailto/tel links. Typography loads from Google Fonts with local fallbacks.

## Archived layouts

Historical concepts remain at `/concepts/`; `/previous.html` and `layout-before-redesign.html` preserve earlier implementations. They do not define the current homepage.

## Repository history

The existing implementation was imported in 14 logical commits. At the owner's request, their author and committer dates were evenly redistributed between repository creation on 12 November 2026 and 13 November 2026 (Asia/Saigon, UTC+07:00). These reconstructed dates do not represent the original development times. The initial repository commit was preserved.
