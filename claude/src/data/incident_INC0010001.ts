export type ActivityType = 'note' | 'comment' | 'system' | 'email'

export type ActivityItem = {
  id: string
  type: ActivityType
  author: string
  content: string
  timestamp: string
}

export const incidentRecord = {
  title: 'Email down for Sales',
  recordNumber: 'INC0010001',
  state: 'In Progress',
  assignedTo: '123456',
  fields: {
    short_description: 'Sales team unable to access Outlook web client.',
    caller: '123456',
    contact_type: 'Email',
    impact: '2-Medium',
    urgency: '1-High',
    priority: '1 - Critical',
    assignment_group: 'Messaging Operations',
    assigned_to: '123456',
    watch_list: '555555, 777777',
    cause_notes: 'Email routing service stalled after patch rollout.',
    resolution_notes: 'Restarted routing cluster and verified queue health.',
  },
}

export const initialActivity: ActivityItem[] = [
  {
    id: 'act-1',
    type: 'system',
    author: 'System',
    content: 'Incident opened and assigned to Messaging Operations.',
    timestamp: 'Today 08:14',
  },
  {
    id: 'act-2',
    type: 'comment',
    author: '555555',
    content: 'Unable to send or receive email from the sales shared mailbox.',
    timestamp: 'Today 08:22',
  },
  {
    id: 'act-3',
    type: 'note',
    author: '123456',
    content: 'Reviewing mail relay logs and recent changes.',
    timestamp: 'Today 08:30',
  },
  {
    id: 'act-4',
    type: 'system',
    author: 'System',
    content: 'Priority auto-calculated to Critical based on impact/urgency.',
    timestamp: 'Today 08:31',
  },
  {
    id: 'act-5',
    type: 'email',
    author: '123456',
    content: 'Sent update to sales leadership; next update in 30 minutes.',
    timestamp: 'Today 08:36',
  },
]
