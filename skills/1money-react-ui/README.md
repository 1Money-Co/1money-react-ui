# @1money/react-ui Skill Package (for Code Assistants)

This package contains a **Skill entry + Markdown references** for the internal UI kit `@1money/react-ui`.

- **Entry:** `references/README.md`
- **Foundation:** `references/Foundation/*` (tokens / spacing / typography)
- **Per-component docs:** `references/<Category>/<Component>.md`

## Primary rules (for assistants)

1. Prefer `@1money/react-ui` components; do **not** import from `primereact/*` directly unless the UI kit explicitly exposes it.
2. Follow Foundation tokens for colors; avoid hard-coded color values in business code.
3. Use component props to express variants/states (size/severity/disabled/loading/...) before adding custom styles.
4. If a needed capability is missing, extend the UI kit and update the corresponding Skills doc.

## Consistency Check

Run the automated reference structure check:

```bash
python3 skills/1money-react-ui/scripts/check-references.py
```
