# Ski Extension Website

Official website for **Ski** — the ultra-lightweight (`< 22 KB`), zero-telemetry, MIT-licensed browser extension that clicks YouTube’s native **Skip Ad** button with one keypress or hands-free Auto-Skip.

Built by **Winter Jackson** & **Xinteck Digital Solutions** (Nairobi, Kenya).

---

## Features

- **Dark & Light Mode System (`ski-theme.css`):**
  - Dark-first default (`#09090b` / `#121215`) with instant zero-FOUC switching to a high-contrast Light Mode (`#fafafa` / `#ffffff`) via the header Sun/Moon toggle (`localStorage` key `ski-theme`).
  - Theme-aware WebGL2 animated metaball blobs (`shared-lib`) and responsive grid lines across all viewports.
- **Interactive Skip Simulator & Live Toolbar Preview (`ski-simulator.js`):**
  - Local, zero-network interactive testbed (`#simulator`) supporting `Tab` keypress skipping, hands-free Auto-Skip toggle, and live skip/time-saved counters.
  - Hydration-safe DOM guard keeping the Hero Toolbar Preview, Interactive Testbed, header logo, footer links, and theme toggle synced across Framer hydration.
- **SEO Blog & Engineering Articles (`/blog`):**
  - `/blog/why-native-automation-wins` — *Why Native Button Automation Beats Network Ad Blocking*
  - `/blog/inside-skis-8-signal-engine` — *Inside Ski’s 8-Signal Self-Healing Skip Engine*
  - `/blog/skip-youtube-ads-desktop-mobile-2027` — *How to Skip YouTube Ads Cleanly on Desktop & Mobile*
  - Responsive local `srcset` cover images (`512w`, `768w`, `1024w`, `1200w`), OpenGraph/Twitter meta tags, and `schema.org` `Article` JSON-LD.
- **Legal & Compliance Pages:**
  - `/privacy` — Privacy Policy (Kenya Data Protection Act, 2019 Cap. 411C, ODPC, GDPR, CCPA/CPRA, and browser store disclosures)
  - `/cookies` — Cookies & Local Storage Policy (Kenya DPA 2019, ePrivacy Directive, UK PECR)
  - `/terms` — Terms of Service (MIT License, platform independence, Republic of Kenya governing law)

---

## Project Structure

```text
.
├── index.html                  # Homepage (Hero, Marquee, Comparison, Under the Hood, Simulator, Blog, FAQ)
├── blog.html                   # Blog index
├── blog/
│   ├── why-native-automation-wins.html
│   ├── inside-skis-8-signal-engine.html
│   └── skip-youtube-ads-desktop-mobile-2027.html
├── privacy.html                # Privacy Policy
├── cookies.html                # Cookies & Local Storage Policy
├── terms.html                  # Terms of Service
├── ski-theme.css               # Dark/Light theme tokens, responsive tables, layout & typography overrides
├── ski-simulator.js            # Interactive simulator, Hero preview, theme toggle & DOM guard
├── icon/                       # Official Ski Extension icons (16–512 px)
├── images/                     # Optimized responsive blog cover assets
├── sites/                      # Bundled Framer runtime & WebGL2 chunks
└── vercel.json                 # Static Vercel deployment config (cleanUrls: true)
```

---

## Local Preview

Serve the static site locally with any static HTTP server:

```bash
npx serve . -p 8000
```

Then open `http://localhost:8000`.

---

## Deployment (Vercel)

`vercel.json` is pre-configured for zero-build static deployment with clean URLs (`/blog`, `/privacy`, `/cookies`, `/terms`, `/blog/...`):

```json
{
  "framework": null,
  "buildCommand": "",
  "outputDirectory": ".",
  "cleanUrls": true
}
```

Pushing to `main` automatically triggers a Vercel deployment.

---

## Related Links

- **Extension Source Code:** [github.com/WinterJackson/ski](https://github.com/WinterJackson/ski)
- **Firefox Add-ons (AMO):** [addons.mozilla.org/addon/ski-extension/](https://addons.mozilla.org/addon/ski-extension/)
- **Releases:** [github.com/WinterJackson/ski/releases](https://github.com/WinterJackson/ski/releases)
- **Xinteck Digital Solutions:** [xinteck.co.ke](https://xinteck.co.ke/)

---

## License

MIT License — see [github.com/WinterJackson/ski/blob/main/LICENSE](https://github.com/WinterJackson/ski/blob/main/LICENSE).

