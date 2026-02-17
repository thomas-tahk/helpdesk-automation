# Service Operations Workspace Prototype

Desktop-first UI prototype inspired by ServiceNow Service Operations Workspace (SOW). Built with Vite + React + TypeScript using pure CSS (no Tailwind). All data is in-memory mock data — no backend required.

## Quick Start

```bash
cd claude
npm install
npm run dev
```

Opens at `http://localhost:5173`. Use `npm run build` to produce a static build in `dist/`.

## Routes

| Path | Page |
|------|------|
| `/home` | Dashboard with donut chart widgets, upcoming items, quick links |
| `/incident/INC0010001` | Demo incident record (email outage scenario) |

The root path `/` redirects to `/home`. Unknown paths also redirect to `/home`.

## Project Structure

```
src/
├── app/              # App shell, routing, global context
│   ├── App.tsx       # Root layout with AppShell wrapper
│   ├── ModeContext.tsx  # Current/Proposed mode toggle (persisted to localStorage)
│   └── routes.tsx    # Route definitions
├── components/
│   ├── activity/     # ComposeBox (work notes/comments/email) + ActivityFeed
│   ├── fields/       # FieldRenderer + FieldSpec type definitions
│   ├── record/       # RecordHeader, RecordPageLayout, CollapsibleSection
│   ├── shell/        # TopBar, LeftNavRail, AppShell
│   └── tools/        # ToolRail + panel components (Record Info, Templates, etc.)
├── data/             # Mock data files (one per record)
├── pages/            # Page-level components (Home, Incident)
└── styles/
    ├── tokens.css    # Design tokens (colors, spacing, typography, layout)
    └── global.css    # All component styles
```

## Key Patterns

### Design Tokens
All colors, spacing, font sizes, and layout dimensions are CSS custom properties in `tokens.css`. Change the look and feel by editing tokens — no need to hunt through component styles.

### Field Rendering
Form fields use a generic `FieldSpec` type:
```ts
{ key: 'caller', label: 'Caller', type: 'lookup' }
```
`FieldRenderer` handles rendering based on `type`: text, textarea, select, readonly, lookup, datetime, checkbox.

### Collapsible Sections
`CollapsibleSection` uses CSS `grid-template-rows: 0fr/1fr` for smooth expand/collapse animation. Accepts an optional `badge` prop for inline status indicators.

### Three-Column Layout
`RecordPageLayout` renders left (form fields) / middle (activity) / right (tool panel + rail). Column widths are draggable via resize handles between columns.

### Mode Context
`useMode()` returns `{ mode, setMode }` where mode is `'current' | 'proposed'`. Persisted to localStorage. The Assignment section auto-opens in Proposed mode.

## Mock Data Conventions

This prototype uses fake identities only:
- `123456` — generic staff member
- `555555` — generic student
- `777777` — generic external user

## Extending: Adding a New Record Type

1. Create a mock data file in `src/data/` (e.g., `request_REQ0010001.ts`) with fields object and seed activity items.
2. Create a page in `src/pages/` that imports the data and composes `RecordHeader` + `RecordPageLayout` with `CollapsibleSection` + `FieldRenderer`.
3. Define your field sections as `FieldSpec[]` arrays matching the record's fields.
4. Add the route in `src/app/routes.tsx`.
5. Optionally add a nav link in `LeftNavRail.tsx` or `Home.tsx`.

## Feature Roadmap

See `docs/feature-checklist.md` for the full list of implemented features, what needs visual verification, and what's pending screenshots/specs.
