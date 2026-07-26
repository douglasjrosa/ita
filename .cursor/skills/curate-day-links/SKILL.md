---
name: curate-day-links
description: >-
  Normalizes the Links section of an ITA study day file, preferring a curated
  YouTube lesson when a good candidate exists. Use when the producer provides
  theme plus URLs, asks to fix Links, or curate videaulas for a day file.
disable-model-invocation: true
---

# Curate day links

## Steps

1. Open the target `fase-*/**/dia-*.md`.
2. Normalize `## Links` to this order when items exist:
   - `Vídeoaula:` YouTube (required if a good candidate was provided)
   - Optional extras (program PDF, reference notes)
3. Prefer a **specific** watch URL over a search-results placeholder when the producer supplies one.
4. Remove error-log / progress-folder links from the day flow.
5. Keep link labels in PT-BR for student-facing clarity.

## Output

- Updated `## Links` only unless the user asks for more edits
- Brief note if no suitable YouTube candidate was available
