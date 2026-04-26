# Jovann Bordeau — Portfolio

Site personnel single-page · Vanilla JS · Zero framework.

🌐 **Live** : [jobordeau.github.io](https://jobordeau.github.io)

## Architecture

```
.
├── index.html                 # Single page entry — semantic HTML5 sections
├── styles/
│   ├── main.css              # @imports all modular stylesheets
│   ├── base.css              # CSS reset, design tokens, background canvas
│   ├── components.css        # Nav, reveal-on-scroll utilities
│   ├── hero.css              # Hero + cert badge + facts strip + buttons
│   ├── lumina.css            # Featured project showcase
│   ├── skills.css            # Bento-grid skills section
│   ├── projects.css          # Project cards + filters
│   ├── parcours.css          # Timeline split columns
│   ├── early-projects.css    # DUT projects (compact section)
│   └── footer.css            # Contact + footer
├── scripts/
│   ├── main.js               # Entry point — ES modules
│   ├── data/
│   │   ├── profile.js        # Personal info, nav, facts
│   │   ├── skills.js         # Skills bento data
│   │   ├── lumina.js         # Featured project data
│   │   ├── projects.js       # Master/Pro projects
│   │   ├── early-projects.js # DUT projects
│   │   └── timeline.js       # Experience + education
│   ├── render/               # DOM rendering modules (one per section)
│   │   ├── nav.js
│   │   ├── hero.js
│   │   ├── lumina.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── early-projects.js
│   │   ├── timeline.js
│   │   └── footer.js
│   └── interactions/         # Behavior modules
│       ├── filters.js        # Project category filter
│       ├── copy-email.js     # One-click email copy
│       ├── card-glow.js      # Hover-follow radial gradient
│       ├── reveal.js         # IntersectionObserver scroll animation
│       └── canvas.js         # Background data-flow network
└── public/
    ├── cv/                   # CV PDF
    ├── docs/                 # Project reports
    └── images/
        ├── profile.jpg
        ├── certs/            # Microsoft DP-700 badge
        └── projects/         # Project thumbnails + Lumina screenshots
```

## Run locally

ES modules require a static server (cannot use `file://`). Use any of:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .

# VS Code
# Install "Live Server" extension and click "Go Live"
```

Then open <http://localhost:8000>.

## Customization

All page content is driven by data modules in `scripts/data/`. To update :

- **Personal info / nav / contact** → `data/profile.js`
- **Skills bento** → `data/skills.js`
- **Featured project (Lumina)** → `data/lumina.js`
- **Project grid** → `data/projects.js`
- **DUT projects** → `data/early-projects.js`
- **Timeline** → `data/timeline.js`

No build step required — just refresh the browser.

## Featured project: Lumina Integration POC

The Lumina section showcases a cloud-native Azure architecture POC with a live demo:
- 🌐 Live demo : <https://lumina-web-demo-kappa.vercel.app/>
- 📦 Source : <https://github.com/jobordeau/Lumina-Integration-POC>
