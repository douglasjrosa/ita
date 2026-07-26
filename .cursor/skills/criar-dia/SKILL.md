---
name: criar-dia
description: >-
  Researches a study-day topic and writes teoria.md, exercicios.md, and
  gabarito.md. Use when the user runs /criar or passes a short path like
  fase-1/fisica/dia-01 (day number only; resolve the full dia-NN-slug folder).
disable-model-invocation: true
---

# Create curated day content (`/criar`)

## Input

Short path only: `fase-n/<subject>/dia-NN`  
Example: `fase-1/fisica/dia-01`

Do **not** require the slug. Resolve it:

1. Glob `fase-n/<subject>/dia-NN-*`
2. Expect exactly one folder; stop if zero or ambiguous
3. Use that folder + matching row in `docs/curriculum-map.md`

## Read first

- `templates/teoria.md`
- `templates/exercicios.md`
- `templates/gabarito.md`
- `docs/curriculum-map.md` (row for this day)
- `docs/producer-guide.md` and `docs/media-policy.md`
- Existing files in the resolved folder (if any)

## Workflow

1. Resolve short path → full `dia-NN-slug` directory.
2. Research with live web tools when possible (ITA program, textbooks, reputable videos).
3. Write/overwrite the three Markdown files in PT-BR for the student.
4. Add local images under `media/` only when needed; otherwise `<!-- TODO media: ... -->`.
5. Do not commit unless asked.
6. End the chat reply with: resolved path, files written, numbered sources, NotebookLM suggestions, pendencies.

## Content rules

- Math: `$inline$` / `$$display$$` only
- Theory: Meta → Definição → Exemplos (≤2) → Nesta lição → Mídias
- Exercises: A4 blank space only (no intro/nav/labels)
- Gabarito: worked solutions; never fake official ITA keys
- No PII; no `HOJE.md`

## Related

Slash command: `.cursor/commands/criar.md`  
Also useful: `curate-day-links`, `notebooklm-to-day`, `update-phase-index`
