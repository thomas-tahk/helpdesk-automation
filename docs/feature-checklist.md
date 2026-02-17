# SOW Prototype — Feature Checklist

---

## Needs Your Input (Screenshots / Specs)

These items are blocked until you provide reference screenshots or clarify expected behavior. Organized by where you'll find them in ServiceNow SOW.

### Home Page (`/home`)

| # | What's Needed | Where on Screen |
|---|--------------|-----------------|
| 1 | **Widget card click-through views** — What list/table appears when you click one of the donut chart cards (My Work, Unassigned, etc.)? Is it a table, card list, or something else? | Center area — the 4 metric cards below the greeting |

### Incident Page (`/incident/INC0010001`)

| # | What's Needed | Where on Screen |
|---|--------------|-----------------|
| 2 | **Details tab content** — What fields/sections appear under the "Details" tab? | Record header tab bar → "Details" tab → left column below tabs |
| 3 | **Related Records tab content** — What related record types are shown? (Incident Tasks, Change Requests, Problems, etc.) | Record header tab bar → "Related records" tab → left column below tabs |
| 4 | **State badge in record header** — Does your SOW show a state badge (e.g. "In Progress") near the record title or header area? If so, where exactly? | Record header area — near title / record number |
| 5 | **Templates panel** — Does the current templates list/layout match what you see? Verify the Favorites/My Templates/All tabs and item rows. | Right column → click the document icon (📄) in the salmon tool strip |
| 6 | **Recommendations panel** — Do the KB article and resolution note cards match your SOW layout? | Right column → click the compass icon (🧭) in the salmon tool strip |

### Global / Multiple Pages

| # | What's Needed | Where on Screen |
|---|--------------|-----------------|
| 7 | **Proposed mode UI differences** — What changes visually when you switch to "Proposed" mode? (AI suggestion highlights, field diffs, extra panels, etc.) | Top bar → "Current / Proposed" toggle → observe changes across the page |
| 8 | **Additional tool rail panels** — Agent Assist, Collaborate, and Email Templates icons exist in the strip but have no panel content yet. Screenshots of each. | Right column → salmon tool strip → the icons that currently do nothing on click (sparkle, users, mail) |
| 9 | **List/table views** — What does a ticket list page look like? (Accessed from left nav "Lists" icon or other navigation) | Left nav rail → Lists icon (2nd from top) |
| 10 | **Search functionality** — What happens when you type in the global search bar? Dropdown? Dedicated results page? | Top bar → search input field |

### Left Column — Verify Scrolling

| # | What's Needed | Where on Screen |
|---|--------------|-----------------|
| 11 | **Field overflow / scroll behavior** — Resize your browser narrower and expand all collapsible sections. Confirm fields don't get clipped and the column scrolls properly. | Incident page → left column → expand all sections, then shrink the window |

---

## Implemented & Complete

These features are built and don't need further input unless something looks off when you visually review.

### App Shell (Global Chrome)

- Top bar: logo, nav links (All/Favorites/History/Workspaces), centered title pill
- Top bar: mode toggle switch (Current / Proposed)
- Top bar: search bar, settings/help/bell icons, avatar
- Left nav rail: 6 icons (Home, Lists, Tasks, People, Reports, Settings)
- Left nav rail: active state highlight

### Home Page (`/home`)

- Greeting card with avatar
- 4 donut-chart widget cards with hover effect (clickable, logs to console)
- Sidebar: Upcoming section with Today/Tomorrow tabs
- Sidebar: Quick links section
- Link to incident record from sidebar

### Incident Page — Record Header

- Editable title input
- Record number + assigned-to tooltip on hover
- Save / Resolve / More actions buttons
- Overview / Details / Related Records tabs (clickable, Details & Related show placeholders)

### Incident Page — Left Column (Form Fields)

- Summary section: Short description, Caller (lookup), Contact type (select)
- Impact section: Impact (1–4), Urgency (1–4), Priority (auto-calculated, readonly)
- Assignment section: Assignment group, Assigned to, Watch list
- Cause & Resolution section: Probable cause, Resolution notes (textareas)
- Collapsible sections with chevron toggle and edit pencil icon
- Column resizable via drag handle
- Assignment section auto-opens in Proposed mode

### Incident Page — Middle Column (Activity)

- Compose box with 3 tabs: Work notes (yellow bg, lock icon), Additional comments, Email
- Post button adds new item to activity feed
- Activity feed with avatar initials, type labels, timestamps
- Color-coded entries by type (system/comment/note/field-change/email)
- Filter/sort/search toolbar (visual only)
- Column resizable via drag handle

### Incident Page — Right Column (Tool Rail + Panels)

- Tool rail: 8 icons on salmon-colored strip
- Active panel indicator (left border highlight)
- Panel: Record Info — SLAs, Caller card, Assigned to card, Quick facts
- Panel: Templates — Favorites/My Templates/All tabs, star icons, expandable preview
- Panel: Attachments — empty state with upload prompt
- Panel: Recommendations — KB article card, resolution note cards
- Skeleton loading on panel switch
- Column resizable via drag handle

---

## How to Provide Screenshots

1. Navigate to the relevant screen in ServiceNow SOW
2. Take a screenshot (full page or the relevant section)
3. Drop the image in the `img/` folder with a descriptive name, e.g.:
   - `img/details-tab.png`
   - `img/widget-click-list.png`
   - `img/proposed-mode-diff.png`
4. Let me know which screenshots are ready and I'll update the prototype to match
