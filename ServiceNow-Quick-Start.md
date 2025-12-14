# ServiceNow Quick Start Guide
## Essential Keyboard Shortcuts for Helpdesk Efficiency

**Purpose:** Get up to speed fast with the 20% of shortcuts that give you 80% of the efficiency gains.

**Read time:** 10 minutes | **Practice time:** 15 minutes | **Payoff:** 2-5 min saved per ticket

---

## The 5 Shortcuts That Matter Most

Learn these first - everything else is optional.

| Shortcut | Action | Why It Matters |
|----------|--------|----------------|
| **Ctrl+Alt+F** | Jump to Filter Navigator | Find anything without clicking through menus |
| **Ctrl+Alt+G** | Global Search | Instantly search for tickets, users, computers |
| **Ctrl+Alt+C** | Collapse/Expand Nav Menu | More screen space for ticket details |
| **Ctrl+S** | Save Form | Save tickets without clicking |
| **Tab / Shift+Tab** | Navigate form fields | Move through ticket fields without mouse |

**Your first goal:** Use these 5 shortcuts exclusively for one day. No clicking menus.

---

## Setup (3 Steps, Takes 2 Minutes)

### Step 1: Enable Keyboard Shortcuts
1. Click your **profile picture** (top right)
2. Select **"Preferences"**
3. Find **"Accessibility"** section
4. Toggle **"Enable Special Keyboard Shortcuts"** to **ON**
5. Click **Save**

### Step 2: View All Available Shortcuts
1. Click **profile picture** again
2. Select **"Keyboard shortcuts"**
3. Bookmark this page for reference

### Step 3: Test It
1. Press **Ctrl+Alt+F**
2. Type "incident"
3. Press Enter
4. If a new incident form opens → you're ready!

---

## Essential Workflows

### Workflow 1: Taking an Incoming Call

**The old way (clicking):** ~3-5 minutes of navigation
**The keyboard way:** ~30 seconds of navigation

**Steps:**

1. **Open new incident:**
   - `Ctrl+Alt+F` → type "incident" → Enter

2. **Fill caller info:**
   - `Tab` through fields
   - `Ctrl+Alt+G` to quick-search for user
   - Paste their info, keep tabbing

3. **Take notes:**
   - `Tab` to Description field
   - Type what user is saying
   - Focus on understanding, not formatting

4. **Quick categorization:**
   - `Tab` to Category
   - Type first few letters
   - Arrow keys to select
   - Tab to next field

5. **Save:**
   - `Ctrl+S` (form stays open)
   - Note the incident number

6. **Add work notes as you troubleshoot:**
   - `Tab` to Work Notes
   - Document your steps

7. **Resolve and close:**
   - `Tab` to State → select "Resolved"
   - `Tab` to Close Notes → type resolution
   - `Ctrl+S`

**Time saved:** 2-3 minutes per ticket

---

### Workflow 2: Password Reset (Most Common)

**Keyboard-optimized process:**

1. **Find user:**
   - `Ctrl+Alt+G` → type username → Enter

2. **Reset in AD/tool:**
   - `Ctrl+Alt+F` → type your password reset tool name
   - Complete reset

3. **Document in ticket:**
   - Back to incident
   - `Tab` to Work Notes
   - Type: "Password reset completed via Active Directory"
   - `Tab` to State → "Resolved"
   - `Ctrl+S`

**Total time:** Under 1 minute

---

### Workflow 3: Printer Troubleshooting

**During remote session, document as you go:**

1. **Open BeyondTrust** (separate window)

2. **In ServiceNow ticket, add work notes:**
   - `Tab` to Work Notes
   - Type what you're checking:
   ```
   Checking print spooler... running
   Checking queue... 3 jobs stuck
   Restarting spooler...
   Clearing queue...
   Test print... successful
   ```

3. **Quick resolution:**
   - `Tab` to State → "Resolved"
   - `Tab` to Close Notes → "Restarted print spooler, cleared queue, test print successful"
   - `Ctrl+S`

**Key:** Document AS you troubleshoot, not after the call

---

## Accessibility Features (For Visually Impaired Colleagues)

ServiceNow supports full keyboard navigation and screen readers.

### Supported Screen Readers:
- **JAWS** (Windows)
- **NVDA** (Windows - free)
- **VoiceOver** (Mac)
- **ZoomText** (Magnification)

### Enable Accessibility Mode:

**High Contrast:**
- Preferences → Accessibility → Enable "High Contrast Mode"

**Keyboard-Only Navigation:**
- Everything accessible via Tab/Arrow keys
- No mouse required

**Skip Links:**
- Press `Tab` from browser address bar
- "Skip to main content" link appears
- Jumps past navigation directly to ticket

**Screen Reader Tips:**
- Tab through form fields (announces labels)
- Arrow keys within dropdowns
- H key (JAWS/NVDA) jumps between headings
- Forms use proper semantic HTML

---

## Quick Reference Card (Print This)

```
╔═══════════════════════════════════════════════════════╗
║        SERVICENOW ESSENTIAL SHORTCUTS                 ║
╠═══════════════════════════════════════════════════════╣
║                                                       ║
║  Ctrl+Alt+F  →  Filter Navigator (find anything)     ║
║  Ctrl+Alt+G  →  Global Search (tickets/users)        ║
║  Ctrl+Alt+C  →  Collapse/Expand Nav Menu             ║
║  Ctrl+S      →  Save Form                            ║
║                                                       ║
║  Tab         →  Next Field                           ║
║  Shift+Tab   →  Previous Field                       ║
║  Arrow Keys  →  Navigate dropdowns                   ║
║                                                       ║
║  Quick Navigation:                                    ║
║  ──────────────────────────────────────────           ║
║  Type in Filter Navigator:                           ║
║    incident.list  → All incidents                    ║
║    incident.do    → New incident                     ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
```

---

## Additional Useful Shortcuts

Once you've mastered the essential 5, add these:

| Shortcut | Action | Use Case |
|----------|--------|----------|
| `Ctrl+Shift+S` | Save & Stay | Save without closing form |
| `Ctrl+Click` | Multi-select | Select multiple records in list |
| `Enter` | Open Record | Open selected item in list view |
| `Esc` | Cancel/Close | Close dialogs |

---

## URL Navigation Tricks

Type these directly in the Filter Navigator:

| Command | Result |
|---------|--------|
| `incident.list` | Opens incident list (same window) |
| `incident.LIST` | Opens incident list (NEW tab) |
| `incident.do` | Creates new incident (same window) |
| `incident.FORM` | Creates new incident (NEW tab) |
| `sys_user.list` | User records list |

**Pro tip:** Bookmark filtered views by setting up filters, then bookmarking the URL.

---

## Practice Challenge

**Goal:** Create and close a test incident in under 2 minutes using ONLY keyboard.

1. Start timer
2. `Ctrl+Alt+F` → "incident" → Enter
3. Tab through all fields, fill with test data
4. `Ctrl+S` to save
5. Tab to Work Notes → add note
6. Tab to State → "Resolved"
7. Tab to Close Notes → type reason
8. `Ctrl+S`
9. Stop timer

**Target:** Under 2 minutes | **Expert:** Under 1 minute

---

## Pitching This to Your Team

### One-Slide Summary for Supervisor:

**Problem:**
- Team transitioning from Cherwell to ServiceNow
- Navigation learning curve slowing ticket processing
- Accessibility challenges for visually impaired team member

**Solution:**
- Keyboard-first navigation training (5 essential shortcuts)
- Enable accessibility features
- Optimize common workflows

**Evidence:**
- Industry research: 4 hours/week lost to app switching
- Keyboard shortcuts save 2-5 min per ticket
- Full accessibility compliance (WCAG 2.0)

**Ask:**
- 30-minute team training session
- Print quick reference cards for team
- Enable keyboard shortcuts for all agents

**Expected Impact:**
- 20% faster ticket processing
- Better accessibility
- Less clicking fatigue
- More thorough documentation (more time to write notes)

---

## Your 7-Day Learning Plan

**Day 1:** Enable shortcuts, practice Ctrl+Alt+F and Ctrl+Alt+G
**Day 2:** Add Ctrl+S and Tab navigation to your muscle memory
**Day 3:** Practice full password reset workflow
**Day 4:** Practice full incoming call workflow
**Day 5:** Time yourself - measure improvement
**Day 6:** Help colleague with accessibility features
**Day 7:** Present findings to supervisor

---

## When You're Ready for More

See the comprehensive guide: `ServiceNow-Efficiency-Guide.md`

**It includes:**
- Complete shortcuts reference (30+ shortcuts)
- Agent Workspace best practices
- Advanced URL tricks
- Team implementation plan
- Metrics tracking templates
- Browser efficiency tips
- Detailed accessibility guide

---

## Key Takeaways

1. **Start with 5 shortcuts** - Don't try to learn everything at once
2. **Practice daily** - Muscle memory takes 1-2 weeks
3. **Accessibility helps everyone** - Not just visually impaired users
4. **Document as you go** - Keyboard navigation gives you time to write better notes
5. **Measure impact** - Track your time savings to show value

**The goal isn't to memorize shortcuts - it's to develop muscle memory so they become automatic.**

---

## Quick Wins Checklist

- [ ] Enable keyboard shortcuts in Preferences
- [ ] Print quick reference card
- [ ] Practice Ctrl+Alt+F for one full day
- [ ] Time one password reset workflow
- [ ] Help visually impaired colleague enable High Contrast mode
- [ ] Share this guide with one teammate
- [ ] Schedule meeting with supervisor

---

**Questions?** Refer to the full guide or official ServiceNow documentation.

---

## Sources & References

- [ServiceNow Keyboard Shortcuts (Official)](https://www.servicenow.com/docs/csh?topicname=r_KeyboardShortcuts.html&version=latest)
- [ServiceNow Accessibility Features](https://docs.servicenow.com/bundle/platform-user-interface/page/administer/accessibility-508-compliance/concept/keyboard-accessibility.html)
- [Platform Navigation Tips & Tricks](https://www.servicenow.com/community/developer-articles/servicenow-platform-and-navigation-hints-tips-tricks-and/ta-p/2312881)
- [ServiceNow IT Help Desk Optimization](https://blog.3clogic.com/servicenow-it-help-desk-optimization)

---

**Version:** 1.0 Quick Start
**Last Updated:** 2025-12-14
**Next Step:** Practice the 5 essential shortcuts for 1 week, then graduate to the full guide.
