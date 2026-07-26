---
name: notebooklm-to-day
description: >-
  Formats NotebookLM (Gemini Notebook) producer paste into a study day Markdown
  file using the day template. Use after NotebookLM export/outline, or when the
  user pastes NotebookLM notes to turn into dia-NN content.
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

1. Read [templates/day.md](templates/day.md).
2. Map the paste into Meta, Links, Teoria, Exercícios, Gabarito (PT-BR headings).
3. Flag uncertain facts explicitly (e.g. `_verify_`) instead of inventing official keys.
4. Create or update `fase-n/<subject>/dia-NN-slug.md`.
5. Ensure `FASE_n.md` lists the day (create link if missing).
6. Do not commit unless asked.

## Quality bar

- Short theory; paper-first exercises
- YouTube under Links when present in the paste/sources
- No PII; no fabricated official ITA gabaritos
