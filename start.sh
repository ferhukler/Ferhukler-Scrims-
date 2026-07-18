#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if [ ! -f .env ]; then
  echo "Missing .env file. Create one from .env.example and add your DISCORD_TOKEN." >&2
  exit 1
fi
npm install
npm start
