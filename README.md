# KAMAO Mining Company Limited Website

A production-quality, frontend-only corporate website for KAMAO Mining Company Limited, a mining company operating in the Democratic Republic of the Congo.

## Stack

- Next.js 16.2
- React 19
- TypeScript (strict mode)
- Tailwind CSS 3.4
- App Router
- Static export
- Lucide icons
- Motion (Framer Motion successor)

## Getting started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

The static export is written to the `dist/` directory.

### Lint and type check

```bash
npm run lint
npm run typecheck
```

### Format code

```bash
npm run format
```

## Deployment

The project is configured for static export (`output: "export"`).

1. Build the site: `npm run build`
2. Deploy the contents of the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, AWS S3, etc.).
3. Ensure the host serves `index.html` for directory routes because `trailingSlash: true` is enabled.

## Project structure

```text
src/
  app/                  # Next.js App Router pages
  components/           # React components
    layout/             # Header, Footer, Logo, PageHero
    home/               # Homepage sections
    ui/                 # Reusable UI primitives
    forms/              # Form fields
    contact/            # Contact form and details
  content/              # Typed content files
  lib/                  # Utilities, metadata, structured data, i18n
public/                 # Static assets (images, logo, favicon, hero video)
```

## Content editing

### Update contact information

Edit `src/content/company.ts`.

### Replace images

Add new files to `public/` and update the relevant path in the content file or component. The site supports WebP, AVIF, JPG and PNG.

### Replace the temporary logo

1. Replace `/public/Kamao-Logo.png` and `/public/Kamo-Favicon.png` with final approved artwork.
2. Update `src/content/company.ts` if dimensions or file names change.
3. The `Logo` and `LogoFull` components in `src/components/layout/Logo.tsx` are isolated and can be updated without changing the header layout.

### Add a mineral

1. Add the mineral object to the `minerals` array in `src/content/minerals.ts`.
2. Provide English and French translations for name, short statement, applications, page heading and page copy.
3. Add an image to `public/` and reference it in the mineral object.
4. Add related mineral slugs.

### Add a blog article

1. Add an article object to the `blogArticles` array in `src/content/blog.ts`.
2. Provide all required fields: slug, category, title, excerpt, author, dates, reading time, hero image, SEO title, meta description, content sections, related articles and references.
3. Provide both English and French content.
4. Add the hero image to `public/`.

### Add a verified project

1. Add a project object to the `projects` array in `src/content/projects.ts`.
2. Set `verified: true` and `published: true`.
3. Provide English and French content.
4. Add project images to `public/`.
5. The Projects link in the navigation can be re-enabled in `src/content/navigation.ts` once projects are published.

### Configure the contact form

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://your-form-endpoint.com/submit
NEXT_PUBLIC_CONTACT_EMAIL=info@kamaomining.com
```

If `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` is not set, the form falls back to opening the visitor's email client with a pre-filled message.

### Add another language

1. Create a new dictionary file in `src/content/translations/` (e.g., `sw.ts` for Kiswahili).
2. Export a const with the same shape as `en.ts`.
3. Add the language to the `Language` union and `dictionaries` map in `src/lib/i18n.tsx`.
4. Create a route group layout (e.g., `src/app/sw/layout.tsx`) and corresponding pages.
5. Update the language switcher in `src/components/layout/Header.tsx` to include the new language.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | Third-party form endpoint (optional) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Fallback contact email (defaults to `info@kamaomining.com`) |

## Content verification

See `CLIENT_CONTENT_REQUIRED.md` for the full list of information that must be verified by the client before publication.

## License

© KAMAO Mining Company Limited. All rights reserved.
