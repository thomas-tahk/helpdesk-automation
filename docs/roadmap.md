# Action Plan - Helpdesk Efficiency Project

## Current Status

**Date Started:** 2025-12-14
**Primary Goal:** Improve efficiency and reduce time per ticket for T1 helpdesk team
**Current Focus:** ServiceNow navigation efficiency (works within existing permissions)

---

## Phase 1: Learn & Document (At Home) ✅ IN PROGRESS

**Goal:** Build knowledge and create presentable materials without needing work computer access.

### Completed:
- [x] Researched ServiceNow keyboard shortcuts
- [x] Researched accessibility features
- [x] Compiled comprehensive efficiency guide
- [x] Created team implementation proposal
- [x] Documented workflows for common ticket types

### To Do at Home:
- [ ] Read through entire ServiceNow Efficiency Guide
- [ ] Memorize the 5 essential shortcuts
- [ ] Practice keyboard shortcuts conceptually (visualize the workflows)
- [ ] Prepare questions for supervisor meeting
- [ ] Review accessibility features to help visually impaired colleague

---

## Phase 2: Gather Info at Work (Next Work Day)

**Goal:** Collect specific information about your environment to customize the guide.

### Information to Collect:

#### ServiceNow Specifics:
- [ ] Your ServiceNow instance URL: _______________________
- [ ] Do you have "Enable Special Keyboard Shortcuts" available in preferences? (Y/N)
- [ ] What version of ServiceNow? (visible in UI or ask admin)
- [ ] Is Agent Workspace enabled for your role? (Y/N)
- [ ] Are there existing keyboard shortcut customizations? (Y/N)

#### Common Workflows:
- [ ] List your top 5 most common ticket types
- [ ] Note the ServiceNow categories/subcategories for each
- [ ] Document the fields you fill out most often
- [ ] Identify repetitive text you type frequently

#### District-Specific Info:
- [ ] Print server names/addresses
- [ ] Common printer models (top 3-5)
- [ ] Assignment group names
- [ ] Escalation group names
- [ ] Where templates are stored (if available)

#### Accessibility:
- [ ] Talk to visually impaired colleague about current challenges
- [ ] What screen reader do they use (if any)?
- [ ] What would help them most?

#### Permissions & Policies:
- [ ] Can you install software on your work PC? (Y/N)
- [ ] Can you use USB drives? (Y/N)
- [ ] Can you download files from personal GitHub? (Y/N)
- [ ] Can you run PowerShell scripts? (Y/N)
- [ ] Who should you ask about automation tools? (Name: _________)

Use file: `WORK-NOTES.md` to capture all this information.

---

## Phase 3: Practice & Validate (Week 1 at Work)

**Goal:** Test keyboard shortcuts and validate efficiency gains before proposing to team.

### Daily Practice:
- [ ] **Day 1:** Enable keyboard shortcuts in preferences, practice navigation
- [ ] **Day 2:** Use Ctrl+Alt+F and Ctrl+Alt+G exclusively (no clicking menus)
- [ ] **Day 3:** Practice form navigation with Tab/Shift+Tab only
- [ ] **Day 4:** Time yourself on common workflows (before/after metrics)
- [ ] **Day 5:** Document what's working and what's challenging

### Track Metrics:
Create simple tracking sheet:

| Day | Avg Time/Ticket | # Shortcuts Used | Challenges | Wins |
|-----|-----------------|------------------|------------|------|
| Mon |                 |                  |            |      |
| Tue |                 |                  |            |      |
| Wed |                 |                  |            |      |
| Thu |                 |                  |            |      |
| Fri |                 |                  |            |      |

### Gather Evidence:
- [ ] Calculate time saved per ticket
- [ ] Note specific examples where shortcuts helped
- [ ] Document any accessibility improvements noticed
- [ ] Get informal feedback from colleagues who notice your speed

---

## Phase 4: Team Proposal (Week 2)

**Goal:** Present findings and propose team-wide implementation.

### Prepare Presentation:
- [ ] Update efficiency guide with district-specific info collected
- [ ] Create 1-page summary of time savings
- [ ] Print quick reference cards for team
- [ ] Prepare talking points for supervisor meeting

### Meeting with Supervisor:

**Agenda:**
1. **Problem:** Team struggling with ServiceNow navigation after Cherwell transition
2. **Solution:** Keyboard-first navigation training
3. **Evidence:** Your personal time savings (X minutes/ticket)
4. **Team benefit:** Projected time savings across whole team
5. **Accessibility:** Significant improvement for visually impaired colleague
6. **Ask:** 1 hour team training session, approval to share guide
7. **Next steps:** Pilot with interested team members, measure results

**Questions to Ask:**
- Would a team training session be valuable?
- Are there existing ServiceNow trainings I'm not aware of?
- Can I share this guide with the team?
- Are there other efficiency tools senior techs use?
- What about automation scripts (for Phase 5)?

### Materials to Bring:
- [ ] Printed copy of ServiceNow Efficiency Guide (highlights sections)
- [ ] Quick reference card
- [ ] Your personal metrics (time saved)
- [ ] One-page summary/proposal

---

## Phase 5: Automation (Future - Pending Approval)

**Goal:** Build automation tools once permissions are clarified.

### If Approved - Startup Automation:
- [ ] Customize `startup-automation.ps1` with real paths/URLs
- [ ] Test on work computer
- [ ] Share with team if successful

### If Approved - Remote Diagnostics:
- [ ] Design diagnostic script for customer PCs
- [ ] Test in controlled environment
- [ ] Get IT security approval
- [ ] Document usage instructions
- [ ] Train team on usage

### If Approved - Text Expansion:
- [ ] Choose tool (AutoHotkey, PhraseExpress, Espanso)
- [ ] Create library of common text snippets
- [ ] Test with your workflow
- [ ] Share templates with team

### If NOT Approved:
- [ ] Focus on browser-based solutions (bookmark folders)
- [ ] Use Windows built-in features (startup folder, shortcuts)
- [ ] Work with ServiceNow admin on templates
- [ ] Maximize efficiency within approved tools only

---

## Success Criteria

### Individual Success:
- [ ] Reduced average time per ticket by 20%+
- [ ] Using keyboard shortcuts naturally (muscle memory)
- [ ] Able to process tickets without mouse
- [ ] More time for quality documentation
- [ ] Less fatigue at end of day

### Team Success:
- [ ] All team members enabled keyboard shortcuts
- [ ] Visually impaired colleague reports improved efficiency
- [ ] Team average time per ticket reduced
- [ ] Fewer questions about "how to navigate to X"
- [ ] Positive feedback from team members

### Organizational Success:
- [ ] Supervisor recognizes value
- [ ] Permission to explore automation tools
- [ ] Guide becomes team standard documentation
- [ ] Other departments interested in guide
- [ ] Improved accessibility compliance

---

## Timeline

| Phase | Duration | Start | End | Status |
|-------|----------|-------|-----|--------|
| Phase 1: Learn & Document (Home) | 1-2 days | 2025-12-14 | TBD | In Progress |
| Phase 2: Gather Info (Work) | 1-2 days | TBD | TBD | Not Started |
| Phase 3: Practice & Validate | 1 week | TBD | TBD | Not Started |
| Phase 4: Team Proposal | 1 day | TBD | TBD | Not Started |
| Phase 5: Automation | Ongoing | TBD | TBD | Pending Approval |

---

## Notes & Reflections

### Why This Approach Works:

1. **Low risk:** Start with approved tools (ServiceNow features)
2. **High impact:** Keyboard navigation helps everyone immediately
3. **Accessibility:** Addresses real need for visually impaired colleague
4. **Evidence-based:** Prove value with your own metrics before proposing
5. **Permission-aware:** Doesn't require violating policies
6. **Scalable:** Once approved, can expand to automation

### Lessons Learned:

_(Fill in as you go)_

- Lesson 1: _________________________________
- Lesson 2: _________________________________
- Lesson 3: _________________________________

### Challenges Encountered:

_(Fill in as you go)_

- Challenge 1: _________________________________
  - Solution: _________________________________

- Challenge 2: _________________________________
  - Solution: _________________________________

### Wins to Celebrate:

_(Fill in as you go)_

- Win 1: _________________________________
- Win 2: _________________________________
- Win 3: _________________________________

---

## Quick Reference - Next Steps

**Right now (at home):**
1. Read `ServiceNow-Efficiency-Guide.md` thoroughly
2. Memorize 5 essential shortcuts
3. Review accessibility section

**Next work day:**
1. Enable keyboard shortcuts in ServiceNow preferences
2. Start filling out `WORK-NOTES.md`
3. Practice Ctrl+Alt+F and Ctrl+Alt+G

**End of Week 1:**
1. Have personal metrics on time saved
2. Identify specific accessibility improvements for colleague

**Week 2:**
1. Schedule meeting with supervisor
2. Present findings and proposal

**Future:**
1. Expand to automation (if approved)
2. Share success with team
3. Iterate and improve

---

**Remember:** You're not just improving your own efficiency - you're potentially helping your entire team and making the workplace more accessible. That's valuable work worth doing right.
