---
name: motion
description: Motion for React (formerly Framer Motion) animation skill. Provides instructions, API references, best practices, and code snippets for creating premium 120fps hardware-accelerated fluid UI animations, transitions, gestures, and scroll effects.
---

# MOTION FOR REACT SKILL (FRAMER MOTION)

You are an expert React animation engineer and motion designer. Use this skill to implement professional, fluid, and high-performance animations in React using `motion` (formerly Framer Motion).

## CORE PRINCIPLES

1. **Fluidity & Performance**: Use spring-based animations for physical movement (x, y, scale, rotate) to feel natural. Use tween/easing for visual-only transitions (opacity, colors).
2. **Hardware Acceleration**: Animate transform properties (`x`, `y`, `scale`, `rotate`, `skew`) and `opacity` rather than height, width, top, left, margins, or padding. This prevents layout reflows and keeps animations at 120fps.
3. **Declarative First**: Prefer prop-based declarative animations using `<motion.div>` and variants. Use imperative controls (`useAnimate()`) only for complex multi-element sequences or external events.
4. **Layout Animations**: Leverage Framer Motion's automatic layout transition layout engine via the `layout` prop.

---

## INSTALLATION & IMPORT

```bash
npm install motion
```

Always import components and utilities from `"motion/react"`:
```typescript
import { motion, AnimatePresence, useScroll, useTransform, useAnimate } from "motion/react";
```

---

## 1. THE `<motion>` COMPONENT

Prefix any HTML/SVG element with `motion.` (e.g., `<motion.div>`, `<motion.button>`, `<motion.path>`).

### Basic Animation Props
*   **`initial`**: Starting state (or `false` to disable mount animation).
*   **`animate`**: Target state. Motion transitions automatically when values change.
*   **`transition`**: Controls how properties animate (spring, duration, ease, delay, repeat).

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.9, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 15,
    mass: 1
  }}
/>
```

---

## 2. GESTURES & INTERACTION

Framer Motion provides custom gesture handlers that work reliably on both mouse and touch devices.

### Hover, Tap, and Focus
```tsx
<motion.button
  whileHover={{ scale: 1.05, backgroundColor: "#F8B914" }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300, damping: 10 }}
>
  Click Me
</motion.button>
```

### Dragging
```tsx
<motion.div
  drag
  dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
  dragElastic={0.1}
  whileDrag={{ scale: 1.1, cursor: "grabbing" }}
/>
```

---

## 3. ORCHESTRATION & VARIANTS

Variants allow you to define animation states as objects and orchestrate parent-child animations cleanly.

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

function List() {
  return (
    <motion.ul variants={containerVariants} initial="hidden" animate="visible">
      <motion.li variants={itemVariants}>Item 1</motion.li>
      <motion.li variants={itemVariants}>Item 2</motion.li>
      <motion.li variants={itemVariants}>Item 3</motion.li>
    </motion.ul>
  );
}
```

---

## 4. ENTER & EXIT ANIMATIONS (`<AnimatePresence>`)

Allows elements to animate out when they are removed from the React component tree.

> [!IMPORTANT]
> Children of `<AnimatePresence>` MUST have a unique `key` prop so React can track which component is exiting.

```tsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function ToggleBox() {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
```

---

## 5. SCROLL-LINKED & SCROLL-TRIGGERED ANIMATIONS

### Scroll-Triggered (Reveal on Scroll)
Use `viewport` and `whileInView` to animate elements when they enter the screen.

```tsx
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
/>
```

### Scroll-Linked (Parallax & Progress Bars)
Use the `useScroll` hook to read scroll progress and mapping functions like `useTransform` to bind properties to it.

```tsx
import { useScroll, useTransform, motion } from "motion/react";

function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <motion.div 
      className="progress-bar" 
      style={{ scaleX, transformOrigin: "0%" }} 
    />
  );
}
```

---

## 6. IMPERATIVE SEQUENCE ANIMATION (`useAnimate()`)

For non-declarative controls, triggers, or timeline-based orchestration.

```tsx
import { useAnimate } from "motion/react";

function Sequence() {
  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    // Stage 1: Animate title
    await animate("h1", { opacity: 1, y: 0 }, { duration: 0.5 });
    // Stage 2: Stagger items
    await animate("li", { scale: 1, opacity: 1 }, { delay: 0.2, duration: 0.3 });
  };

  return (
    <div ref={scope}>
      <button onClick={handleAnimate}>Start Sequence</button>
      <h1 style={{ opacity: 0, y: -20 }}>Header</h1>
      <ul>
        <li style={{ opacity: 0, scale: 0.5 }}>Item 1</li>
        <li style={{ opacity: 0, scale: 0.5 }}>Item 2</li>
      </ul>
    </div>
  );
}
```
