# Chen-Ye Hong — Personal Academic Website

PhD application personal website. Live at **https://hchenye0503.github.io/**

Built from a Claude Design handoff ("Academic Site — Classic"), implemented as a static site (plain HTML/CSS/JS) hosted on GitHub Pages (deployed via GitHub Actions on every push to `main`).

## Structure

```
index.html          — single page, five sections (Home / About / Research / Publications / Community)
css/style.css       — all styles
js/main.js          — hash-based navigation + research tag filter
project_figure/     — research project figures (see its README for expected filenames)
photo/              — portrait + community photos
files/              — cv.pdf and other downloadable documents
```

## Updating content

1. Drop images/PDFs into `project_figure/`, `photo/`, `files/` using the filenames listed in each folder's README — the site picks them up automatically (placeholders show until the file exists).
2. Edit text directly in `index.html`.
3. Commit and push to `main`; GitHub Actions redeploys automatically.

## Research page: tags & projects

**Editing tags** — each project's tags live inside its `<article class="project">` block in `index.html`:

```html
<div class="tags">
  <span class="tag">BCI</span>
  <span class="tag">Computer Vision</span>
</div>
```

Add or remove `<span class="tag">…</span>` lines freely. The filter bar at the top of the Research page is **generated automatically** from whatever tags exist — no other place to update. Use identical spelling for tags shared across projects, or they become separate filters.

**Adding a project** — copy an entire `<article class="project"> … </article>` block inside `<div id="projects">`, then edit: the number (`project-num`), title, tags, affiliation line, description, and the figure filenames (`project_figure/pN_*.png`). Remove a project by deleting its block. There is no limit on project count — the tag filter keeps the page browsable.

See `CONTENT_CHECKLIST.md` (one level up, outside the repo) for the list of content still to fill in.
