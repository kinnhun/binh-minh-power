---
name: gsap
description: GSAP (GreenSock Animation Platform) animation skill. Provides instructions, API references, best practices, and code snippets for creating high-performance timeline-based animations, ScrollTrigger scroll interactions, pinning, scrubbing, and proper React integration.
---

# GSAP ANIMATION SKILL (GREENSOCK)

You are an expert motion designer and senior frontend engineer specialized in high-end web animations. Use this skill to implement professional, high-performance, and complex animations using **GSAP** (GreenSock Animation Platform).

## CORE PRINCIPLES

1. **Performant Transforms**: Always animate hardware-accelerated CSS properties (`x`, `y`, `rotation`, `scale`, `skewX`, `skewY`, `opacity`) instead of layout properties (`top`, `left`, `width`, `height`, `margin`) to avoid page repaints.
2. **React Integration (Critical)**: Always use the `@gsap/react` hook library (`useGSAP`) when building in React. This handles scope targeting, automatic cleanup, and prevents memory leaks or double-triggering in React 18 Strict Mode.
3. **Sequencing with Timelines**: Never chain multiple `delay` properties. Always use `gsap.timeline()` for coordinating complex, sequential animations.
4. **ScrollTrigger Optimization**: Limit the number of ScrollTriggers that recalculate layout. Avoid pinning very large parent sections unless necessary, and use simple `scrub` triggers for scroll-parallax effects.

---

## INSTALLATION & REGISTERING PLUGINS

```bash
npm install gsap @gsap/react
```

Always register plugins at the top level of your component file:
```typescript
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
```

---

## 1. BASIC ANIMATIONS

GSAP uses simple methods to target DOM elements (via refs or string selectors):

*   **`gsap.to(target, vars)`**: Animates from current state to the defined values.
*   **`gsap.from(target, vars)`**: Animates from the defined values to the current state.
*   **`gsap.fromTo(target, fromVars, toVars)`**: Explicitly defines both starting and ending values.
*   **`gsap.set(target, vars)`**: Instantly sets properties without animating.

```typescript
useGSAP(() => {
  gsap.to(".box", {
    x: 200,
    rotation: 360,
    duration: 1.5,
    ease: "power2.out"
  });
});
```

---

## 2. TIMELINES FOR SEQUENCING

Timelines are containers where you can position animations in time relative to each other.

```typescript
useGSAP(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(".title", { opacity: 1, y: 0, duration: 0.8 })
    .to(".text", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3") // overlaps by 0.3s
    .from(".button", { scale: 0, duration: 0.5, ease: "back.out(1.7)" }, "+=0.1"); // delay by 0.1s
});
```

---

## 3. REACT INTEGRATION WITH `useGSAP`

The `useGSAP` hook replaces `useEffect` for writing GSAP animations.

### Scoping Selectors
Always pass a `scope` ref to `useGSAP` so selectors are scoped locally to that component:

```tsx
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function TargetComponent() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Selects only '.box' elements inside the 'container' ref
    gsap.to(".box", { x: 100, stagger: 0.1 });
  }, { scope: container });

  return (
    <div ref={container} className="app">
      <div className="box">Box 1</div>
      <div className="box">Box 2</div>
    </div>
  );
}
```

### Dependency Tracking
Just like `useEffect`, you can pass dependencies to trigger animations on state changes:

```typescript
useGSAP(() => {
  gsap.to(".badge", { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 });
}, [count]); // triggers when count changes
```

---

## 4. SCROLLTRIGGER (SCROLL INTERACTIONS)

ScrollTrigger lets you trigger animations or bind timelines to the scroll progress.

### Simple Reveal on Scroll
```typescript
useGSAP(() => {
  gsap.from(".fade-in", {
    scrollTrigger: {
      trigger: ".fade-in",
      start: "top 80%", // top of trigger meets 80% from top of viewport
      end: "bottom 20%",
      toggleActions: "play none none reverse" // play on enter, reverse on leave-back
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
}, { scope: container });
```

### Scroll Pinning and Scrubbing
Use `scrub: true` (or a number like `scrub: 1` for smooth lag) to tie the progress of a timeline directly to the scrollbar:

```typescript
useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pin-section",
      start: "top top",
      end: "+=1000", // lasts for 1000px of scrolling
      scrub: 1,      // smooth 1-second scrub lag
      pin: true      // pin the trigger element in place
    }
  });

  tl.to(".panel-1", { xPercent: -100 })
    .to(".panel-2", { xPercent: -100 })
    .to(".panel-3", { scale: 1.2 });
}, { scope: container });
```

---

## 5. EASINGS REFERENCE

Always specify a clean, modern easing function:
*   `"power1.in"`, `"power1.out"`, `"power1.inOut"` (subtle)
*   `"power2.in"`, `"power2.out"`, `"power2.inOut"`
*   `"power3.in"`, `"power3.out"`, `"power3.inOut"` (stronger)
*   `"power4.in"`, `"power4.out"`, `"power4.inOut"` (heavy deceleration)
*   `"back.out(1.7)"` (overshoots slightly, great for UI buttons)
*   `"elastic.out(1, 0.3)"` (spring bounce)
*   `"none"` (linear, best for continuous rotation or map-progress)
