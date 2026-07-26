# Producer guide

How to create and publish material for this repository. Student consumption is GitHub Pages (Docsify) only.

## Roles

| Role | Tools | Duty |
|------|-------|------|
| Producer | Cursor, NotebookLM | Write/curate Markdown, maintain phase indexes |
| Student | Browser (Pages), paper | Read theory, print exercises, solve, then gabarito |

Do not configure Cursor or NotebookLM as the student’s daily study apps.

## Language and privacy

- **Student-facing pages** (`README.md`, `FASE_*.md`, `fase-*/**`, `PROGRAMA.md`): **PT-BR**.
- **Producer docs** (`roadmap.md`, this guide, `provas/README.md`, `.cursor/**`): **English**.
- **No PII:** never put the student’s name or school name in the repo.

## Day folder contract

Path:

```text
fase-n/<subject>/dia-NN-slug/
  teoria.md
  exercicios.md
  gabarito.md
```

| File | Content |
|------|---------|
| `teoria.md` | Meta, media links (YouTube), definition + up to 2 examples; nav to siblings |
| `exercicios.md` | Printable A4 exercises with blank resolution space; no long theory |
| `gabarito.md` | Answers + worked solution, tips, pitfalls, reasoning jumps; not official ITA keys |

Phase checklist links point to **`teoria.md`** (day entry).  
Do not create `HOJE.md`. Do not invent official ITA answer keys.

Templates: `templates/teoria.md`, `templates/exercicios.md`, `templates/gabarito.md`.

## Math (KaTeX via Docsify)

Use `$inline$` and `$$display$$` only. Do not use LaTeX `\(...\)` / `\[...\]` delimiters — Docsify-KaTeX will not render them and `\Delta` will show as raw text.

## Phase index contract

`FASE_n.md` is perennial: task-list checkboxes + links to each day’s `teoria.md`.  
“What next?” = first unchecked item. Update the index whenever you add, rename, or reorder days (skill: `update-phase-index`).

## NotebookLM protocol (production only)

1. Create one NotebookLM notebook per subject or module.
2. Upload sources: official ITA program PDF, your notes, candidate YouTube URLs.
3. Ask for outline, key points, and exercise ideas.
4. Paste into Cursor and run `/notebooklm-to-day` or `/create-study-day`.
5. Review facts; then publish when you choose to commit/push.

NotebookLM is not a runtime dependency of the site.

## Cursor skills (invoke explicitly)

| Skill | Use when |
|-------|----------|
| `/create-study-day` | New day folder (3 files) + link on `FASE_n.md` |
| `/curate-day-links` | Normalize `## Mídias` on `teoria.md` |
| `/notebooklm-to-day` | Format NotebookLM paste into the three day files |
| `/update-phase-index` | Sync checklist after add/reorder/rename |

## GitHub Pages setup (Docsify)

This repo serves Docsify from the **repository root** (`index.html` + Markdown).

Docsify uses `relativePath: false` so sidebar links always resolve from the site
root. Keep sidebar targets root-absolute (e.g. `/README.md`, `/FASE_1.md`).
Phase checklist links stay as `fase-n/.../teoria.md` from the repo root.

1. Create a **public** GitHub repository (recommended for free Pages without GitHub Pro).
2. Push `main` (or your default branch).
3. GitHub → **Settings** → **Pages** → Source: **Deploy from a branch**.
4. Branch: `main`, folder: **/ (root)**.
5. Wait for the site URL; open it and confirm sidebar links to Fase 1–3.

### Local preview (optional)

From the repo root, any static server works, for example:

```bash
npx --yes serve -l 3000
```

Then open `http://localhost:3000`.

### Private repo risk

Free GitHub Pages on a **private** repo requires a paid GitHub plan.  
**v1 choice:** public repo + no sensitive content. If the repo must become private later: enable GitHub Pro for private Pages, or host the static site elsewhere.

## Commit policy

The Agent must not commit or push unless you explicitly ask.
