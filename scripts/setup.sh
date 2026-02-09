#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE_REPO="$HOME/repos/portfolio"

echo "Setting up workspace at $REPO_ROOT"

# Copy environment files from source repo
if [ -f "$SOURCE_REPO/.env.local" ]; then
  cp "$SOURCE_REPO/.env.local" "$REPO_ROOT/.env.local"
  echo "Copied .env.local"
else
  echo "Warning: $SOURCE_REPO/.env.local not found, skipping"
fi

if [ -f "$SOURCE_REPO/packages/db/.env" ]; then
  cp "$SOURCE_REPO/packages/db/.env" "$REPO_ROOT/packages/db/.env"
  echo "Copied packages/db/.env"
else
  echo "Warning: $SOURCE_REPO/packages/db/.env not found, skipping"
fi

# Install dependencies
cd "$REPO_ROOT"
pnpm install

echo "Setup complete"
