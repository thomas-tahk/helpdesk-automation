export type ActivityType = 'note' | 'comment' | 'system' | 'email' | 'field-change'

export type ActivityItem = {
  id: string
  type: ActivityType
  author: string
  content: string
  timestamp: string
}

export const incidentRecord = {
  title: 'Sales team unable to send or receive email via Outlook web client',
  recordNumber: 'INC0010001',
  state: 'In Progress',
  assignedTo: 'Demo Agent',
  callerName: 'Jordan Rivera',
  assignedToName: 'Demo Agent',
  fields: {
    short_description: 'Sales team unable to send or receive email via Outlook web client',
    caller: 'Jordan Rivera',
    contact_type: 'Email',
    impact: '2 - Medium',
    urgency: '1 - High',
    priority: '2 - High',
    assignment_group: 'Messaging Operations',
    assigned_to: 'Demo Agent',
    watch_list: '',
    cause_notes: '',
    resolution_notes: '',
  },
}

export const initialActivity: ActivityItem[] = [
  {
    id: 'act-1',
    type: 'system',
    author: 'System',
    content: 'Incident created and routed to Messaging Operations queue.',
    timestamp: '2026-02-16 08:14 AM',
  },
  {
    id: 'act-2',
    type: 'comment',
    author: 'Jordan Rivera',
    content: 'We cannot send or receive email from the sales shared mailbox. Multiple staff members are affected since about 7:45 this morning.',
    timestamp: '2026-02-16 08:22 AM',
  },
  {
    id: 'act-3',
    type: 'note',
    author: 'Demo Agent',
    content: 'Reviewing mail transport logs and recent patch history. Checking if the weekend maintenance window caused any service disruption.',
    timestamp: '2026-02-16 08:30 AM',
  },
  {
    id: 'act-4',
    type: 'field-change',
    author: 'Demo Agent',
    content: 'Incident state  In Progress was New',
    timestamp: '2026-02-16 08:31 AM',
  },
  {
    id: 'act-5',
    type: 'system',
    author: 'System',
    content: 'Priority auto-calculated to 2 - High based on impact and urgency values.',
    timestamp: '2026-02-16 08:31 AM',
  },
  {
    id: 'act-6',
    type: 'email',
    author: 'Demo Agent',
    content: 'Sent status update to sales leadership. Next update scheduled in 30 minutes.',
    timestamp: '2026-02-16 08:36 AM',
  },
]
