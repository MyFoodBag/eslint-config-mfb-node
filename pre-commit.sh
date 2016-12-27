#!/bin/sh
command -v npm >/dev/null 2>&1 || { echo >&2 "This script requires npm but it's not available in this context. Ending without running pre-commit hook."; exit 0; }

npm run lint &&
npm t
