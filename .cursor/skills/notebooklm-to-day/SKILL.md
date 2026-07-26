---
name: notebooklm-to-day
description: >-
  Formats NotebookLM (Gemini Notebook) producer paste into a study day folder
  (teoria.md, exercicios.md, gabarito.md). Use after NotebookLM export/outline
  or when the user pastes notes to turn into dia-NN content.
disable-model-invocation: true
---

# NotebookLM to day

NotebookLM is a **production** tool only. The student does not use it at runtime.

## Human checklist (producer)

```
- [ ] NotebookLM notebook has trusted sources (ITA program, notes, YouTube)
- [ ] Useful outline / key points / exercise ideas copied
- [ ] Phase, subject, day number, slug decided
```

## Agent steps

1. Read `templates/teoria.md`, `templates/exercicios.md`, `templates/gabarito.md`.
2. Map paste into the three files (definition + ≤2 examples; printable exercises; worked gabarito).
3. Flag uncertain facts (`_verify_`) instead of inventing official keys.
4. Create or update `fase-n/<subject>/dia-NN-slug/`.
5. Ensure `FASE_n.md` links to `.../teoria.md`.
6. Do not commit unless asked.

## Quality bar

- Short theory; A4-friendly exercises with blank space
- Worked gabarito with tips/pitfalls when useful
- YouTube under Mídias when present in sources
- No PII; no fabricated official ITA gabaritos
