# 💥 KABOOM! UI

> *The CSS framework that goes straight for the jaw.*

![Version](https://img.shields.io/badge/version-1.0.0-ff3c00?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-ffdd00?style=for-the-badge)
![Zero JS](https://img.shields.io/badge/JavaScript-ZERO-4caf50?style=for-the-badge&logo=javascript)
![CSS Only](https://img.shields.io/badge/Pure-CSS-264de4?style=for-the-badge&logo=css3)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-ff69b4?style=for-the-badge)

```
██╗  ██╗ █████╗ ██████╗  ██████╗  ██████╗ ███╗   ███╗██╗
██║ ██╔╝██╔══██╗██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║██║
█████╔╝ ███████║██████╔╝██║   ██║██║   ██║██╔████╔██║██║
██╔═██╗ ██╔══██║██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║╚═╝
██║  ██╗██║  ██║██████╔╝╚██████╔╝╚██████╔╝██║ ╚═╝ ██║██╗
╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝╚═╝     ╚═╝╚═╝
```

**KABOOM! UI** is a purely nostalgic, 100% CSS design system that rips straight from the pages of vintage comic books, Pop Art posters, and the glorious chaos of 90s culture. No frameworks. No dependencies. No apologies. Just raw, inky, halftone-dotted *style*.

---

## 🥊 Why KABOOM!?

The modern web is a sea of rounded corners, drop shadows, and Figma-perfect minimalism. **KABOOM! UI** is the antidote.

It's for builders who want their UI to feel like it was *printed* — thick ink borders that bleed slightly off the edge, misaligned CMYK offset shadows in cyan and magenta, halftone dot backgrounds straight out of a Lichtenstein painting, and hand-drawn wobbly outlines that no design system dares to ship. Every component carries the weight of a **#2 comic book press** from 1962.

- 🎨 **Purely nostalgic** — vintage comic, Pop Art, and 90s vibes, baked into every class
- 💥 **Zero JavaScript** — the entire core is pure CSS. No `node_modules`. No bundler. No grief.
- 🥊 **Featherweight** — the core stylesheet clocks in under 12kb minified & gzipped
- 🎨 **Expressive** — halftone dots, ink bleeds, misaligned print shadows, and hand-drawn aesthetics
- 💥 **Accessible** — high-contrast by design; comic books were made to be *read*

---

## ⚡ Installation

### Option 1 — CDN (Fastest Way to Punch In)

Drop this single line into your `<head>` and you're live:

```html
<link
  rel="stylesheet"
  href="https://cdn.kaboomui.dev/v1/kaboom.min.css"
/>
```

### Option 2 — Download the CSS File

Prefer to self-host? Grab the file and own it forever:

```bash
curl -O https://cdn.kaboomui.dev/v1/kaboom.min.css
```

Then link it locally:

```html
<link rel="stylesheet" href="/css/kaboom.min.css" />
```

### Option 3 — npm (For the Build-Tool Crowd)

```bash
npm install kaboom-ui
```

```js
// In your entry file
import 'kaboom-ui/kaboom.min.css';
```

> **That's it.** No PostCSS plugins. No Tailwind config. No peer dependencies. One file, maximum chaos.

---

## 🎨 Usage

### 💥 The Comic Button

```html
<!-- Primary action — POW! -->
<button class="comic-btn">
  Click Me, Hero!
</button>

<!-- Danger variant — watch out! -->
<button class="comic-btn comic-btn--danger">
  KABOOM!
</button>

<!-- Outlined ghost variant -->
<button class="comic-btn comic-btn--ghost">
  Sneak Attack
</button>
```

### 🃏 The Comic Card

```html
<div class="comic-card">
  <div class="comic-card__badge">NEW ISSUE</div>
  <h2 class="comic-card__title">The Halftone Avenger</h2>
  <p class="comic-card__body">
    Armed with nothing but a CSS file and an unhealthy love for 
    Roy Lichtenstein, our hero ships pixel-perfect nostalgia 
    to browsers everywhere.
  </p>
  <a href="#" class="comic-btn comic-btn--sm">Read More →</a>
</div>
```

### 🎨 Speech Bubble

```html
<div class="comic-bubble comic-bubble--top">
  Great Scott! Zero dependencies?!
</div>
```

### 💥 Halftone Section Background

```html
<section class="kaboom-halftone">
  <h1 class="kaboom-title">POW!</h1>
  <p>Your content, served with dots.</p>
</section>
```

---

## 🥊 Tiers

### 🆓 Free Sidekick Tier

Everything you need to get started and ship something that slaps:

- Core component set (buttons, cards, badges, speech bubbles, inputs)
- Halftone dot backgrounds (3 densities)
- Misaligned print offset shadow utilities
- Heavy ink border system
- Hand-drawn aesthetic modifiers
- Full CDN access — always free, forever

### 🦸 Premium Superhero Tier

For teams and solo devs who want the **full arsenal**:

- **50+ components** — panels, splash pages, action strips, villain callouts, zap alerts, progress bars, comic-strip grid layouts, and more
- Exclusive 90s Rave and Pop Art color palettes
- Animated ink-splat transitions (CSS only, naturally)
- Dark Mode — *Noir Edition*
- Full Figma component library
- Priority support and a private Discord channel
- Commercial license included

> 🎨 [**Upgrade to Superhero →**](https://kaboomui.dev/superhero) — *Because sidekicks never get the glory.*

---

## 💥 Contributing

KABOOM! UI is open source and thrives on community muscle. Whether you're fixing a typo, proposing a new component, or hunting down a Safari-specific border rendering nightmare — **all contributions are welcome**.

**To contribute:**

1. Fork the repo and create your branch: `git checkout -b feat/zap-tooltip`
2. Make your changes and test across browsers
3. Ensure your CSS follows the existing BEM naming conventions
4. Open a Pull Request with a clear description (screenshots encouraged — *especially* if things explode)

Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full code of conduct and style guide. We're a friendly bunch. No capes required.

---

## 📋 Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge (last 2) | ✅ Full |
| Firefox (last 2) | ✅ Full |
| Safari (last 2) | ✅ Full |
| iOS Safari | ✅ Full |
| IE 11 | 💀 No — let it rest |

---

## 📄 License

KABOOM! UI core is released under the **MIT License** — use it, fork it, ship it, print it on a t-shirt.

See [`LICENSE`](./LICENSE) for the full text.

---

<div align="center">

**Built with 🥊 by ink-stained developers who peaked in 1994.**

[Website](https://kaboom-ui-kit.pages.dev/) 

</div>
