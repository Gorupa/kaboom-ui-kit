# 💥 KABOOM! UI

> *The CSS framework that goes straight for the jaw.*

[![Live Demo](https://img.shields.io/badge/🎨%20Live%20Demo-kaboom--ui--kit.pages.dev-ff3c00?style=for-the-badge)](https://kaboom-ui-kit.pages.dev/)
![Pure CSS](https://img.shields.io/badge/Pure-CSS-264de4?style=for-the-badge&logo=css3&logoColor=white)
![Zero JS](https://img.shields.io/badge/JavaScript-ZERO-4caf50?style=for-the-badge&logo=javascript)
![License](https://img.shields.io/badge/license-MIT-ffdd00?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-ff69b4?style=for-the-badge)

```
██╗  ██╗ █████╗ ██████╗  ██████╗  ██████╗ ███╗   ███╗██╗
██║ ██╔╝██╔══██╗██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║██║
█████╔╝ ███████║██████╔╝██║   ██║██║   ██║██╔████╔██║██║
██╔═██╗ ██╔══██║██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║╚═╝
██║  ██╗██║  ██║██████╔╝╚██████╔╝╚██████╔╝██║ ╚═╝ ██║██╗
╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝╚═╝     ╚═╝╚═╝
```

**KABOOM! UI** is a purely nostalgic, 100% CSS design system ripped straight from the pages of vintage comic books, Pop Art posters, and the gloriously chaotic 90s. No frameworks. No dependencies. No apologies. Just raw, inky, halftone-dotted *style*.

### 🥊 [→ See it live at kaboom-ui-kit.pages.dev](https://kaboom-ui-kit.pages.dev/)

---

## 💥 Why KABOOM!?

The modern web is a sea of rounded corners, soft shadows, and Figma-perfect minimalism. **KABOOM! UI** is the antidote.

It's for builders who want their UI to feel like it was *printed* — thick ink borders that bleed off the edge, misaligned CMYK offset shadows in cyan and magenta, halftone dot backgrounds straight out of a Lichtenstein painting, and hand-drawn wobbly outlines that no polished design system dares to ship. Every component carries the weight of a **#2 comic book press** from 1962.

---

## 🎨 Key Features

| Feature | Description |
|---|---|
| 🖊️ **Heavy Ink Borders** | Bold, chunky outlines that look like they were drawn with a marker |
| 🎨 **Misaligned Print Shadows** | Off-register CMYK-style offset shadows in cyan, magenta, and yellow |
| 🔵 **Halftone Dot Backgrounds** | Authentic Ben-Day dot patterns straight out of a comic print shop |
| ✏️ **Hand-Drawn Aesthetics** | Wobbly, imperfect edges that feel analog in a digital world |
| ⚡ **Zero JavaScript** | The entire core is pure CSS — no `node_modules`, no bundler, no grief |
| 🪶 **Featherweight** | Core stylesheet is under 12kb minified & gzipped |

---

## ⚡ Installation

**No npm. No build step. No nonsense.**

KABOOM! UI is a single CSS file. Download it, link it, ship it.

**Step 1 — Download the file**

Grab [`comic-ui.css`](./comic-ui.css) from this repository (click the file → *Download raw file*), and drop it into your project.

**Step 2 — Link it in your HTML `<head>`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My KABOOM! Project</title>

    <!-- 💥 That's all it takes -->
    <link rel="stylesheet" href="/css/comic-ui.css" />
  </head>
  <body>
    <!-- You're ready to rumble -->
  </body>
</html>
```

> ✅ Done. No terminal commands. No config files. No peer dependency warnings.  
> Just a file and a `<link>` tag — the way the web was meant to be.

---

## 🥊 Usage

Once `comic-ui.css` is linked, every KABOOM! class is ready to throw punches. All classes are prefixed with `k-` so they'll never clash with your existing styles.

### 💥 Buttons — `.k-btn`

```html
<!-- Primary — POW! -->
<button class="k-btn">Let's Go!</button>

<!-- Danger variant — incoming! -->
<button class="k-btn k-btn--danger">KABOOM!</button>

<!-- Ghost / outlined variant -->
<button class="k-btn k-btn--ghost">Sneak Attack</button>
```

### 🃏 Cards — `.k-card`

```html
<div class="k-card">
  <div class="k-card__badge">NEW ISSUE #42</div>

  <h2 class="k-card__title">The Halftone Avenger</h2>

  <p class="k-card__body">
    Armed with nothing but a single CSS file and an unhealthy love for
    Roy Lichtenstein, our hero ships pixel-perfect nostalgia to browsers
    everywhere — no JavaScript required.
  </p>

  <a href="#" class="k-btn k-btn--sm">Read More →</a>
</div>
```

### 💬 Speech Bubble — `.k-bubble`

```html
<div class="k-bubble k-bubble--top">
  Great Scott! Zero dependencies?!
</div>
```

### 🔵 Halftone Section — `.k-halftone`

```html
<section class="k-halftone">
  <h1 class="k-splash-title">POW!</h1>
  <p>Your content, served with dots.</p>
</section>
```

---

## 🦸 Tiers

### 🆓 Free Sidekick Tier — *This Repository*

Everything you need to get started and ship something that genuinely slaps:

- ✅ Core component set — buttons, cards, badges, speech bubbles, form inputs
- ✅ Halftone dot backgrounds (3 densities)
- ✅ Misaligned print offset shadow utilities
- ✅ Heavy ink border system
- ✅ Hand-drawn aesthetic modifiers
- ✅ Single CSS file — just download and link
- ✅ MIT licensed — free forever, for any project

### 🦸 Premium Superhero Tier — *[kaboom-ui-kit.pages.dev](https://kaboom-ui-kit.pages.dev/)*

For teams and solo devs who want the **full arsenal**:

- 💥 **50+ components** — panels, splash pages, action strips, villain callouts, zap alerts, progress bars, comic-strip grid layouts, tooltips, modals, and more
- 🎨 **Pre-built page templates** — landing pages, pricing pages, and portfolios, ready to customize
- 🖼️ **Figma source files** — the complete component library, editable and yours to keep
- 🌑 **Noir Edition** — a full dark mode palette, because even heroes need a dark arc
- ⚡ **Animated ink-splat transitions** — CSS only, naturally
- 🥊 **Priority support** via a private Discord channel

> 🎨 **[Unlock the Superhero Tier →](https://kaboom-ui-kit.pages.dev/)** — *Because sidekicks never get the glory.*

---

## 📋 Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge (last 2) | ✅ Full |
| Firefox (last 2) | ✅ Full |
| Safari (last 2) | ✅ Full |
| iOS Safari | ✅ Full |
| IE 11 | 💀 Absolutely not — let it rest |

---

## 🥊 Contributing

KABOOM! UI is open source and thrives on community muscle. Whether you're fixing a typo, squashing a Safari border-rendering bug, or proposing a brand-new component — **all contributions are welcome**.

1. Fork the repo and create your branch: `git checkout -b feat/zap-tooltip`
2. Make your changes and test across browsers
3. Follow the existing BEM-style naming (`k-[component]__[element]--[modifier]`)
4. Open a Pull Request with a clear description — screenshots encouraged, *especially* if things explode

Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full style guide and code of conduct. We're a friendly bunch. No capes required.

---

## 📄 License

KABOOM! UI (Sidekick Tier) is released under the **MIT License** — use it, fork it, ship it, or print it on a t-shirt.

See [`LICENSE`](./LICENSE) for the full text.

---

<div align="center">

**Built with 🥊 by ink-stained developers who peaked in 1994.**

[Live Demo](https://kaboom-ui-kit.pages.dev/) · [Report a Bug](../../issues) · [Request a Component](../../issues)


</div>
