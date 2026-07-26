# Roadmap — ITA study material (producer)

Master plan for complementary ITA entrance-exam preparation. Student-facing pages are in PT-BR on GitHub Pages. This file is producer meta in English.

## Principles

- **Practice over library:** short `teoria.md`, printable `exercicios.md`, worked `gabarito.md`.
- **Decoupled from school:** phase checklists are the curriculum spine, not the school calendar.
- **Pages = consume:** the student reads and prints from Docsify/GitHub Pages only.
- **Cursor + NotebookLM = factory:** production tools for the parent/producer; not the student’s daily apps.
- **No PII** in the public repo (no student name, no school name).
- **No `HOJE.md`:** use perennial `FASE_1.md` / `FASE_2.md` / `FASE_3.md` checklists.
- **Day = folder:** `fase-n/<subject>/dia-NN-slug/{teoria,exercicios,gabarito}.md`.

## Phases (high level)

| Phase | Name | Intent |
|-------|------|--------|
| 1 | Foundation | Solid bases; no ITA full-mock marathon |
| 2 | Depth | Finish program depth; discursive practice |
| 3 | Intensity | Timed mocks; 2nd-phase focus; exam rhythm |

## Curriculum map (done)

Day-folder backlog for all subjects/phases: [`docs/curriculum-map.md`](docs/curriculum-map.md) (~216 days).

- Folders exist with `.gitkeep` (except Phase 1 Physics days 01–02, which already have lesson files).
- Lesson Markdown (`teoria` / `exercicios` / `gabarito`) is authored in **per-day future plannings**.

## Definitions of done

### Infra v1 done

- Folder tree, templates, Docsify Pages shell
- README + FASE_1/2/3 + PROGRAMA + roadmap + producer guide
- Example day(s) only
- Cursor production rules and skills

### Curriculum folders done

- Full day-folder tree across phases 1–3
- `docs/curriculum-map.md` + updated `FASE_*.md`
- No bulk lesson content yet

### Phase ready to fill with lesson files

- Curriculum folders done
- Pick one `dia-NN-slug` and run a focused content planning

## Explicit non-goals (now)

- Authoring all lesson Markdown at once
- Full mining of all past ITA exams into solved banks
- Student tutor rules/skills in Cursor
- Custom study apps / Obsidian / Google Docs as student platform

## Later plannings (suggested)

1. Author Phase 1 Physics days 03+ (and refresh 01–02 if needed)
2. Author Phase 1 Mathematics / Chemistry day batches
3. Past-exam analysis protocol under `provas/`
4. Optional Docsify print CSS for exercises-only printing
