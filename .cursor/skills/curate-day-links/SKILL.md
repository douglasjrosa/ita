---
name: curate-day-links
description: >-
  Normalizes the Mídias section of an ITA study day teoria.md, preferring a
  curated YouTube lesson when a good candidate exists. Use when the producer
  provides theme plus URLs or asks to curate videaulas for a day.
disable-model-invocation: true
---

# Curate day links

## Steps

1. Open `fase-*/**/dia-*/teoria.md` for the target day.
2. Normalize `## Mídias` to this order when items exist:
   - `Vídeoaula:` YouTube (required if a good candidate was provided)
   - Optional extras (program PDF, references)
3. Prefer a **specific** watch URL over a search-results placeholder when supplied.
4. Keep sibling nav links (Exercícios / Gabarito) intact.
5. Keep labels in PT-BR.

## Output

- Updated `## Mídias` on `teoria.md` only unless the user asks for more
- Brief note if no suitable YouTube candidate was available
