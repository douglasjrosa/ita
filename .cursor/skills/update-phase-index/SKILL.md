---
name: update-phase-index
description: >-
  Synchronizes FASE_n.md checklists after study day folders are added, renamed,
  reordered, or removed. Use when fixing phase indexes or repairing checklist links.
disable-model-invocation: true
---

# Update phase index

## Steps

1. List day folders under `fase-<n>/<subject>/` matching `dia-*` that contain `teoria.md`.
2. Open `FASE_<n>.md`.
3. Rebuild or patch each subject section so every day has one checklist line to `teoria.md`.
4. Preserve `[x]` vs `[ ]` when only fixing paths/titles; ask before resetting progress marks.
5. Keep subject order: Física, Matemática, Química, Português, Inglês.
6. Do not commit unless asked.

## Link form

```markdown
- [ ] [Dia NN — Título](fase-n/subject/dia-NN-slug/teoria.md)
```

## Checklist

```
- [ ] All day folders linked via teoria.md
- [ ] No orphan rows pointing at missing files
- [ ] Paths work from repo root (Docsify)
```
