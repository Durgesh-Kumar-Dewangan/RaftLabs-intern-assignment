# Next.js App Router Reference Code

This folder contains the Next.js App Router equivalent of the current React + Vite project.

## Structure

```
nextjs-reference/
├── app/
│   ├── layout.tsx          # Root layout (replaces App.tsx wrapper)
│   ├── page.tsx            # Home page (/)
│   ├── globals.css         # Global styles
│   ├── not-found.tsx       # 404 page
│   ├── apis/
│   │   └── page.tsx        # /apis route
│   ├── api/
│   │   └── [id]/
│   │       └── page.tsx    # /api/:id dynamic route
│   ├── categories/
│   │   └── page.tsx        # /categories route
│   └── category/
│       └── [slug]/
│           └── page.tsx    # /category/:slug dynamic route
└── README.md
```

## Key Differences from React + Vite

1. **File-based Routing**: Routes are defined by folder structure in `app/` directory
2. **`"use client"` Directive**: Required for components using React hooks, state, or browser APIs
3. **`next/link`**: Uses `href` instead of `to` prop
4. **`next/navigation`**: Uses `useParams()` from `next/navigation` instead of `react-router-dom`
5. **Layout System**: `layout.tsx` wraps all pages automatically
6. **Metadata**: Export `metadata` object for SEO instead of using react-helmet

## To Use This Code

1. Create a new Next.js project: `npx create-next-app@latest my-app`
2. Copy these files to your new project
3. Copy the `components/`, `data/`, `hooks/`, and `lib/` folders
4. Update imports to use `next/link` and `next/navigation`
5. Install dependencies: `framer-motion`, `lucide-react`, etc.

## Notes

- Components using `window` object need `"use client"` directive
- The current project's components can be reused with minor import changes
- Copy `tailwind.config.ts` and update paths for Next.js structure
