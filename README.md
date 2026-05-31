# 🏴‍☠️ Logbook of the UPI Seas — Sushant Bisht

A gamified, dieselpunk-pirate portfolio: 19th-century privateer aesthetics meets
modern web machinery. Animated canvas sea, a boot-up terminal, a playable ship's
console (text-adventure), a hidden-doubloon mini-game, a cannon you can fire, and a
two-column **Gallery + Dispatches (blog)** hold.

Pure static site — **no build step**, no framework. Just HTML, CSS, and vanilla JS.

```
.
├── index.html
├── css/styles.css
├── js/data.js     ← edit THIS to update all content (the "ship's manifest")
├── js/main.js     ← the engine room (animations + mini-games)
└── assets/        ← favicon + gallery images (drop your own here)
```

## ✍️ Make it yours
- **Content** → edit `js/data.js` (name, voyages, bounties, arsenal, gallery, dispatches).
- **Gallery images** → drop files in `assets/` and point each `gallery[].src` at them
  (e.g. `assets/fest.jpg`). Replace the placeholder `plate-*.svg` files.
- **Blog** → each item in `dispatches[]` has a `link`; point it at a post or external article.

## 🎮 Hidden things
- Type `help` in the **ship's console** (bottom-left handle).
- Find **5 hidden doubloons** scattered across the deck → unlocks the `treasure` command.
- The **Konami code** (↑↑↓↓←→←→ B A) triggers *Kraken Mode*.

---

## 🚀 Deploy (GitHub + Vercel CLI)

Run these on your own machine (you need a GitHub account and a Vercel account).

### 1. Create the GitHub repo & push
```bash
cd captain-portfolio          # this folder

git init
git add -A
git commit -m "🏴‍☠️ launch the UPI Seas portfolio"

# Option A — GitHub CLI (easiest). Installs: https://cli.github.com
gh auth login                  # one-time, opens browser
gh repo create captain-portfolio --public --source=. --remote=origin --push

# Option B — manual: create an empty repo on github.com, then:
# git remote add origin https://github.com/SuShAnTBiShT407/captain-portfolio.git
# git branch -M main
# git push -u origin main
```

### 2. Deploy to Vercel
```bash
npm i -g vercel                # if not installed
vercel login                   # one-time, opens browser
vercel                         # preview deploy — accept defaults (framework: Other)
vercel --prod                  # production deploy → gives you the live URL
```
Vercel auto-detects this as a static site (`vercel.json` sets `outputDirectory: .`).

### One-shot helper
```bash
bash deploy.sh                 # runs the git + vercel steps for you
```

> If `vercel` asks for a build command or framework, choose **Other / None** and
> set the output directory to the current folder (`.`). There is nothing to build.
