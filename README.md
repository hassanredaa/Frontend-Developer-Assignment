# TechniDox Figma Homepage Assignment

Nuxt 3 + Vue 3 + TailwindCSS implementation for the provided Figma home page design.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Hosted URL

https://endearing-sopapillas-13c10b.netlify.app/

## Netlify Deployment

Use the included `netlify.toml` settings:

- Build command: `npm run generate`
- Publish directory: `.output/public`
- Base directory: leave empty if this project is the repository root

If deploying manually with drag-and-drop, run `npm run generate` locally and upload the `.output/public` folder, not the full source folder.

## Figma

- Desktop frame: https://www.figma.com/design/OHeO2r3Qp4kDJP36kjpAgC/Website-v0.0?node-id=1-3&p=f&t=LkChpIP0O7csXOjO-0
- Mobile frame: https://www.figma.com/design/OHeO2r3Qp4kDJP36kjpAgC/Website-v0.0?node-id=1-4&p=f&t=LkChpIP0O7csXOjO-0

## Pixelay Evidence

- `pixelay/pixelay-desktop.png`
- `pixelay/pixelay-mobile.png`
- `pixelay/notes.md`

## Notes

- Implemented the homepage in Nuxt 3, Vue 3, and TailwindCSS with modular Vue components.
- Includes a responsive mobile menu, quick-start carousel interaction, anchor navigation, focus-visible states, and CSS animations with reduced-motion support.
- Matched the attached Figma screenshots for the light grid hero, feature cards, overview, docs, comparison table, blended pricing, ROI panel, team/community sections, CTA, and footer.
- Figma MCP access worked for metadata, but the Education plan tool-call limit was reached before detailed design context and asset export could be fetched.
- Pixelay CLI/extension is not available in this shell, so `/pixelay` currently contains desktop and mobile browser captures plus notes. Replace them with true Pixelay overlays before final submission if required by the reviewer.
