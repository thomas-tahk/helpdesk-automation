import type { ActivityItem } from './incident_INC0010001'

export const interactionRecord = {
  title: '2 Step Backup verification code request',
  recordNumber: 'IMS0002749',
  state: 'Closed Complete',
  openedForName: 'Lynn Bragg',
  assignedToName: 'Thomas Tahk',
  fields: {
    number: 'IMS0002749',
    type: 'Phone',
    state: 'Closed Complete',
    opened_for: 'Lynn Bragg',
    assigned_to: 'Thomas Tahk',
    duration_days: '0',
    duration_hours: '0',
    duration_minutes: '6',
    duration_seconds: '17',
    short_description: '2 Step Backup verification code request',
  },
  openedForDetail: 'Custodian: Head <6 Emp/Night · LA MESA ES',
  openedForTimezone: 'Albuquerque · 08:15:45 AM US/Mountain',
}

export const interactionActivity: ActivityItem[] = [
  {
    id: 'iact-1',
    type: 'field-change',
    author: 'Thomas Tahk',
    content: 'State  Closed Complete was Work in Progress',
    timestamp: '2026-01-14 08:15:48 AM',
  },
  {
    id: 'iact-2',
    type: 'note',
    author: 'Thomas Tahk',
    content: 'need help with 2 step verification\n2 step is ON according to Google Admin\nCustomer was just asking for a backup code\nbackup code provided',
    timestamp: '2026-01-14 08:15:45 AM',
  },
  {
    id: 'iact-3',
    type: 'field-change',
    author: 'Thomas Tahk',
    content: 'Opened by  Thomas Tahk\nAssigned to  Thomas Tahk\nState  Work in Progress',
    timestamp: '2026-01-14 08:15:45 AM',
  },
]
