import type { ActivityItem } from './incident_INC0010001'

export const interactionRecord = {
  title: '[Sample] Demo phone interaction',
  recordNumber: 'IMS0002749',
  state: 'Closed Complete',
  openedForName: 'Demo Requester',
  assignedToName: 'Thomas Tahk',
  fields: {
    number: 'IMS0002749',
    type: 'Phone',
    state: 'Closed Complete',
    opened_for: 'Demo Requester',
    identification_no: '',
    assigned_to: 'Thomas Tahk',
    duration_days: '0',
    duration_hours: '0',
    duration_minutes: '6',
    duration_seconds: '17',
    short_description: '[Sample] Demo phone interaction',
  },
  openedForDetail: '[Job Title] · [Department]',
  openedForTimezone: '00:00 AM US/Mountain',
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
    content: '[Sample work note]\nIssue triaged and resolved during the call.\nCustomer confirmed resolution before ending.',
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
