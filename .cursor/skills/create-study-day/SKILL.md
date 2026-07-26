---
name: create-study-day
description: >-
  Creates a new ITA study day Markdown file from templates/day.md and appends
  a checklist link on the matching FASE_n.md. Use when the producer asks to add
  a study day, new dia-NN topic, or scaffold a day under fase-n.
disable-model-invocation: true
---

# Create study day

## Inputs to confirm

- Phase number (`1` | `2` | `3`)
- Subject folder (`fisica` | `matematica` | `quimica` | `portugues` | `ingles`)
- Day number `NN` and kebab `slug`
- Title and Meta (PT-BR)
- Optional YouTube URL and draft theory/exercises

## Steps

1. Read [templates/day.md](templates/day.md).
2. Create `fase-<n>/<subject>/dia-NN-slug.md` with required headings.
3. Fill Meta, Links (YouTube when available), Teoria, Exercícios, Gabarito.
4. Append a checklist line to `FASE_<n>.md` under the correct subject:

   `- [ ] [Dia NN — Título](fase-<n>/<subject>/dia-NN-slug.md)`

5. Do not create `HOJE.md`. Do not commit unless asked.

## Checklist

```
- [ ] Day file created with required sections
- [ ] Phase index updated
- [ ] No PII
- [ ] Naming matches dia-NN-slug.md
```
