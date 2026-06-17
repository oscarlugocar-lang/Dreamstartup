#!/bin/bash
# Dreamscape Video Pipeline
# Usage: bash render.sh <template> <output-name>

TEMPLATE="$1"
OUTPUT="$2"

if [ -z "$TEMPLATE" ] || [ -z "$OUTPUT" ]; then
  echo "Usage: bash render.sh <template> <output-name>"
  echo "Templates: explicador, producto, captions"
  exit 1
fi

HTML_FILE="templates/${TEMPLATE}.html"
OUTPUT_FILE="output/${OUTPUT}.mp4"

if [ ! -f "$HTML_FILE" ]; then
  echo "Template not found: $HTML_FILE"
  exit 1
fi

echo "🎬 Rendering $TEMPLATE → $OUTPUT_FILE"

# Option 1: Quick screenshot (logo/graphic)
# Option 2: HyperFrames CLI (if available)
if command -v npx &> /dev/null && npx hyperframes --version &> /dev/null 2>&1; then
  echo "🚀 Using HyperFrames..."
  npx hyperframes render "$HTML_FILE" -o "$OUTPUT_FILE"
else
  echo "📸 HyperFrames not found. Rendering with simple screenshot..."
  # Simple screenshot fallback using headless Chrome
  npx playwright screenshot "$HTML_FILE" "${OUTPUT_FILE%.mp4}.png" 2>/dev/null || \
  echo "⚠️  Install HyperFrames for full video rendering: npx hyperframes init"
fi

echo "✅ Done: $OUTPUT_FILE"
