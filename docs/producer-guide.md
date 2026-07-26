# Producer guide

How to create and publish material for this repository. Student consumption is GitHub Pages (Docsify) only.

## Roles

| Role | Tools | Duty |
|------|-------|------|
| Producer | Cursor, NotebookLM | Write/curate Markdown, maintain phase indexes |
| Student | Browser (Pages), paper | Read, print exercises, solve, check `FASE_n` |

Do not configure Cursor or NotebookLM as the student’s daily study apps.

## Language and privacy

- **Student-facing pages** (`README.md`, `FASE_*.md`, `fase-*/**`, `PROGRAMA.md`): **PT-BR**.
- **Producer docs** (`roadmap.md`, this guide, `provas/README.md`, `.cursor/**`): **English**.
- **No PII:** never put the student’s name or school name in the repo.

## Day file contract

Path: `fase-n/<subject>/dia-NN-slug.md`  
Required sections (PT-BR headings): `Meta`, `Links`, `Teoria`, `Exercícios`, `Gabarito`.  
Whenever possible, include a curated YouTube lesson under `Links`.  
Do not create `HOJE.md`. Do not invent official ITA answer keys.

## Phase index contract

`FASE_n.md` is perennial: task-list checkboxes + relative links to day files.  
“What next?” = first unchecked item. Update the index whenever you add, rename, or reorder days (skill: `update-phase-index`).

## NotebookLM protocol (production only)

1. Create one NotebookLM notebook per subject or module.
2. Upload sources: official ITA program PDF, your notes, candidate YouTube URLs.
3. Ask for outline, key points, and exercise ideas.
4. Paste the useful output into Cursor and run `/notebooklm-to-day` or `/create-study-day`.
5. Review facts; then publish when you choose to commit/push.

NotebookLM is not a runtime dependency of the site.

## Cursor skills (invoke explicitly)

| Skill | Use when |
|-------|----------|
| `/create-study-day` | New day from template + link on `FASE_n.md` |
| `/curate-day-links` | Normalize `## Links` (YouTube when possible) |
| `/notebooklm-to-day` | Format NotebookLM paste into day template |
| `/update-phase-index` | Sync checklist after add/reorder/rename |

## GitHub Pages setup (Docsify)

This repo serves Docsify from the **repository root** (`index.html` + Markdown).

Docsify uses `relativePath: false` so sidebar links always resolve from the site
root. Keep sidebar targets root-absolute (e.g. `/README.md`, `/FASE_1.md`).
Phase checklist links stay as `fase-n/...` from the repo root.

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
