# Service Operations Workspace Prototype

Desktop-first UI prototype inspired by ServiceNow Service Operations Workspace. Uses Vite + React + TypeScript with in-memory mock data.

## Run

```bash
npm install
npm run dev
```

## Routes

- `/home` — overview dashboard
- `/incident/INC0010001` — main demo record page

## Mock data conventions

- This prototype uses fake identities only.
- Generic IDs used in seeded data:
  - `123456` for staff
  - `555555` for student
  - `777777` for external user

## Extending record types

To add new record types (Interaction/REQ/RITM/Task), reuse the same record layout pattern:

- Create a new mock data file under `src/data/` with the record fields and seed activity.
- Add a new page under `src/pages/` that imports the data and renders `RecordHeader` + `RecordPageLayout`.
- Define field sections using `FieldSpec[]` and pass them through `CollapsibleSection` + `FieldRenderer`.
- Add the route in `src/app/routes.tsx` and a link from the Home page if needed.
