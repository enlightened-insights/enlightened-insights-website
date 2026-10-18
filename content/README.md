# Website content

Everything you'd want to edit by hand lives in this folder, as plain HTML (or Markdown with HTML inside, for blog posts). Edit the file, save, and the page updates.

## What lives where

| On the site | File |
|---|---|
| Homepage: headline, intro, buttons | [`home/01-hero.html`](home/01-hero.html) |
| Homepage: "What is Enlightened Insights?" | [`home/02-about.html`](home/02-about.html) |
| Homepage: services (featured card + six cards) | [`home/03-services.html`](home/03-services.html) |
| Homepage: testimonials | [`home/04-testimonials.html`](home/04-testimonials.html) |
| Homepage: frequently asked questions | [`home/05-faq.html`](home/05-faq.html) |
| Homepage: "Book A Consultation" text (left of the form) | [`home/06-contact.html`](home/06-contact.html) |
| Blog posts | [`blog/`](blog/), one `.md` file per post |

Still in code (ask for help, or edit carefully):

- **Contact form:** the form itself and its "What do you need help with?" options are in `src/types/contact.ts`.
- **Navigation and footer:** `src/components/layout/Navbar.tsx` and `Footer.tsx`.
- **Search-engine details:**
  - The homepage meta description and the business summary used in search data are in `src/lib/site.ts`.
  - Keep `SITE_SUMMARY` there in step with the first paragraph of `home/02-about.html`.
- **Privacy policy and terms:** `src/app/privacy-policy/page.tsx` and `src/app/terms-of-service/page.tsx`.

## Editing in the browser (sandbox)

1. Open **https://github.dev/enlightened-insights/enlightened-insights-website**, or press `.` on any page of the repo on github.com. This opens a full editor in your browser, with a file tree on the left and search (`Cmd+Shift+F`) across every page.
2. Edit the files in `content/`.
3. In the **Source Control** tab (the branch icon on the left), write a short message.
4. Choose **Commit & Push** to a **new branch**, so the live site isn't touched.
5. Open a pull request for that branch on GitHub. Vercel posts a **preview link** on it within a couple of minutes.
6. Happy with the preview? **Merge** the pull request and it goes live.

Committing straight to `main` publishes immediately with no preview, so use a branch for anything bigger than a typo.

## Editing on your Mac

1. Open the `EI Website` folder in VS Code.
2. Run `npm run dev -- -p 3100` and open http://localhost:3100.
3. Save a file in `content/` and refresh the browser to see the change.

## Rules that keep things working

- **Keep the `id` on each `<section>`** (`id="services"`, `id="contact"`, and so on). The menu links jump to them.
- **FAQ format:** each question is an `<h3>` followed by one `<p>` answer. Search engines get the FAQ in that exact shape. Add or remove questions freely, but keep the pairing.
- **Styling:** the `class="..."` values are [Tailwind](https://tailwindcss.com/docs) classes and work anywhere in these files. Copy them from an element you like.
  - Site colours: `text-primary`, `bg-surface-container`, `text-on-surface-muted`, `border-primary`.
- **Close every tag** you open.
- **Placeholders:** `<!-- like this -->` is invisible on the page. Use it for notes to yourself. For a placeholder you *want* to see while drafting, use the visible box below and delete it before publishing.

## Snippets

Callout box:

```html
<div class="my-8 p-6 rounded-lg bg-surface-container border-l-2 border-primary">
  <p class="font-bold text-on-surface mb-2">Heads up</p>
  <p class="text-on-surface-muted">Your text here.</p>
</div>
```

Visible placeholder (delete before publishing):

```html
<div class="my-6 p-6 rounded-lg border-2 border-dashed border-primary/40 bg-primary/5 text-primary">
  PLACEHOLDER: what goes here
</div>
```

Button-style link:

```html
<a href="/#contact" class="inline-block bg-primary-container text-on-primary-container px-7 py-3.5 rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-all">Book a call</a>
```

## Blog posts

Each post in `blog/` starts with settings between `---` lines, followed by the post body in HTML:

- `title`, `date`, `updated` and `excerpt` (the summary under the title, also used by search engines)
- `faq`: the question-and-answer pairs search engines see. Keep them matching the FAQ shown in the post.
- `ctaHeading` and `ctaService` (optional): the sticky bar's text, and which contact-form option it pre-selects. Options are `ai-search`, `marketing` and `ai-automation`.

The post's web address comes from its file name: `blog/server-side-tracking.md` is `/blog/server-side-tracking`. Renaming a file changes the address, so avoid that once a post is live.
