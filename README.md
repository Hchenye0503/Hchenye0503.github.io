# Chen-Ye Hong — Personal Academic Website

PhD application personal website. Live at **https://hchenye0503.github.io/**

Built from a Claude Design handoff ("Academic Site — Classic"), implemented as a static site (plain HTML/CSS/JS) hosted on GitHub Pages.

## Structure

```
index.html          — single page, five sections (Home / About / Research / Publications / Community)
css/style.css       — all styles
js/main.js          — hash-based section navigation
project_figure/     — research project figures (see its README for expected filenames)
photo/              — portrait + community photos
files/              — cv.pdf, research_statement.pdf
```

## Updating content

1. Drop images/PDFs into `project_figure/`, `photo/`, `files/` using the filenames listed in each folder's README — the site picks them up automatically (placeholders show until the file exists).
2. Edit text directly in `index.html`.
3. Commit and push to `main`; GitHub Pages redeploys automatically.

See `CONTENT_CHECKLIST.md` (one level up, outside the repo) for the full list of content still to fill in.
