---
name: criar-dia
description: >-
  Advances the next pending lesson per subject using index.json. Use when the
  user runs /criar with no path argument.
disable-model-invocation: true
---

# Create the next pending day pack (`/criar`)

## Input

No path. Read `index.json` at the repo root.

For each subject in this order — `fisica`, `ingles`, `matematica`, `portugues`,
`quimica` — pick the first `"pendente"` lesson, scanning `fase-1` then
`fase-2` then `fase-3`. Skip a subject if nothing is pending.

## Plan first

Create TODOs before writing files:

1. One TODO per subject (resolved `fase-n/<subject>/dia-NN-slug/`).
2. Last TODO: set those lessons to `"feito"` in `index.json`, then commit and
   push to production (`origin/main`; also `origin/master` if it exists).

In Plan mode, wait for confirmation. `/criar` is an explicit commit/push request.

## Read

- `templates/teoria.md`, `templates/exercicios.md`, `templates/gabarito.md`
- Matching row in `docs/curriculum-map.md` and `FASE_n.md`
- `docs/producer-guide.md`, `docs/media-policy.md`
- Existing files in the day folder (if any)

## Per-lesson workflow

Research (ITA program, textbooks, reputable videos; YouTube **PT-BR** first,
English only if none — see `docs/media-policy.md`). Write/overwrite the three
PT-BR Markdown files. Local `media/` only when needed; otherwise
`<!-- TODO media: ... -->`. Never fake official ITA keys. No `HOJE.md`.

## Chat reply

Per subject: path, files, numbered sources, NotebookLM suggestions, pendencies.
Then: `index.json` keys changed, commit SHA, remotes pushed.

## Related

Slash command: `.cursor/commands/criar.md`  
Also useful: `curate-day-links`, `notebooklm-to-day`, `update-phase-index`
