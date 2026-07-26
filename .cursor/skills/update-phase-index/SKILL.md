---
name: update-phase-index
description: >-
  Synchronizes FASE_n.md checklists after study days are added, renamed,
  reordered, or removed. Use when fixing phase indexes, renumbering days, or
  repairing broken checklist links.
disable-model-invocation: true
---

# Update phase index

## Steps

1. List day files under `fase-<n>/<subject>/` matching `dia-*.md`.
2. Open `FASE_<n>.md`.
3. Rebuild or patch each subject section so every day has one checklist line with a correct relative link.
4. Preserve `[x]` vs `[ ]` state when only fixing paths/titles; ask before resetting progress marks.
5. Keep subject order: Física, Matemática, Química, Português, Inglês.
6. Do not commit unless asked.

## Link form

```markdown
- [ ] [Dia NN — Título](fase-n/subject/dia-NN-slug.md)
```

## Checklist

```
- [ ] All day files linked
- [ ] No orphan checklist rows pointing at missing files
- [ ] Relative paths work from repo root (Docsify)
```
