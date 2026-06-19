---
name: tailwind
description: Tailwind CSS utility-first framework skill. Provides instructions, API references, best practices, and code snippets for setting up, customizing tailwind.config.js, grouping and merging utility classes dynamically, and styling responsive interfaces.
---

# TAILWIND CSS SKILL

You are an expert frontend developer specialized in styling modern, fast, and responsive user interfaces using **Tailwind CSS**. Use this skill to write clean, semantic, and highly maintainable utility classes.

## CORE PRINCIPLES

1. **Strict Theme Expansion**: Avoid arbitrary values like `bg-[#F8B914]` or `w-[512px]`. Define design tokens in `tailwind.config.js` and use classnames like `bg-solar-gold` or `w-128` instead.
2. **Dynamic Class Merging**: When styling reusable React components, use `clsx` and `tailwind-merge` (typically combined into a `cn` helper function) to safely override and merge classes without conflicts.
3. **Mobile-First Responsive Design**: Always design for mobile screens first, then apply breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) to adapt layouts for tablets and desktops.
4. **Utility Grouping**: Keep utility class lists readable. Order them logically: Layout (display, positioning, grid/flex) -> Sizing -> Typography -> Colors/Borders -> Interactivity/Animations -> Responsive overrides.

---

## SETUP & INSTALLATION

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 1. CUSTOMIZING CONFIGURATION (`tailwind.config.js`)

Extend default values instead of overwriting them (unless intentionally replacing them).

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // BMC Custom Palette
        'solar-gold': {
          DEFAULT: '#F8B914',
          hover: '#FDD878',
          active: '#E8A010',
        },
        'earth-brown': '#644519',
        'deep-brown': '#3D2900',
        'cream-base': '#FFF8E1',
      },
      fontFamily: {
        heading: ['Arial Black', 'sans-serif'],
        body: ['Calibri', 'sans-serif'],
      },
      letterSpacing: {
        'ruler': '-0.04em', // BMC gold ratio kerning
      }
    },
  },
  plugins: [],
}
```

---

## 2. DYNAMIC CLASS MERGING (`cn` Helper)

Use this helper to merge Tailwind CSS classes cleanly in React components:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Component Usage:
```tsx
import React from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 font-body rounded transition-all duration-200 focus:outline-none focus:ring-2",
        variant === "primary" && "bg-solar-gold text-deep-brown hover:bg-solar-gold-hover",
        variant === "secondary" && "bg-deep-brown text-white hover:bg-opacity-90",
        className // Allow external overrides safely
      )}
      {...props}
    />
  );
}
```

---

## 3. RESPONSIVE & INTERACTIVE STATES

Combine interactive modifiers and breakpoints correctly:

```tsx
<div className="p-4 md:p-8 bg-cream-base text-deep-brown rounded border border-earth-brown transition-transform hover:scale-105 active:scale-95 duration-200">
  <h2 className="font-heading text-lg md:text-2xl tracking-ruler">Responsive Bento Card</h2>
  <p className="mt-2 font-body text-sm md:text-base opacity-90">
    This component scales and changes its padding on medium viewports, and has scale transitions on hover.
  </p>
</div>
```

---

## 4. BROWSER PREVIEW / TAILWIND VERSION RECOGNISE

*   **Tailwind CSS v3**: Uses `tailwind.config.js` for configurations. Core classes are loaded via `@tailwind base; @tailwind components; @tailwind utilities;` in CSS.
*   **Tailwind CSS v4**: Configurations are done directly inside the CSS file using the `@theme` directive, e.g., `@theme { --color-solar-gold: #F8B914; }`, and imported via `@import "tailwindcss";`.
