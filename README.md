# Salar.dev — Creative Developer & Software Engineer Portfolio

> **"I build digital experiences and software that turn ideas into functional products."**

A premium, art-directed developer portfolio built from scratch with React 18, TypeScript, Tailwind CSS, Vite, and a signature canvas-based, scroll-scrubbed 4K keyframe sequence renderer.

---

## 🌟 Key Features

1. **Cinematic Scroll-Scrubbed Keyframe Hero**
   - **Asset Pipeline:** 300 contiguous 4K UHD JPEG keyframes (`ezgif-frame-001.jpg` to `ezgif-frame-300.jpg`) rendered via HTML5 Canvas.
   - **Deterministic Scrubbing:** Bounded normalized scroll mapping: `frameIndex = Math.min(300, Math.max(1, Math.round(progress * 299) + 1))`.
   - **Progressive Memory Management:** Instant anchor preloading on frame 4 (bypassing black lead-in frames), sparse milestone landmark preloading, and local neighborhood prefetching (`prefetchAdjacent`) to prevent VRAM memory pressure while ensuring silky smooth forward and reverse scrubbing.
   - **Cover-Fit Math:** Responsive high-DPI aspect ratio calculation preserving the subject composition across all screen aspect ratios.
   - **Interactive Playback Controls:** Manual scroll-scrubbing + automated preview toggle + frame index counter.

2. **Full Section Architecture (A–H Completed)**
   - **Section A — Navigation:** Fixed frosted glass header, geometric delta brand mark, active scroll spy indicator, desktop links, "Available for Q4" badge, and full-screen mobile drawer.
   - **Section B — About:** Editorial typography ("More than interfaces. Complete digital experiences"), core philosophy, and 4 engineering tenets.
   - **Section C — Expertise:** Capability matrix with tabs for Full-Stack Systems, Frontend Engineering, Backend Architecture, Performance Engineering, and Creative Motion.
   - **Section D — Selected Projects:** Bespoke interactive project showcases featuring ZyvaX Digital, Toolora, Noor Quran Academy, and TaskPulse Engine with live payload inspection and source code links.
   - **Section E — Development Process:** 6-stage workflow stepper (`01 Discover` through `06 Deliver`) with milestone inspectors and deliverables breakdown.
   - **Section F — Technical Showcase:** Live interactive Full-Stack Architecture pipeline simulator (UI Layer → Application Logic → API Gateway → Data Persistence) with dynamic JSON payloads and latency RTT telemetry.
   - **Section G — Contact:** Direct copy-to-clipboard email action, pre-filled mailto scope generator, response SLA indicator, and social profiles.
   - **Section H — Footer:** Geometric branding, live UTC clock, quick navigation, and back-to-top trigger.

3. **Performance & Accessibility**
   - High-DPI canvas pixel ratio capping (2x) to ensure smooth 60fps rendering without GPU starvation.
   - Real asset buffer loading indicator (`LoadingScreen.tsx`).
   - System `prefers-reduced-motion` compliance.
   - Zero console errors during headless Chrome automated test suites.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (Node.js 20+ recommended)
- Windows PowerShell / Command Prompt / Terminal

### Installation
```bash
# If using Windows PowerShell and npm script policy restrictions apply, run:
npm.cmd install
# Or standard npm:
npm install
```

### Development Server
```bash
npm.cmd run dev
```
Open [http://127.0.0.1:5173](http://127.0.0.1:5173) in your browser.

### Production Build
```bash
npm.cmd run build
```
Builds production-ready assets into the `dist/` directory.

### Preview Production Build
```bash
npm.cmd run preview
```

### Run Browser QA Verification
```bash
node test-browser.js
```
Runs headless Puppeteer suite that verifies console error logs, scrolls through the 300-frame keyframe hero, exercises interactive tabs, and outputs full desktop and mobile screenshots to the `screenshots/` directory.

---

## 📁 Project Architecture

```
├── public/
│   └── frames/
│       ├── ezgif-frame-001.jpg ... ezgif-frame-300.jpg  # 300 4K UHD keyframes
│       └── manifest.json                                # Sequence manifest
├── screenshots/                                         # Browser QA captured runs
├── src/
│   ├── components/
│   │   ├── About.tsx                                    # Section B
│   │   ├── CinematicHero.tsx                            # Canvas scroll sequence
│   │   ├── Contact.tsx                                  # Section G
│   │   ├── Expertise.tsx                                # Section C
│   │   ├── Footer.tsx                                   # Section H
│   │   ├── Icons.tsx                                    # Custom SVG icons
│   │   ├── LoadingScreen.tsx                            # Asset preload splash
│   │   ├── Navigation.tsx                               # Section A
│   │   ├── Process.tsx                                  # Section E
│   │   ├── Projects.tsx                                 # Section D
│   │   └── TechnicalShowcase.tsx                        # Section F
│   ├── config/
│   │   └── site.ts                                      # Config, copy & project data
│   ├── App.tsx                                          # Root assembly
│   ├── index.css                                        # Tailwind styles & fonts
│   └── main.tsx                                         # Entrypoint
├── index.html                                           # HTML template with metadata
├── package.json                                         # Scripts & dependencies
├── tailwind.config.js                                   # Custom palette & tokens
├── test-browser.js                                      # Puppeteer browser QA suite
└── tsconfig.json                                        # TypeScript configuration
```

---

## 🎨 Color Palette

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Ink Obsidian** | `#0a0b0e` | Deep canvas & background foundation |
| **Ink Surface** | `#111318` | Elevated card & section background |
| **Ink Raised** | `#181b22` | Interactive component states & borders |
| **Electric Cobalt** | `#3b82f6` | Primary brand accent & active states |
| **Violet Cyan** | `#06b6d4` | Secondary telemetry & subtle highlights |
| **Paper White** | `#f8fafc` | Primary editorial typography |
| **Muted Slate** | `#94a3b8` | Secondary copy & technical metrics |

---

Built with technical precision for **Salar.dev**.
