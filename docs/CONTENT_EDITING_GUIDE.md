# Content Editing Guide

All public-facing content is stored in typed files under `src/content/` and `src/content/translations/`. This keeps text, images and navigation data separate from components so it can be updated without touching React code.

## Where content lives

| Content | File |
| --- | --- |
| Company name, contact details, hero assets | `src/content/company.ts` |
| Navigation links | `src/content/navigation.ts` |
| Mineral portfolio | `src/content/minerals.ts` |
| Projects | `src/content/projects.ts` |
| Blog / insights articles | `src/content/blog.ts` |
| English UI text | `src/content/translations/en.ts` |
| French UI text | `src/content/translations/fr.ts` |

## Update contact information

Edit `src/content/company.ts`:

```ts
export const company = {
  name: "KAMAO Mining Company Limited",
  brandName: "KAMAO Mining",
  tagline: "Resources for a Connected World.",
  email: "info@kamaomining.com",
  drcPhone: "+243 901 458 771",
  regionalPhone: "+255 693 698 221",
  // ...
};
```

The header, footer, contact page and contact form all read from this object.

## Add a mineral

1. Open `src/content/minerals.ts`.
2. Add a new object to the `minerals` array with English and French values for:
   - `name`, `slug`, `shortStatement`, `applications`, `pageHeading`, `pageCopy`, `imageAlt`
3. Add the mineral image to `public/` and reference it in `image`.
4. Add related mineral slugs to `related`.
5. Add the mineral to the mineral portfolio on the homepage automatically (the home section reads the same `minerals` array).

## Add a blog article

1. Open `src/content/blog.ts`.
2. Add an article object to `blogArticles` with:
   - `slug`, `category`, `title`, `excerpt`, `author`
   - `publishedAt`, `updatedAt`, `readingTime`
   - `heroImage`, `imageAlt`
   - `seoTitle`, `metaDescription`
   - `content` as an array of `{ heading?, paragraphs: string[] }`
   - `references` (array of citation strings)
   - `related` (array of related article slugs)
3. Provide both English and French translations.
4. Add the hero image to `public/`.

The article will appear on `/insights/` and `/fr/actualites/` automatically.

## Add a verified project

1. Open `src/content/projects.ts`.
2. Add a project object to the `projects` array.
3. Set `verified: true` and `published: true` for it to appear on the site.
4. Provide English and French values for `name`, `overview`, and any optional fields.
5. Add project images to `public/`.
6. Re-enable the Projects link in `src/content/navigation.ts` if desired.

**Do not set `verified: true` until the client has supplied and approved the project information.**

## Update text in the UI

Most labels, headings and button text come from the dictionaries:

- English: `src/content/translations/en.ts`
- French: `src/content/translations/fr.ts`

Keep the two dictionaries in sync. Add the same key to both files when introducing new UI text.

## Add a language

1. Create a new dictionary file in `src/content/translations/` (e.g., `sw.ts` for Kiswahili) with the same shape as `en.ts`.
2. Add the language to the `Language` union and the `dictionaries` map in `src/lib/i18n.tsx`.
3. Create French-style routes for the new language (e.g., `src/app/sw/...`).
4. Update `src/content/navigation.ts` to include the new language's route map.
5. Update the language switcher in `src/components/layout/Header.tsx`.

## Configure the contact form

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://your-form-endpoint.com/submit
NEXT_PUBLIC_CONTACT_EMAIL=info@kamaomining.com
```

If `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` is empty, the form will open the visitor's email client with a pre-filled message.

## Before publishing

- Run `npm run typecheck` to catch missing dictionary keys or type mismatches.
- Run `npm run lint` to catch style issues.
- Run `npm run build` to verify the static export succeeds.
- Check `CLIENT_CONTENT_REQUIRED.md` for any missing verified information.
