

## Regenerate Painting Companies Images as WebP

The document specifies regenerating all 12 painting company images in `.webp` format with detailed photorealistic scene descriptions, matching the quality of the tree-lawn-landscaping assets.

### What Changes

1. **Generate 12 images** using the AI image generation API (Nano banana 2 for speed + quality), saving each as `.webp` to `src/assets/painting-companies/`:

| # | Filename | Dimensions | Scene |
|---|----------|-----------|-------|
| 01 | painting-hero.webp | 1920x1080 | Professional crew painting exterior of large suburban home, branded uniforms, ladders, bright daylight |
| 02 | painting-website-screenshot.webp | 1200x800 | MacBook + iPhone mockup of painting contractor website with before/after gallery, CTA, reviews |
| 03 | residential-interior-seo.webp | 800x600 | Painter applying paint to living room accent wall, roller, drop cloth, warm light |
| 04 | residential-exterior-seo.webp | 800x600 | Freshly painted two-story suburban home, painter on ladder, white/gray siding, blue sky |
| 05 | commercial-painting-seo.webp | 800x600 | Crew on scaffolding painting 3-4 story apartment/commercial building |
| 06 | spring-exterior-painting.webp | 900x600 | Spring neighborhood, freshly painted house, blooming trees, neighbors admiring |
| 07 | fall-interior-painting.webp | 900x600 | Freshly painted living room in warm greige tones, cozy autumn light |
| 08 | commercial-painting-ad.webp | 900x600 | HOA property manager in front of freshly painted apartment complex |
| 09 | residential-painting.webp | 900x600 | Two-person crew painting suburban home exterior, company van visible |
| 10 | new-construction-painting.webp | 900x600 | Painter applying primer to fresh drywall in new construction |
| 11 | ai-receptionist-painting.webp | 800x900 | Digital composite: floating phone icons, AI "Lead Captured" overlay, painter at work |
| 12 | ai-website-chat-painting.webp | 1200x800 | Monitor showing painting website with live chat widget, iPhone with SMS notification |

2. **Delete old `.jpg` files** from `src/assets/painting-companies/`

3. **Update `config.ts` imports** to reference `.webp` extensions instead of `.jpg`

### Technical Details
- Uses `google/gemini-3.1-flash-image-preview` model for fast, high-quality generation
- Images saved as WebP via base64 decode and ImageMagick conversion
- Config import paths updated from `.jpg` to `.webp` across all 12 references

