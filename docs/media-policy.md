# Media policy (images and figures)

How to include figures in day materials for Docsify + print.

## Where files live

Put assets **inside the day folder**:

```text
fase-n/<subject>/dia-NN-slug/
  teoria.md
  exercicios.md
  gabarito.md
  media/
    figura-01.svg      # preferred for diagrams
    figura-02.png      # photos / screenshots
    LICENSE.txt        # optional attribution notes for third-party files
```

Markdown reference (relative path):

```markdown
![Descrição acessível da figura](media/figura-01.svg)
```

## What to prefer

| Need | Format | Notes |
|------|--------|--------|
| Graphs, vectors, circuits, geometry | **SVG** (self-authored) or KaTeX | Scales on screen and A4 print |
| Simple process diagrams | Describe in text + KaTeX first | Avoid image if text is enough |
| Photo / screenshot | PNG or WebP | Keep width reasonable (~800–1200 px) |
| Third-party figure | Only if license allows | Prefer Wikimedia Commons / public domain; credit in `media/LICENSE.txt` and in chat sources |

## What to avoid

- Hotlinking images from random websites (breaks offline/print; copyright risk)
- Huge unoptimized PNGs in git
- Decorative images with no teaching purpose
- Screenshots of copyrighted textbook pages

## If the agent cannot create the file yet

1. Insert an HTML comment placeholder in the Markdown:

   `<!-- TODO media: gráfico v×t com três trechos de inclinações diferentes -->`

2. List the TODO under **Pendências** in the `/criar` chat report.
3. Producer may later: draw in Inkscape/Excalidraw/GeoGebra → export SVG → save under `media/`.

## Docsify

Relative `media/...` paths work with Docsify `relativePath: true` (resolved
from the current day Markdown file). Keep images next to the day files as above.

## Print (A4)

- SVG prints cleanly.
- For PNG, ensure contrast (black lines on white) for B&W printers.
- Do not rely on color alone to convey meaning.
- Site print CSS (`index.html` `@media print`) hides the Docsify sidebar and uses
  ~10 mm page margins so exercise pages use more of the sheet.
- On phones, also check the print dialog: disable headers/footers if offered,
  and prefer “A4” paper size.
