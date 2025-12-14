# Helpdesk Automation Toolkit

A collection of automation tools and efficiency guides for T1 IT Support/Helpdesk workflows.

## Current Resources

### 1. ServiceNow Efficiency & Navigation Guide ⭐ START HERE

**Purpose:** Comprehensive guide to maximize efficiency in ServiceNow through keyboard navigation, shortcuts, and best practices. Special focus on accessibility features.

**File:** `ServiceNow-Efficiency-Guide.md`

**Why this is priority:**
- Works within existing systems (no permissions needed)
- Helps entire team, especially visually impaired colleagues
- Immediate efficiency gains (2-5 min per ticket)
- Can be practiced conceptually at home, applied at work
- Professional document to present to supervisor

**What's included:**
- Complete keyboard shortcuts reference
- Accessibility features for screen reader users
- Optimized workflows for common ticket types (password resets, printer issues)
- Team implementation plan & proposal template
- Practice exercises and success metrics
- Quick reference card (printable)

### 2. Startup Automation Script (Future - Requires Approval)

**Purpose:** Automatically opens all the applications and websites you use daily, saving 5+ minutes every morning.

**File:** `startup-automation.ps1` (draft with placeholders)

**Status:** Draft only - requires permission to use at work

## Setup Instructions

### First Time Setup

1. **Open the script in a text editor:**
   - Right-click `startup-automation.ps1` → Edit with Notepad (or your preferred editor)

2. **Fill in the placeholders:**

   **Applications section:**
   - Find the path to your applications (RingCentral, etc.)
   - To find an app's path: Right-click the shortcut → Properties → Copy the "Target" path
   - Paste the path between the quotes

   Example:
   ```powershell
   $applications = @(
       "C:\Program Files\RingCentral\RingCentral.exe",
       "C:\Program Files\Microsoft Office\Teams.exe"
   )
   ```

   **Websites section:**
   - Add URLs you open every day
   - These will open as tabs in your default browser

   Example:
   ```powershell
   $websites = @(
       "https://yourdistrict.service-now.com",
       "https://admin.google.com",
       "https://prtg.yourdistrict.org"
   )
   ```

3. **Adjust delays if needed:**
   - If your computer gets overwhelmed, increase the delay values
   - Default: 2 seconds between apps, 1 second between tabs

### How to Run

**Option 1: Double-click (if allowed)**
- Just double-click `startup-automation.ps1`
- If you get a security warning, see "Troubleshooting" below

**Option 2: Run from PowerShell**
- Right-click on Windows Start menu → Windows PowerShell
- Navigate to folder: `cd C:\path\to\helpdesk-automation`
- Run: `.\startup-automation.ps1`

**Option 3: Create a desktop shortcut**
- Right-click on Desktop → New → Shortcut
- Target: `powershell.exe -ExecutionPolicy Bypass -File "C:\path\to\startup-automation.ps1"`
- Name it "Start Helpdesk Tools"

### Troubleshooting

**"Scripts are disabled on this system"**
- Your IT department may have restricted PowerShell scripts
- Try Option 2 or Option 3 above
- If still blocked, you may need supervisor approval

**Apps aren't opening**
- Check the app path is correct
- Make sure the path is in quotes
- Check the PowerShell window for error messages

**Too many windows opening at once**
- Increase the delay values in the configuration section

## Notes Template

Use this template to collect information at work:

### Apps I Open Daily:
- [ ] RingCentral (path: ________________)
- [ ] ________________ (path: ________________)
- [ ] ________________ (path: ________________)

### Websites I Open Daily:
- [ ] ServiceNow: ________________
- [ ] Google Admin: ________________
- [ ] PRTG: ________________
- [ ] BeyondTrust Portal: ________________
- [ ] ________________
- [ ] ________________

### Most Common Ticket Types:
1. ________________
2. ________________
3. ________________
4. ________________
5. ________________

### Information I Always Need from Customer PCs:
- [ ] Computer name
- [ ] OS version
- [ ] Disk space
- [ ] Printer status
- [ ] ________________
- [ ] ________________

## Future Tools (Planned)

- Ticketing automation templates
- Remote diagnostic script for customer PCs
- Quick reference guides
- Text expansion shortcuts

## Contributing

This is your personal toolkit - customize it as you learn what works best for your workflow!
