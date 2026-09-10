#!/usr/bin/env python3
"""Sync FASE_n.md checklist marks from index.json lesson status."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX_PATH = ROOT / "index.json"
CHECKBOX_RE = re.compile(
    r"^(- \[)([ x])(\] \[[^\]]+\]\()"
    r"fase-(?P<phase>\d+)/(?P<subject>[^/]+)/(?P<slug>dia-[^/]+)/teoria\.md"
    r"\)$"
)


def load_index() -> dict:
    with INDEX_PATH.open(encoding="utf-8") as handle:
        return json.load(handle)


def status_for(index: dict, phase_key: str, subject: str, slug: str) -> str:
    try:
        return index[phase_key][subject][slug]
    except KeyError:
        return "pendente"


def sync_file(path: Path, index: dict) -> int:
    text = path.read_text(encoding="utf-8")
    changes = 0
    lines: list[str] = []

    for line in text.splitlines():
        match = CHECKBOX_RE.match(line)
        if not match:
            lines.append(line)
            continue

        phase_key = f"fase-{match.group('phase')}"
        subject = match.group("subject")
        slug = match.group("slug")
        done = status_for(index, phase_key, subject, slug) == "feito"
        mark = "x" if done else " "
        if match.group(2) != mark:
            changes += 1

        href = f"{phase_key}/{subject}/{slug}/teoria.md"
        lines.append(f"{match.group(1)}{mark}{match.group(3)}{href})")

    path.write_text("\n".join(lines) + ("\n" if text.endswith("\n") else ""), encoding="utf-8")
    return changes


def main() -> int:
    index = load_index()
    total = 0

    for phase_path in sorted(ROOT.glob("FASE_*.md")):
        changed = sync_file(phase_path, index)
        total += changed
        print(f"{phase_path.name}: {changed} checkbox(es) updated")

    if total == 0:
        print("All FASE checkboxes already match index.json.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
