# ServiceNow Efficiency & Navigation Guide
## For IT Helpdesk Agents (T1 Support)

**Purpose:** Comprehensive guide to maximize efficiency in ServiceNow through keyboard navigation, shortcuts, and best practices. Special focus on accessibility features for all team members.

**Target Audience:** Helpdesk agents, especially those transitioning from other ticketing systems (e.g., Cherwell)

---

## Table of Contents

1. [Quick Start: Essential Shortcuts](#quick-start-essential-shortcuts)
2. [Enabling Keyboard Shortcuts](#enabling-keyboard-shortcuts)
3. [Complete Keyboard Shortcuts Reference](#complete-keyboard-shortcuts-reference)
4. [Accessibility Features](#accessibility-features)
5. [Navigation Efficiency Tips](#navigation-efficiency-tips)
6. [Agent Workspace Best Practices](#agent-workspace-best-practices)
7. [Common Incident Management Workflows](#common-incident-management-workflows)
8. [URL Shortcuts & Navigation Tricks](#url-shortcuts--navigation-tricks)
9. [Team Implementation Plan](#team-implementation-plan)
10. [Additional Resources](#additional-resources)

---

## Quick Start: Essential Shortcuts

**These 5 shortcuts will immediately improve your speed:**

| Shortcut | Action | When to Use |
|----------|--------|-------------|
| `Ctrl+Alt+F` | Jump to Filter Navigator | Finding modules/apps without clicking |
| `Ctrl+Alt+G` | Global Search | Quick search for tickets, users, assets |
| `Ctrl+Alt+C` | Collapse/Expand Nav Menu | More screen space for ticket details |
| `Ctrl+S` | Save current form | Saving tickets without clicking |
| `Ctrl+Shift+J` | JavaScript Executor (when on form) | Advanced users only |

**Try these today:** Practice using `Ctrl+Alt+F` and `Ctrl+Alt+G` - these alone can save significant time.

---

## Enabling Keyboard Shortcuts

### Step 1: Access User Preferences

1. Click your **profile picture** (top-right corner)
2. Select **"Preferences"** from dropdown
3. OR type `sys_user_preference.list` in Filter Navigator

### Step 2: Enable Special Keyboard Shortcuts

1. In Preferences, find the **"Accessibility"** section
2. Toggle **"Enable Special Keyboard Shortcuts"** to **ON**
3. Optionally enable **"High Contrast Mode"** if needed
4. Click **Save**

### Step 3: View All Available Shortcuts

1. Click **profile picture** (top-right)
2. Select **"Keyboard shortcuts"**
3. This shows all out-of-the-box hotkeys available

---

## Complete Keyboard Shortcuts Reference

### Global Navigation Shortcuts

| Shortcut | Action | Description |
|----------|--------|-------------|
| `Ctrl+Alt+F` | Filter Navigator Focus | Places cursor in Filter Navigator, expands menu if collapsed |
| `Ctrl+Alt+C` | Collapse/Expand Nav | Toggles navigation menu to maximize content space |
| `Ctrl+Alt+G` | Global Search | Opens global search box |
| `Ctrl+Alt+I` | Impersonate User | Opens impersonation dialog (if you have rights) |
| `Esc` | Exit/Cancel | Closes dialogs, cancels operations |

### Form & Record Shortcuts

| Shortcut | Action | Description |
|----------|--------|-------------|
| `Ctrl+S` | Save | Saves current form/record |
| `Ctrl+Shift+S` | Save & Stay | Saves and keeps form open |
| `Alt+S` | Submit | Submits form (some configurations) |
| `Ctrl+Shift+J` | JavaScript Executor | Opens JS executor when on a form |
| `Tab` / `Shift+Tab` | Navigate Fields | Move forward/backward through form fields |

### List View Shortcuts

| Shortcut | Action | Description |
|----------|--------|-------------|
| `Ctrl+Click` | Multi-select | Select multiple records in list view |
| `Shift+Click` | Range Select | Select range of records |
| `Arrow Keys` | Navigate Rows | Move up/down through records |
| `Enter` | Open Record | Opens selected record |

### Accessibility Navigation

| Shortcut | Action | Description |
|----------|--------|-------------|
| `Tab` | Skip to Main Content | Tab from browser bar to access skip links |
| `Alt+Arrow Keys` | Navigate Sections | Move between form sections |
| `/` or `?` | Search Focus | Quick focus on search (some views) |

---

## Accessibility Features

### For Team Members with Visual Impairments

ServiceNow is designed to support WCAG 2.0 Level A standards and works with screen readers.

#### Supported Screen Readers

- **JAWS** (Windows)
- **NVDA** (Windows - free)
- **VoiceOver** (Mac)
- **TalkBack** (Android)
- **ZoomText** (Magnification)
- **Dragon** (Voice control)

#### Enabling Accessibility Features

**1. High Contrast Mode**
- User Preferences → Accessibility section
- Toggle "High Contrast Mode" ON
- Increases contrast for better visibility

**2. Keyboard-Only Navigation**
- All ServiceNow functionality is accessible via keyboard
- No mouse required
- Interactive content organized in logical tab order

**3. Skip Links**
- Press `Tab` from browser address bar
- "Skip to main content" link appears
- Bypasses navigation to get directly to ticket/form content
- Crucial for screen reader users

**4. Text Resizing**
- Browser zoom works with ServiceNow (`Ctrl+Plus/Minus`)
- Data visualization charts support text resizing
- Forms reflow appropriately

#### Best Practices for Screen Reader Users

**Navigating Forms:**
1. Use `Tab` to move through fields
2. Screen reader announces field labels and required status
3. Use `Shift+Tab` to go back
4. Arrow keys navigate within dropdown fields

**Navigating Lists:**
1. Screen reader announces column headers
2. Tab through list to hear record details
3. Enter opens selected record

**Quick Navigation:**
- Use heading navigation (H key in JAWS/NVDA) to jump between sections
- Use landmark navigation (D key for regions)
- ServiceNow uses proper semantic HTML for this

---

## Navigation Efficiency Tips

### 1. Use the Filter Navigator Effectively

**Instead of clicking through menus:**
- Press `Ctrl+Alt+F`
- Type partial name: "inc" for Incidents, "user" for User Administration
- Arrow keys to select, Enter to open

**Favorites:**
- Star frequently used modules
- Creates "Favorites" section in navigator
- Reduces time finding common areas

### 2. Master the Global Search (`Ctrl+Alt+G`)

**Quick ticket lookup:**
- `Ctrl+Alt+G` → type incident number → Enter
- Searches across all records, not just incidents
- Can search by user name, computer name, etc.

### 3. Collapse Navigation for More Space

- `Ctrl+Alt+C` collapses left navigation
- Gives more screen space for ticket details
- Especially useful with 3-monitor setup:
  - Monitor 1: RingCentral
  - Monitor 2: ServiceNow (full screen)
  - Monitor 3: Reference docs, Google Admin, etc.

### 4. Use Browser Shortcuts Too

| Shortcut | Action |
|----------|--------|
| `Ctrl+Tab` | Switch between browser tabs |
| `Ctrl+Shift+Tab` | Switch tabs backward |
| `Ctrl+W` | Close current tab |
| `Ctrl+T` | New tab |
| `Ctrl+L` | Focus address bar |
| `Alt+Left/Right` | Browser back/forward |

---

## Agent Workspace Best Practices

### Understanding Agent Workspace

Agent Workspace is ServiceNow's unified interface for agents - it consolidates all tools in one place to reduce app-switching.

**Key Features:**
- **Unified view:** Chat, calls, cases, knowledge all in one screen
- **Contextual info:** Related records, caller history visible without clicking
- **Quick actions:** Common tasks accessible via buttons
- **AI assistance:** Predictive categorization, knowledge suggestions

### Workspace Efficiency Tips

**1. Customize Your Layout**
- Drag-and-drop sections to your preferred order
- Pin frequently used tabs
- Hide sections you rarely use

**2. Use Quick Actions**
- Look for "Quick Actions" or action buttons at top of forms
- One-click common tasks (password reset, assign, close, etc.)
- Faster than navigating through menus

**3. Leverage Predictive Intelligence (if enabled)**
- AI suggests category/subcategory based on description
- Review suggestions before accepting
- Saves time on categorization

**4. Keep Knowledge Base Handy**
- Knowledge articles often appear in sidebar during ticket work
- Search KB while on call using built-in search
- Copy KB article links into work notes for documentation

### Reducing App-Switching Time

**Research shows agents spend up to 4 hours/week switching between apps.**

**Solutions:**
1. Keep all ServiceNow features in one browser window (multiple tabs)
2. Use second monitor for non-ServiceNow tools (Google Admin, PRTG)
3. Pin essential tabs in browser (ServiceNow queue, Google Admin)
4. Use browser bookmark folders for "Daily Tabs" (open all at once)

---

## Common Incident Management Workflows

### Workflow 1: Taking an Incoming Call

**Keyboard-optimized process:**

1. **Create new incident:**
   - `Ctrl+Alt+F` → type "incident" → Enter
   - Or use URL shortcut: `incident.do` in Navigator

2. **Fill out caller info:**
   - Tab through fields
   - Use Global Search (`Ctrl+Alt+G`) to find user quickly
   - Paste computer name if provided

3. **Take notes in Description:**
   - Tab to Description field
   - Type what user is describing
   - Don't worry about formatting during call - focus on understanding

4. **Quick categorization:**
   - Tab to Category field
   - Type first letters, use arrow keys to select
   - If Predictive AI enabled, review suggestions

5. **Save without closing:**
   - `Ctrl+S` to save
   - Keeps form open to add more notes
   - Incident number generated

6. **Add work notes as you troubleshoot:**
   - Tab to Work Notes field
   - Document steps taken
   - These are internal notes (user doesn't see)

7. **Update status:**
   - Tab to State field
   - Change to "In Progress", "Pending", or "Resolved"
   - `Ctrl+S` to save

8. **Close incident:**
   - Set State to "Resolved" or "Closed"
   - Fill Close Notes (required)
   - `Ctrl+S` to save

### Workflow 2: Working the Queue

**Efficient queue management:**

1. **Open your queue view:**
   - `Ctrl+Alt+F` → type "my incidents" → Enter
   - Or create custom view filtered to your assignment group

2. **Sort/filter:**
   - Click column headers to sort (Priority, Created, etc.)
   - Use filter icon to show only certain types
   - Save personalized filters for reuse

3. **Open incident:**
   - Click incident number
   - Or use arrow keys + Enter

4. **Quick updates:**
   - Make changes
   - `Ctrl+S` to save
   - Browser back button to return to list
   - Or `Ctrl+W` to close tab if opened in new tab

### Workflow 3: Password Reset (Most Common)

**Streamlined process:**

1. **Verify user:**
   - Confirm identity (security questions, employee ID, etc.)

2. **Open Active Directory tool or password reset form:**
   - `Ctrl+Alt+F` → type tool name
   - Or use custom ServiceNow catalog item if available

3. **Document in ticket:**
   - Work Note: "Password reset completed via Active Directory"
   - Set State: "Resolved"
   - Close Code: "Password Reset" (or appropriate category)
   - `Ctrl+S`

4. **Notify user:**
   - Confirm verbally if on call
   - Or use template email response

**Time savings:** With keyboard shortcuts, this takes ~30 seconds vs. 1-2 minutes clicking

### Workflow 4: Printer Troubleshooting

**Initial documentation:**

1. **Gather info during call:**
   - Printer model
   - Error message/behavior
   - Computer name
   - Location

2. **Document in Description field:**
   - Use consistent format for later searching:
   ```
   User: John Smith
   Computer: LAB-PC-042
   Printer: HP LaserJet 4250 (\\PRINTSERVER\LAB-HP01)
   Issue: Printer showing offline, 3 documents stuck in queue
   ```

3. **Remote session:**
   - Open BeyondTrust
   - Connect to computer
   - Document steps in Work Notes as you go

4. **Common checks to document:**
   - Print spooler service status
   - Network connectivity to print server
   - Driver version
   - Queue status
   - Test print result

5. **Resolution notes:**
   - What fixed it: "Restarted print spooler service, cleared queue, test print successful"
   - Set to Resolved
   - `Ctrl+S`

**Future automation opportunity:** Script to gather this info automatically during remote session (requires approval)

---

## URL Shortcuts & Navigation Tricks

### Direct URL Navigation

ServiceNow uses predictable URL patterns. Type these in the Filter Navigator:

**Format:** `[table_name].[action]`

### Incident Shortcuts

| Shortcut | Action |
|----------|--------|
| `incident.list` | Open incident list (same window) |
| `incident.LIST` | Open incident list (new tab) |
| `incident.do` | Create new incident (same window) |
| `incident.FORM` | Create new incident (new tab) |
| `incident.config` | Configure incident table settings |
| `incident.filter` | Empty list with filter options |

### Other Common Table Shortcuts

| Shortcut | Table |
|----------|-------|
| `sys_user.list` | User records |
| `cmdb_ci_computer.list` | Computer assets |
| `cmdb_ci_printer.list` | Printer assets |
| `kb_knowledge.list` | Knowledge articles |
| `task.list` | All tasks/tickets |

### Advanced: Filtering via URL

You can bookmark specific filtered views:

Example: Your assigned incidents
```
incident.list?sysparm_query=assigned_to=[YOUR_USER_ID]^state!=6^state!=7
```

**How to create:**
1. Set up filters in list view
2. Copy URL from address bar
3. Bookmark it
4. Opens that exact filtered view every time

---

## Team Implementation Plan

### Proposal for Your Supervisor

**Subject:** Improving Team Efficiency with ServiceNow Keyboard Navigation

**Problem Statement:**
- Team recently transitioned from Cherwell to ServiceNow
- Navigation learning curve affecting ticket processing time
- Extensive clicking required for common workflows
- Accessibility challenges for team members with visual impairments

**Proposed Solution:**
Implement keyboard-first navigation training for the team, focusing on:
1. Essential shortcuts (Ctrl+Alt+F, Ctrl+Alt+G, Ctrl+S)
2. Accessibility features for visually impaired team members
3. Efficient workflows for common ticket types
4. Custom templates for repetitive tasks (already in progress)

**Expected Benefits:**
- **Time savings:** 2-5 minutes per ticket (based on industry research)
- **Accessibility:** Equal efficiency for all team members regardless of visual ability
- **Consistency:** Standardized efficient workflows across team
- **Reduced fatigue:** Less clicking, more keyboard flow
- **Better documentation:** More time to write thorough notes

**Implementation Plan:**

**Phase 1: Quick Wins (Week 1)**
- Enable keyboard shortcuts in User Preferences (all team members)
- Print/post quick reference card at each workstation
- Practice 5 essential shortcuts daily

**Phase 2: Workflow Optimization (Weeks 2-3)**
- Document keyboard-optimized workflows for top 5 ticket types
- Practice during downtime between calls
- Share tips in team meetings

**Phase 3: Accessibility Support (Week 4)**
- Specific training for visually impaired team member(s)
- Screen reader setup and optimization
- Pair programming/shadowing to share techniques

**Phase 4: Continuous Improvement (Ongoing)**
- Collect team feedback on what's working
- Refine workflows based on real usage
- Explore automation opportunities within ServiceNow

**Resources Needed:**
- 1 hour team training session
- Printed quick reference cards
- This documentation shared with team
- Follow-up support for questions

**Success Metrics:**
- Average ticket handling time
- Team member feedback
- Accessibility compliance
- Fewer navigation-related questions

---

### Quick Reference Card (Print This)

```
╔════════════════════════════════════════════════════════╗
║         SERVICENOW KEYBOARD SHORTCUTS                  ║
║            Quick Reference Card                        ║
╠════════════════════════════════════════════════════════╣
║                                                        ║
║  ESSENTIAL SHORTCUTS:                                  ║
║  ─────────────────────────────────────────────────     ║
║  Ctrl+Alt+F    →  Filter Navigator (find anything)    ║
║  Ctrl+Alt+G    →  Global Search (find tickets/users)  ║
║  Ctrl+Alt+C    →  Collapse/Expand Navigation Menu     ║
║  Ctrl+S        →  Save Current Form                   ║
║                                                        ║
║  FORM NAVIGATION:                                      ║
║  ─────────────────────────────────────────────────     ║
║  Tab           →  Next Field                          ║
║  Shift+Tab     →  Previous Field                      ║
║  Arrow Keys    →  Navigate dropdown options           ║
║  Enter         →  Select/Submit                       ║
║                                                        ║
║  QUICK NAVIGATION:                                     ║
║  ─────────────────────────────────────────────────     ║
║  Type in Filter Navigator:                            ║
║    incident.list   → Incident list                    ║
║    incident.do     → New incident                     ║
║    sys_user.list   → User list                        ║
║                                                        ║
║  ACCESSIBILITY:                                        ║
║  ─────────────────────────────────────────────────     ║
║  Tab from browser → Access skip links                 ║
║  Enable in: Profile → Preferences → Accessibility     ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
```

---

## Additional Resources

### Official ServiceNow Documentation

- [ServiceNow Keyboard Shortcuts (Official Docs)](https://www.servicenow.com/docs/csh?topicname=r_KeyboardShortcuts.html&version=latest)
- [Using Accessibility Features](https://docs.servicenow.com/bundle/platform-user-interface/page/administer/accessibility-508-compliance/concept/keyboard-accessibility.html)
- [Accessibility User Preferences Explained](https://www.servicenow.com/community/accessibility-a11y/accessibility-user-preferences-explained-dark-theme-keyboard/ta-p/3237521)

### Community Resources

- [ServiceNow Platform Navigation Tips & Tricks](https://www.servicenow.com/community/developer-articles/servicenow-platform-and-navigation-hints-tips-tricks-and/ta-p/2312881)
- [RapDev: ServiceNow Special Keyboard Shortcuts](https://www.rapdev.io/blog/servicenows-special-keyboard-shortcuts)
- [All ServiceNow Shortcuts - Jace.Pro](https://jace.pro/post/2020-05-22-all-the-shortcuts/)

### Best Practices Articles

- [10 ServiceNow Best Practices](https://redriver.com/technology-solutions/servicenow-best-practices)
- [Optimizing ServiceNow Workflows](https://www.servicenow.com/community/servicenow-ai-platform-forum/optimizing-servicenow-workflows-any-pro-tips/m-p/2772488)
- [ServiceNow IT Help Desk Optimization](https://blog.3clogic.com/servicenow-it-help-desk-optimization)

### Accessibility Resources

- [ServiceNow Accessibility Statement](https://www.servicenow.com/accessibility-statement.html)
- [ServiceNow Portals Accessibility Best Practices](https://www.servicenow.com/community/servicenow-ai-platform-articles/servicenow-portals-accessibility-best-practices/ta-p/2557106)
- [Horizon Design System - Accessibility](https://horizon.servicenow.com/guidelines/accessibility/a11y-overview)

---

## Practice Exercises

### Exercise 1: Navigation Speed Test

**Goal:** Open an incident ticket in under 5 seconds

1. Start with browser focused on ServiceNow homepage
2. `Ctrl+Alt+F` (Filter Navigator)
3. Type "inc"
4. Arrow down to "Create New" or "Incident > All"
5. Press Enter

**Time yourself. Goal: <5 seconds**

### Exercise 2: Keyboard-Only Ticket Creation

**Goal:** Create and save a ticket without touching the mouse

1. `Ctrl+Alt+F` → "incident" → Enter (New incident form)
2. Tab through fields, filling out:
   - Caller (start typing name, arrow keys to select)
   - Short description
   - Description
   - Category
   - Priority
3. `Ctrl+S` to save
4. Note the incident number
5. `Ctrl+Alt+G` → type incident number → Enter to find it again

**Success:** Completed without using mouse

### Exercise 3: Queue Management

**Goal:** Process 5 tickets from queue using only keyboard

1. `Ctrl+Alt+F` → "my incidents" → Enter
2. Arrow keys to select first ticket
3. Enter to open
4. Tab to State field → change to "In Progress"
5. Tab to Work Notes → add note
6. `Ctrl+S` to save
7. Alt+Left (browser back) to return to list
8. Repeat for 4 more tickets

**Track time:** Compare to your mouse-based time

### Exercise 4: Accessibility Mode

**Goal:** Practice with screen reader or eyes closed

1. Enable High Contrast Mode in Preferences
2. Navigate using Tab/Shift+Tab only
3. Try creating a ticket
4. Notice what screen reader announces (or imagine it)
5. Use skip links to jump to main content

**Purpose:** Understand colleague's experience, improve empathy

---

## Customization Ideas

### For Your District Specifically

**Document your most common:**

1. **Incident Categories** (for quick typing):
   - Category 1: ___________________
   - Subcategory: ___________________
   - Category 2: ___________________
   - Subcategory: ___________________

2. **Close Codes** (for resolution):
   - Code 1: ___________________
   - Code 2: ___________________

3. **Assignment Groups**:
   - Your group: ___________________
   - Escalation group: ___________________

4. **Common Users/Systems:**
   - Print server: ___________________
   - Frequently called users: ___________________
   - Key contacts: ___________________

5. **URL Shortcuts to Bookmark:**
   - Your queue view: ___________________
   - Google Admin: ___________________
   - PRTG: ___________________
   - BeyondTrust Portal: ___________________

### Template Work Notes

Create text file with common work notes for copy/paste:

```
PASSWORD_RESET: "Verified user identity. Password reset completed via Active Directory. User notified of temporary password and instructed to change on next login."

PRINTER_OFFLINE: "Connected via BeyondTrust. Verified network connectivity. Restarted print spooler service. Cleared print queue. Test print successful. Printer back online."

NO_ANSWER: "Attempted to contact user via phone. No answer. Left voicemail with callback number. Ticket pending user response."

RESOLVED_KB: "Issue resolved following KB article KB[####]. Steps documented below. User confirmed resolution."

ESCALATED: "Issue beyond T1 scope. Escalated to [GROUP] for further investigation. User notified of escalation and timeline."
```

Save as: `ServiceNow-Templates.txt` on desktop for quick access

---

## Measuring Success

### Before vs. After Metrics

**Track these for 1 week before implementing, then 1 week after:**

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Average time per ticket | _____ min | _____ min | _____ % |
| Number of clicks per ticket | _____ | _____ | _____ % |
| Tickets processed per hour | _____ | _____ | _____ % |
| Time spent navigating menus | _____ min/day | _____ min/day | _____ min saved |

### Qualitative Feedback

**Survey team members after 2 weeks:**

1. Do keyboard shortcuts feel natural now? (1-5 scale)
2. Has your speed improved? (Y/N)
3. Which shortcuts do you use most?
4. What's still frustrating about navigation?
5. Any additional shortcuts you wish existed?

---

## Conclusion

Keyboard-first navigation in ServiceNow can dramatically improve efficiency, reduce fatigue, and ensure accessibility for all team members. The initial learning curve (1-2 weeks) pays off with permanent time savings on every ticket.

**Key Takeaways:**

1. **Start small:** Master 5 essential shortcuts first
2. **Practice daily:** Muscle memory takes 1-2 weeks to develop
3. **Accessibility matters:** Keyboard navigation benefits everyone
4. **Document your workflows:** Standardize efficient processes
5. **Continuous improvement:** Keep learning and refining

**Next Steps:**

1. Enable keyboard shortcuts in your User Preferences
2. Practice the 5 essential shortcuts today
3. Share this guide with your team
4. Propose implementation plan to supervisor
5. Track your progress and celebrate improvements

---

**Document Version:** 1.0
**Last Updated:** 2025-12-14
**Compiled by:** [Your Name]
**Purpose:** Team efficiency improvement and accessibility compliance

---

### Questions or Suggestions?

This is a living document. As you discover new shortcuts, workflows, or tips, add them here and share with the team.

**Future sections to add:**
- Custom automation scripts (pending approval)
- Integration with other district tools
- Advanced reporting and analytics
- Team-specific workflows
