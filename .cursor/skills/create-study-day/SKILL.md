---
name: create-study-day
description: >-
  Creates a new ITA study day folder with teoria.md, exercicios.md, and
  gabarito.md from templates, then appends a checklist link on FASE_n.md.
  Use when the producer asks to add a study day or scaffold dia-NN under fase-n.
disable-model-invocation: true
---

# Create study day

## Inputs to confirm

- Phase number (`1` | `2` | `3`)
- Subject folder (`fisica` | `matematica` | `quimica` | `portugues` | `ingles`)
- Day number `NN` and kebab `slug`
- Title and Meta (PT-BR)
- Optional YouTube URL and draft content

## Steps

1. Read `templates/teoria.md`, `templates/exercicios.md`, `templates/gabarito.md`.
2. Create folder `fase-<n>/<subject>/dia-NN-slug/`.
3. Write the three files with cross-nav links.
4. Append to `FASE_<n>.md`:

   `- [ ] [Dia NN — Título](fase-<n>/<subject>/dia-NN-slug/teoria.md)`

5. Do not create `HOJE.md`. Do not commit unless asked.

## Checklist

```
- [ ] Folder with teoria.md, exercicios.md, gabarito.md
- [ ] Phase index points to teoria.md
- [ ] No PII
- [ ] Naming matches dia-NN-slug/
```
