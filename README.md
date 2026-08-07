# Habitatt — Smart care. Anywhere.

A full multi-page React frontend for the Habitatt healthcare platform, built from the reference
brand image and spec. This is a **frontend-only** build — no real backend yet. Auth, appointments,
orders, etc. are all simulated with `localStorage` so every flow is fully clickable today.

## Run it in VS Code

1. Open this folder (`habitatt`) in VS Code.
2. Open a terminal (`` Ctrl+` ``) and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the printed URL (usually `http://localhost:5173`).

That's it — hot reload is on, so edits show up instantly.

## Where to edit things

| What you want to change | File(s) |
|---|---|
| Brand colors, fonts | `src/index.css` (the `@theme` block at the top) |
| Logo | `src/components/ui/Logo.tsx` |
| Navbar links | `src/components/layout/Navbar.tsx` |
| Footer | `src/components/layout/Footer.tsx` |
| Homepage sections | `src/components/home/*.tsx`, assembled in `src/pages/Home.tsx` |
| Doctors, medicines, testimonials, blog, FAQ content | `src/data/mockData.ts` |
| Any other page | `src/pages/*.tsx` (dashboard pages are in `src/pages/dashboard/`) |
| Routes / URLs | `src/routes/AppRoutes.tsx` |
| Buttons, cards, and other reusable UI | `src/components/ui/` |

## Project structure

```
src/
  components/
    layout/     Navbar, Footer, DashboardLayout, AuthLayout, MainLayout
    ui/         Button, Card, SectionHeading, Skeleton, StarRating, Logo
    home/       Homepage sections (Hero, Features, Testimonials, etc.)
  pages/        One file per route (About, Services, Doctors, Blog, etc.)
    auth/       Login, Register, ForgotPassword
    dashboard/  Patient/Doctor/Admin dashboard pages
  context/      AuthContext, ThemeContext (dark mode), CartContext
  services/     API layer — currently mocked, swap for real calls later
  data/         Mock content (doctors, medicines, testimonials, blog, FAQ)
  types/        Shared TypeScript types
  routes/       React Router route definitions
```

## What's real vs. mocked right now

- **Real & working:** every page, all navigation, forms with validation (React Hook Form + Zod),
  the AI Symptom Checker UI (rule-based mock logic), doctor search/filter, medicine cart & checkout,
  dark mode, responsive mobile menu, role-based dashboards (patient / doctor / admin).
- **Mocked (ready to swap):** login/register (stored in browser `localStorage`, see
  `src/services/authService.ts`), AI analysis (`src/services/aiService.ts`), doctor/medicine data
  (`src/data/mockData.ts`).

When you're ready for the backend, everything routes through `src/services/*.ts` — replace the
function bodies there with real `apiClient` calls (Axios instance already set up in
`src/services/apiClient.ts`) and the rest of the app doesn't need to change.

## Tech stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router · Framer Motion · React Hook Form + Zod
· Lucide Icons · Axios (wired, unused until backend exists)

## Next steps (when you're ready)

1. Design your database schema (users, doctors, appointments, medicines, orders).
2. Build the backend API (any stack you like — Node/Express, Django, Laravel, etc.).
3. Swap the mock functions in `src/services/` for real `apiClient` calls.
4. Replace `localStorage` auth with real JWT or Firebase Auth in `src/context/AuthContext.tsx`.
