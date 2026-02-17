# SOW Prototype — Feature Verification Checklist

Use this checklist to track what's implemented, what needs visual verification via screenshots, and what's still pending. When you have reference screenshots for an area, share them so the UI can be refined to match.

---

## App Shell (Global Chrome)

| Feature | Status | Screenshots Needed? |
|---------|--------|-------------------|
| Top bar: logo, nav links, centered title pill | Done | No — matches reference |
| Top bar: mode toggle (Current / Proposed) | Done | No |
| Top bar: search bar, settings/help/bell icons, avatar | Done | No |
| Left nav rail: 6 icons (Home, Lists, Tasks, People, Reports, Settings) | Done | No |
| Left nav rail: active state highlight | Done | No |

---

## Home Page

| Feature | Status | Screenshots Needed? |
|---------|--------|-------------------|
| Greeting card with avatar | Done | No |
| 4 donut-chart widget cards (My Work, Unassigned, etc.) | Done | No |
| Widget cards are clickable (hover effect) | Done | **Yes** — need screenshots of the list view that opens when clicking a widget card |
| Sidebar: Upcoming section (Today/Tomorrow tabs) | Done | No |
| Sidebar: Quick links section | Done | No |
| Link to incident record from sidebar | Done | No |

---

## Incident Page — Record Header

| Feature | Status | Screenshots Needed? |
|---------|--------|-------------------|
| Editable title input | Done | No |
| Record number + assigned-to tooltip | Done | No |
| State badge (e.g. "In Progress") | Done | No |
| Save / Resolve / More actions buttons | Done | No |
| Overview / Details / Related Records tabs | Done (clickable, with placeholders) | **Yes** — need screenshots of Details tab and Related Records tab content |

---

## Incident Page — Left Column (Form Fields)

| Feature | Status | Screenshots Needed? |
|---------|--------|-------------------|
| Summary section: Short description, Caller, Contact type | Done | No |
| Impact section: Impact (1-4), Urgency (1-4), Priority (auto) | Done | No |
| Assignment section: Group, Assigned to, Watch list | Done | No |
| Cause & Resolution section: Probable cause, Resolution notes | Done | No |
| Collapsible sections (chevron toggle, edit pencil) | Done | No |
| Column is resizable via drag handle | Done | No |
| Scrolling when content overflows | Done | Verify — resize browser to confirm vertical scroll works |

---

## Incident Page — Middle Column (Activity)

| Feature | Status | Screenshots Needed? |
|---------|--------|-------------------|
| Compose box: Work notes tab (yellow bg, lock icon) | Done | No |
| Compose box: Additional comments tab | Done | No |
| Compose box: Email tab | Done | No |
| Post button (adds to activity feed) | Done | No |
| Activity feed: avatar initials, type labels, timestamps | Done | No |
| Activity feed: color-coded by type | Done | No |
| Activity feed: filter/sort/search toolbar | Done (visual only) | No |
| Column is resizable via drag handle | Done | No |

---

## Incident Page — Right Column (Tool Rail + Panels)

| Feature | Status | Screenshots Needed? |
|---------|--------|-------------------|
| Tool rail: 8 icons on salmon strip | Done | No |
| Tool rail: active indicator (left border) | Done | No |
| Panel: Record Info (SLAs, Caller, Assigned to, Quick facts) | Done | No |
| Panel: Templates (Favorites/My/All tabs, expand preview) | Done | **Maybe** — verify templates list matches reference |
| Panel: Attachments (empty state with upload prompt) | Done | No |
| Panel: Recommendations (KB articles, resolution notes) | Done | **Maybe** — verify card layout matches reference |
| Panel: skeleton loading on switch | Done | No |
| Column is resizable via drag handle | Done | No |

---

## Mode Toggle (Current vs. Proposed)

| Feature | Status | Screenshots Needed? |
|---------|--------|-------------------|
| Toggle switch in top bar | Done | No |
| Assignment section defaults open when mode = "proposed" | Done | No |
| Additional proposed-mode differences | Pending | **Yes** — need screenshots showing what changes in Proposed mode (field highlights, AI suggestions, etc.) |

---

## Not Yet Started (Need Screenshots / Specs)

These areas need reference material before implementation:

1. **Widget card click-through views** — What list layout appears when clicking a home page widget? Table? Cards?
2. **Details tab content** — What fields/sections appear in the incident Details tab?
3. **Related Records tab content** — What related record types are shown? (Incident Tasks, Change Requests, Problems, etc.)
4. **Proposed mode UI differences** — What visual changes occur when switching to Proposed mode? (AI suggestion highlights, field diff indicators, etc.)
5. **Additional tool rail panels** — Agent Assist, Collaborate, Email Templates panels (currently icons only, no panel content)
6. **List/table views** — For the Lists nav item and any ticket list pages
7. **Search functionality** — Global search behavior and results display

---

## How to Provide Screenshots

1. Navigate to the relevant screen in ServiceNow SOW
2. Take a screenshot (full page or relevant section)
3. Drop the image in the `img/` folder with a descriptive name, e.g.:
   - `img/details-tab.png`
   - `img/widget-click-list.png`
   - `img/proposed-mode-diff.png`
4. Let me know which screenshots are ready and I'll update the prototype to match
