# Image Replacement Guide

All images, the logo, the favicon and the hero background video live in the `public/` folder. The site is configured for static export, so assets must be local.

## Supported formats

- WebP (recommended)
- AVIF (recommended where supported)
- JPG / JPEG
- PNG
- MP4 for video

## Image sizes and compression

- Keep file sizes reasonable (aim for hero images under 300 KB, content images under 150 KB).
- Use responsive widths. The site does not generate multiple sizes automatically.
- Provide a fallback poster image for any hero video.

## Assets to replace before launch

| File / location | Used on | Notes |
| --- | --- | --- |
| `public/Kamao-Logo.png` | Header, footer | Horizontal logo lockup |
| `public/Kamo-Favicon.png` | Browser tab | Favicon, replace with final `.png` or multi-size `.ico` |
| `public/hero-video.mp4` | Homepage hero | Muted, looped background video; must have a static fallback |
| `public/open-pit-panorama.jpg` | Hero fallback, Open Graph | Wide panoramic landscape, 16:9 or wider |
| `public/aerial-crushing-operation.jpg` | Operations page | Industrial processing / crushing equipment |
| `public/mountain-mining-truck.jpg` | Contact page | Mining truck in rugged landscape |
| `public/about-geologist.jpg` | About page | Optional: geologist / field team image |
| `public/mineral-*.jpg` or `*.webp` | Minerals page and detail pages | One image per mineral |
| `public/insight-*.jpg` or `*.webp` | Blog article cards and hero | One hero image per article |

## How to replace an image

1. Add the new file to `public/`, keeping a clear file name.
2. Update the relevant content file or component path:
   - Minerals: edit `src/content/minerals.ts` and set `image` to the new path.
   - Blog articles: edit `src/content/blog.ts` and set `heroImage`.
   - Company-wide assets: edit `src/content/company.ts`.
   - Page-specific images: edit the component or page file.
3. Delete or archive the old file if it is no longer used.
4. Run `npm run build` to confirm the site exports without missing-asset errors.

## Accessibility and safety

- Provide descriptive `alt` text in the content file or component for every image.
- Do not use unsafe or exploitative images of children, uncontrolled artisanal mining, or workers without protective equipment as decorative marketing content.
- Do not present stock models as KAMAO Mining employees.
- Only label a photograph as a KAMAO Mining operation if it was taken at a verified company site.

## Hero video

The homepage hero attempts to autoplay a muted video on desktop and falls back to a static image on mobile or when reduced motion is preferred.

- Replace `public/hero-video.mp4` with the final video.
- Ensure the file is optimised, muted and loop-friendly.
- Update the fallback image path in `src/content/company.ts` (`heroFallbackImage`).

## Logo replacement

1. Replace `public/Kamao-Logo.png` and `public/Kamo-Favicon.png` with final approved artwork.
2. If the logo file name or dimensions change, update `src/content/company.ts`.
3. Update `src/components/layout/Logo.tsx` if the mark-up needs to change (the component is isolated from the header layout).
