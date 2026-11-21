#!/usr/bin/env bash
# Blocks hardcoded colors in components: only semantic tokens are allowed (docs/design/DESIGN.md, rule 1).
# Tokens themselves live in src/app/styles/index.css, which is excluded.
set -euo pipefail
cd "$(dirname "$0")/.."
pattern='#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(|oklch\(|\b(bg|text|border|ring|fill|stroke|from|to|via|outline|shadow|decoration|accent|caret)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|black|white)(-[0-9]{2,3})?\b'
if grep -rEn --include='*.ts' --include='*.tsx' "$pattern" src; then
  echo "✗ Hardcoded colors found. Use semantic tokens (bg-primary, text-muted-foreground, ...) instead." >&2
  exit 1
fi
echo "✓ No hardcoded colors in src/**/*.{ts,tsx}"
