# 🇰🇪 Kenya Children Assembly — Sauti Yako

**A modern, mobile-first digital platform for children's rights, participation and leadership.**

## Tech stack

- **Next.js App Router** — full-stack React framework
- **TypeScript** — typed application code
- **Tailwind CSS v4** — utility-first styling
- **shadcn/ui-style primitives** — accessible, composable UI foundation
- **Lucide React** — interface icons
- **Supabase** — PostgreSQL database, Auth and Storage foundation
- **Supabase SSR** — cookie-based authentication integration
- **PWA** — web manifest + offline-first service worker
- **GitHub Actions** — production build validation
- **Vercel-ready** — recommended deployment target for the Next.js application

Next.js App Router provides the foundation for a full-stack application, while Supabase provides Postgres, authentication and row-level authorization capabilities. citeturn0search4turn0search1

## Product areas

- 🏛️ Assembly information and participation
- 🧑🏾‍⚖️ Children's leadership and representation
- 📚 Rights education and resources
- 📣 Announcements and events
- 🛡️ Safety-oriented help/reporting experience
- 📱 Installable offline-capable PWA
- 🔐 Future authenticated admin and Assembly workflows

## Project structure

```text
app/                  Next.js routes, layout and global styles
components/           Reusable UI and navigation components
components/ui/        shadcn-style primitives
lib/supabase/         Browser + server Supabase clients
lib/                  Shared utilities
public/               PWA manifest, service worker and icons
supabase/schema.sql   Initial Postgres schema + RLS baseline
proxy.ts              Supabase session refresh proxy
```

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set these variables in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Supabase's current Next.js guidance uses TypeScript, Tailwind and cookie-based SSR authentication with `@supabase/ssr`. citeturn0search0turn0search9

## Database

Run `supabase/schema.sql` in a Supabase project to create the initial public content tables and Row Level Security baseline. Sensitive reports intentionally have **no public insert policy**. A real child-protection reporting workflow should add server-side validation, rate limiting, access control, auditability, data minimization and an approved safeguarding process before accepting sensitive reports.

## Deployment

The project is designed for Vercel deployment. Connect the GitHub repository to Vercel, add the Supabase environment variables, and deploy. GitHub Actions also validates production builds on pushes and pull requests.

## Important safety note

The reporting form in the current frontend is a **demo interface**. It does not transmit or claim to securely transmit sensitive reports.

## Project lead

**Vincent Odhiambo** — web developer and youth advocate.

> Every child deserves to be heard, respected and protected.
