# Personal Brand Upgrade Plan

Scope is large — I'll ship it in **4 focused batches** so each turn stays reviewable and credit-efficient. You can approve one at a time or all at once.

## Batch A — About page redesign (highest impact)
Rebuild `src/pages/UeberMich.tsx` as a premium storytelling experience using your uploaded portraits + workspace shots (already in `src/assets/portraits/`).

Sections (each with lucide icon, reveal-on-scroll, DE/EN i18n):
1. **Hero** — large portrait, eyebrow, warm intro line
2. **Who I Am** — short editorial paragraph + floating quote note
3. **My Journey** — animated vertical timeline (Learning Design → UX/UI → Frontend → SEO → Professional Projects → Today) with icons and animated connecting line
4. **My Design Philosophy** — 3 principle cards
5. **How I Work** — 4 method cards (structured, transparent, without complexity, long-term)
6. **What Makes Me Different** — glass cards (Individual Design, No Templates, SEO from start, Fast, Clean Code, Personal Support)
7. **My Values** — icon cards (Transparency, Quality, Creativity, Honesty, Reliability, Continuous Learning, Personal Communication, Long-Term Partnership)
8. **What Clients Can Expect** — client-result cards
9. **CTA band** — "Let's build something great together"

Editorial photo composition: overlapping frames, glass panels, soft shadows — reusing existing `frame-soft`, `card-soft`, `blob` utilities so it stays on-brand.

## Batch B — Contact + Stats + Testimonials polish
- **New `Contact` page** (route `/kontakt` and `/en/contact`, wired into `LanguageContext` and `Nav`): large portrait, friendly intro, email `mari1992.kuzmenko@gmail.com`, phone `+49 179 1111607`, response time, availability, existing inquiry form embed, premium CTA.
- **New `StatsSection` component** on homepage: animated counters with placeholder numbers (Projects, Clients, Years, Industries, Countries).
- **Testimonials refactor**: glass cards, large quotation glyph, 5-star row, reveal animations.

## Batch C — Pricing value framing
Rework `src/pages/Preise.tsx` so each package has: **Who it's for · Included · Timeline · Benefits · CTA** — elegant comparison cards, no visual redesign of the shell.

## Batch D — Homepage results + universal CTA polish
- Rewrite `ResultsSection` copy to client-outcome framing (More Trust, More Visibility, More Leads, Professional Image, Higher Rankings, Better UX, Fast Loading, Responsive).
- Ensure every page ends with a `ConversionCta` band using the new premium copy.
- Micro-copy sweep on buttons/labels across nav, sticky CTA, footer.

## Technical notes
- All new/edited files use existing design tokens (`text-rose`, `card-soft`, `frame-soft`, `display-lg`, `eyebrow`, `btn-cta`) — no new colors, no hardcoded hex.
- All new copy shipped bilingual via existing `pick(lang, de, en)` helper.
- Timeline + stats use IntersectionObserver via existing `useReveal` hook — no new deps.
- Contact route added to `ROUTES` map, `Nav.tsx`, `Footer.tsx`, and `scripts/generate-sitemap.ts`.
- No backend/schema changes; inquiry function already wired.

## Suggested order
Approve **Batch A** first (biggest visible lift). I'll ship it, you review, then I move to B → C → D. Or say "all four" and I'll chain them across turns.
