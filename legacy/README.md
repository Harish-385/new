# Legacy scripts and data dumps

Archived one-off scripts and data files from earlier data scraping, migration,
and cleanup work on this project. None of these are referenced by the app
build (`vite.config.ts`, `tsconfig.json`, `package.json` scripts) or by
anything under `src/`, `public/`, or `backend/` — they were moved here as-is
to keep the repo root clean for the team.

Nothing in these files was edited during the move, only relocated.

## If you ever need to re-run one of these

- Most read/write files using a plain relative path (e.g. `'src/components/...'`,
  `'ad-course-material.html'`). Those only resolve correctly if you run the
  script with this `legacy/` folder as your working directory:
  `cd legacy && node some_script.cjs`.
- A few (`analyze_*.cjs`, `consolidate_duplicates.cjs`, `execute_strict_cleanup.cjs`,
  `extract_missing_local_faculty.cjs`, `fix_admission_bug.cjs`,
  `scrape_aids_course_material.cjs`, `scrape_all_faculty.cjs`) build paths with
  `__dirname` and expect `public/`, `src/`, or `backend/` to be siblings — i.e.
  they expect to sit at the repo root. These won't find those folders from here;
  treat them as historical reference rather than runnable.

`scripts/` at the repo root is unrelated and untouched — its own scripts still
depend on `original_dept.json`, `original_scraped.json`, and `peos_live.html`,
which is why those three files were left at the repo root instead of moving
here.
