export type ActivityType = 'note' | 'comment' | 'system' | 'email' | 'field-change'

export type ActivityItem = {
  id: string
  type: ActivityType
  author: string
  content: string
  timestamp: string
}

export const incidentRecord = {
  title: '[Sample] Email service disruption affecting multiple users',
  recordNumber: 'INC0010001',
  state: 'In Progress',
  assignedTo: 'Thomas Tahk',
  callerName: 'Demo Caller',
  assignedToName: 'Thomas Tahk',
  fields: {
    // Incident
    short_description: '[Sample] Email service disruption affecting multiple users',
    description: 'Phone Number: 505-555-0100\nRoom Number: [Room]\n[Sample description] Users in the affected department are unable to send or receive email. Issue began at approximately 7:45 AM. Multiple staff members are affected.',
    state: 'In Progress',
    caller: 'Demo Caller',
    identification_no: 'e123456',
    phone: '505-555-0100',
    impact: '2 - Medium',
    urgency: '1 - High',
    priority: '2 - High',
    location: '[Sample Location]',
    managed_by_group: 'Field Tech - North',
    channel: 'Phone',
    category: 'Accounts & Access | Email & Calendar',
    subcategory: 'Active Directory',
    opened: '2026-02-16 08:14:00 AM',
    // Impact
    configuration_item: '',
    // Assignment
    assignment_group: 'Service Desk',
    assigned_to: 'Thomas Tahk',
    // Related Records
    parent_incident: '',
    change_request: '',
    problem: '',
    caused_by_change: '',
    // Cause & Resolution
    cause_notes: '',
    resolution_code: '-- None --',
    resolution_notes: '',
  },
}

export const incidentTasks = [
  {
    number: 'TASK0001001',
    priority: '4 - Low',
    state: 'Closed Complete',
    assignedTo: 'Demo Agent 2',
    shortDescription: '[Sample task] Reset authentication tokens for affected account',
    taskType: 'Incident Task',
  },
  {
    number: 'TASK0001002',
    priority: '4 - Low',
    state: 'Open',
    assignedTo: '(empty)',
    shortDescription: '[Sample task] Review account for security flags',
    taskType: 'Incident Task',
  },
]

export const initialActivity: ActivityItem[] = [
  {
    id: 'act-1',
    type: 'system',
    author: 'System',
    content: 'Incident created and routed to Service Desk queue.',
    timestamp: '2026-02-16 08:14 AM',
  },
  {
    id: 'act-2',
    type: 'comment',
    author: 'Demo Caller',
    content: '[Sample comment] Unable to send or receive email from the shared mailbox. Multiple staff members are affected since about 7:45 this morning.',
    timestamp: '2026-02-16 08:22 AM',
  },
  {
    id: 'act-3',
    type: 'note',
    author: 'Thomas Tahk',
    content: '[Sample work note] Reviewing mail transport logs and recent patch history. Checking if the weekend maintenance window caused any service disruption.',
    timestamp: '2026-02-16 08:30 AM',
  },
  {
    id: 'act-4',
    type: 'field-change',
    author: 'Thomas Tahk',
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
    author: 'Thomas Tahk',
    content: '[Sample email] Sent status update to stakeholders. Next update scheduled in 30 minutes.',
    timestamp: '2026-02-16 08:36 AM',
  },
]
