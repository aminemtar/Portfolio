#!/bin/bash
set -e
if [ ! -f src/constants/index.js ]; then echo "Run this from the Portfolio repository root"; exit 1; fi
mkdir -p public/project-showcase
python3 - <<'PY'
from pathlib import Path
p=Path('src/constants/index.js')
s=p.read_text()
s=s.replace('/project-showcase/mylife-expenses.svg','/project-showcase/mylife-expenses-preview.jpg')
s=s.replace('/project-showcase/vitalis.svg','/project-showcase/vitalis-preview.jpg')
p.write_text(s)
PY
echo "Images wired. Run npm run dev to preview."
