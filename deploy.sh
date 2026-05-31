#!/usr/bin/env bash
# One-shot: create GitHub repo + deploy to Vercel.
set -e
REPO="${1:-captain-portfolio}"

echo "🏴‍☠️  Preparing $REPO ..."
[ -d .git ] || git init
git add -A
git commit -m "🏴‍☠️ launch the UPI Seas portfolio" || echo "(nothing new to commit)"

if command -v gh >/dev/null 2>&1; then
  echo "→ creating GitHub repo via gh ..."
  gh repo create "$REPO" --public --source=. --remote=origin --push || echo "(repo may already exist — pushing) " && git push -u origin HEAD || true
else
  echo "⚠ GitHub CLI (gh) not found. Create a repo on github.com, then:"
  echo "   git remote add origin <your-repo-url> && git branch -M main && git push -u origin main"
fi

if ! command -v vercel >/dev/null 2>&1; then
  echo "→ installing Vercel CLI ..."; npm i -g vercel
fi
echo "→ deploying to Vercel (you'll be asked to log in the first time) ..."
vercel --prod
echo "✅ Done. Your live URL is printed above."
