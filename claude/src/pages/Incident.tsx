import { useState } from 'react'
import { RefreshCw, Settings, Filter, Plus } from 'lucide-react'
import ActivityFeed from '../components/activity/ActivityFeed'
import ComposeBox from '../components/activity/ComposeBox'
import FieldRenderer from '../components/fields/FieldRenderer'
import type { FieldSpec } from '../components/fields/fields'
import CollapsibleSection from '../components/record/CollapsibleSection'
import RecordHeader from '../components/record/RecordHeader'
import type { RecordTab } from '../components/record/RecordHeader'
import RecordPageLayout from '../components/record/RecordPageLayout'
import ToolRail from '../components/tools/ToolRail'
import type { ToolPanelId } from '../components/tools/ToolRail'
import PanelAttachments from '../components/tools/panels/PanelAttachments'
import PanelRecordInfo from '../components/tools/panels/PanelRecordInfo'
import PanelRecommendations from '../components/tools/panels/PanelRecommendations'
import PanelTemplates from '../components/tools/panels/PanelTemplates'
import PanelAgentAssist from '../components/tools/panels/PanelAgentAssist'
import { useMode } from '../app/ModeContext'
import { incidentRecord, incidentTasks, initialActivity } from '../data/incident_INC0010001'

// ── Overview tab field specs ──────────────────────────────────────────────────
const summaryFields: FieldSpec[] = [
  { key: 'short_description', label: 'Short description', type: 'text', width: 'full' },
  { key: 'caller', label: 'Caller', type: 'lookup' },
  { key: 'contact_type', label: 'Contact type', type: 'select', options: ['Phone', 'Email', 'Walk-up', 'Self-service'] },
]
const impactFields: FieldSpec[] = [
  { key: 'impact', label: 'Impact', type: 'select', options: ['1 - High', '2 - Medium', '3 - Low', '4 - None'] },
  { key: 'urgency', label: 'Urgency', type: 'select', options: ['1 - High', '2 - Medium', '3 - Low', '4 - None'] },
  { key: 'priority', label: 'Priority', type: 'readonly' },
]
const assignmentFields: FieldSpec[] = [
  { key: 'assignment_group', label: 'Assignment group', type: 'lookup' },
  { key: 'assigned_to', label: 'Assigned to', type: 'lookup' },
  { key: 'watch_list', label: 'Watch list', type: 'text', width: 'full' },
]
const causeFields: FieldSpec[] = [
  { key: 'cause_notes', label: 'Probable cause', type: 'textarea', width: 'full' },
  { key: 'resolution_notes', label: 'Resolution notes', type: 'textarea', width: 'full' },
]

// ── Details tab field specs ───────────────────────────────────────────────────
const detailsIncidentFields: FieldSpec[] = [
  { key: 'short_description', label: 'Short description', type: 'text', width: 'full' },
  { key: 'description', label: 'Description', type: 'textarea', width: 'full' },
  { key: 'recordNumber', label: 'Number', type: 'readonly' },
  { key: 'state', label: 'State', type: 'select', options: ['New', 'In Progress', 'On Hold', 'Resolved', 'Closed', 'Cancelled'] },
  { key: 'caller', label: 'Caller', type: 'lookup' },
  { key: 'impact', label: 'Impact', type: 'select', options: ['1 - High', '2 - Medium', '3 - Low', '4 - None'] },
  { key: 'business_phone', label: 'Business phone', type: 'readonly' },
  { key: 'urgency', label: 'Urgency', type: 'select', options: ['1 - High', '2 - Medium', '3 - Low', '4 - None'] },
  { key: 'mobile_phone', label: 'Mobile phone', type: 'readonly' },
  { key: 'middle_name', label: 'Middle name', type: 'text' },
  { key: 'location', label: 'Location', type: 'lookup' },
  { key: 'work_notes_list', label: 'Work notes list', type: 'lookup' },
  { key: 'managed_by_group', label: 'Managed by group', type: 'readonly' },
  { key: 'channel', label: 'Channel', type: 'select', width: 'full', options: ['Phone', 'Email', 'Walk-up', 'Self-service', 'Chat'] },
  { key: 'category', label: 'Category', type: 'select', width: 'full', options: ['-- None --', 'Hardware', 'Software', 'Network', 'Access'] },
  { key: 'subcategory', label: 'Subcategory', type: 'select', width: 'full', options: ['-- None --'] },
  { key: 'opened', label: 'Opened', type: 'readonly', width: 'full' },
]
const detailsImpactFields: FieldSpec[] = [
  { key: 'service', label: 'Service', type: 'lookup' },
  { key: 'service_offering', label: 'Service offering', type: 'lookup' },
  { key: 'configuration_item', label: 'Configuration item', type: 'lookup', width: 'full' },
  { key: 'business_impact', label: 'Business impact', type: 'textarea', width: 'full' },
]
const detailsRelatedRecordsFields: FieldSpec[] = [
  { key: 'parent_incident', label: 'Parent Incident', type: 'lookup' },
  { key: 'change_request', label: 'Change Request', type: 'lookup' },
  { key: 'problem', label: 'Problem', type: 'lookup' },
  { key: 'caused_by_change', label: 'Caused by Change', type: 'lookup' },
]
const detailsCauseFields: FieldSpec[] = [
  { key: 'cause_notes', label: 'Probable cause', type: 'textarea', width: 'full' },
]
const detailsResolutionFields: FieldSpec[] = [
  { key: 'resolution_code', label: 'Resolution code', type: 'select', width: 'full', options: ['-- None --', 'Solved (Work Around)', 'Solved (Permanently)', 'Not Solved (Not Reproducible)', 'Closed/Resolved by Caller'] },
  { key: 'resolution_notes', label: 'Resolution notes', type: 'textarea', width: 'full' },
]

function computePriority(impact: string, urgency: string) {
  const i = parseInt(impact) || 4
  const u = parseInt(urgency) || 4
  const score = Math.min(i, u)
  if (score === 1) return '1 - Critical'
  if (score === 2) return '2 - High'
  if (score === 3) return '3 - Moderate'
  return '4 - Low'
}

// ── Related Records sub-nav ───────────────────────────────────────────────────
const relatedSubSections = [
  { id: 'task-slas', label: 'Task SLAs', count: 3 },
  { id: 'affected-cis', label: 'Affected CIs', count: 0 },
  { id: 'impacted-services', label: 'Impacted Services/CIs', count: 0 },
  { id: 'incident-tasks', label: 'Incident Tasks', count: 2 },
  { id: 'child-incidents', label: 'Child Incidents', count: 0 },
  { id: 'change-requests', label: 'Change Requests', count: 0 },
  { id: 'outages', label: 'Outages', count: 0 },
  { id: 'comms-plan', label: 'Incident Communication Plans', count: 0 },
  { id: 'affected-locations', label: 'Affected Locations', count: 0 },
]

function priorityBadgeClass(p: string) {
  if (p.startsWith('1')) return 'badge-red'
  if (p.startsWith('2')) return 'badge-orange'
  if (p.startsWith('3')) return 'badge-blue'
  return 'badge-gray'
}

function RelatedRecordsView() {
  const [activeSection, setActiveSection] = useState('incident-tasks')

  const tasks = activeSection === 'incident-tasks' ? incidentTasks : []

  return (
    <div className="related-records-layout">
      <div className="related-records-subnav">
        {relatedSubSections.map((sec) => (
          <button
            key={sec.id}
            type="button"
            className={`related-subnav-item${activeSection === sec.id ? ' active' : ''}`}
            onClick={() => setActiveSection(sec.id)}
          >
            {sec.label} ({sec.count})
          </button>
        ))}
      </div>

      <div className="related-records-content">
        {activeSection === 'incident-tasks' && (
          <>
            <div className="related-table-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span style={{ fontWeight: 600, fontSize: 'var(--font-size-base)' }}>Incident Tasks</span>
                <span className="activity-count">{tasks.length}</span>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <button type="button" className="btn" title="Refresh"><RefreshCw size={13} /></button>
                <button type="button" className="btn" title="Settings"><Settings size={13} /></button>
                <button type="button" className="btn" title="Filter"><Filter size={13} /></button>
                <button type="button" className="btn btn-primary" style={{ gap: 4 }}>
                  <Plus size={13} /> New
                </button>
              </div>
            </div>
            <div className="related-table-meta">Last refreshed just now.</div>
            <table className="related-table">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Priority</th>
                  <th>State</th>
                  <th>Assigned to</th>
                  <th>Short description</th>
                  <th>Task type</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.number}>
                    <td><span className="table-link">{task.number}</span></td>
                    <td><span className={`badge ${priorityBadgeClass(task.priority)}`}>{task.priority}</span></td>
                    <td>{task.state}</td>
                    <td>{task.assignedTo === '(empty)' ? <span style={{ color: 'var(--text-muted)' }}>(empty)</span> : <span className="table-link">{task.assignedTo}</span>}</td>
                    <td>{task.shortDescription}</td>
                    <td><span className="table-link">{task.taskType}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="related-table-footer">
              <span>Showing 1-{tasks.length} of {tasks.length}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <button type="button" className="btn" disabled>‹‹</button>
                <button type="button" className="btn" disabled>‹</button>
                <button type="button" className="btn active-page">1</button>
                <button type="button" className="btn" disabled>›</button>
                <button type="button" className="btn" disabled>››</button>
              </div>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>50 ▼ rows per page</span>
            </div>
          </>
        )}
        {activeSection !== 'incident-tasks' && (
          <div style={{ padding: 'var(--space-6)', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)', textAlign: 'center' }}>
            No records found.
          </div>
        )}
      </div>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function Incident() {
  const { mode } = useMode()
  const [title, setTitle] = useState(incidentRecord.title)
  const [fields, setFields] = useState<Record<string, string | boolean>>({
    ...incidentRecord.fields,
    recordNumber: incidentRecord.recordNumber,
  })
  const [activityItems, setActivityItems] = useState(initialActivity)
  const [activePanel, setActivePanel] = useState<ToolPanelId>('record')
  const [panelLoading, setPanelLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<RecordTab>('overview')

  const updateField = (key: string, value: string | boolean) => {
    setFields((prev) => {
      const next = { ...prev, [key]: value }
      if (key === 'impact' || key === 'urgency') {
        next.priority = computePriority(String(next.impact), String(next.urgency))
      }
      return next
    })
  }

  const activePanelView = (() => {
    if (panelLoading) return <div className="skeleton" />
    switch (activePanel) {
      case 'record':
        return (
          <PanelRecordInfo
            state={incidentRecord.state}
            priority={String(fields.priority)}
            assignmentGroup={String(fields.assignment_group)}
            callerName={incidentRecord.callerName}
            assignedToName={incidentRecord.assignedToName}
          />
        )
      case 'agent-assist': return <PanelAgentAssist searchQuery={title} />
      case 'templates': return <PanelTemplates />
      case 'attachments': return <PanelAttachments />
      case 'recommendations': return <PanelRecommendations />
      default: return null
    }
  })()

  // ── Overview tab left column ─────────────────────────────────────────────
  const overviewContent = (
    <>
      <CollapsibleSection title="Summary" defaultOpen>
        {summaryFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
      <CollapsibleSection
        title="Impact"
        defaultOpen
        badge={<span className="badge badge-gray">{fields.impact}</span>}
      >
        {impactFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
      <CollapsibleSection
        key={`assignment-${mode}`}
        title="Assignment"
        defaultOpen={mode === 'proposed'}
      >
        {assignmentFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
      <CollapsibleSection title="Cause & Resolution">
        {causeFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
    </>
  )

  // ── Details tab left column ──────────────────────────────────────────────
  const detailsContent = (
    <>
      <CollapsibleSection title="Incident" defaultOpen>
        {detailsIncidentFields.map((f) => {
          // Priority gets a special badge treatment
          if (f.key === 'priority') {
            const priorityVal = String(fields.priority || '')
            const badgeClass = priorityBadgeClass(priorityVal)
            return (
              <div key="priority" className="field">
                <span className="field-label">Priority</span>
                <div className="field-readonly" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{priorityVal || '—'}</span>
                  {priorityVal && <span className={`badge ${badgeClass}`}>{priorityVal}</span>}
                </div>
              </div>
            )
          }
          return (
            <FieldRenderer key={f.key} field={f} value={fields[f.key] as string} onChange={updateField} />
          )
        })}
      </CollapsibleSection>
      <CollapsibleSection title="Impact">
        {detailsImpactFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
      <CollapsibleSection title="Assignment">
        {[assignmentFields[0], assignmentFields[1]].map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
      <CollapsibleSection title="Related Records">
        {detailsRelatedRecordsFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
      <CollapsibleSection title="Cause">
        {detailsCauseFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
      <CollapsibleSection title="Resolution">
        {detailsResolutionFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
    </>
  )

  const leftContent = activeTab === 'overview' ? overviewContent : detailsContent

  return (
    <div className="incident-page">
      <RecordHeader
        title={title}
        onTitleChange={setTitle}
        recordNumber={incidentRecord.recordNumber}
        state={incidentRecord.state}
        assignedTo={incidentRecord.assignedTo}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === 'related' ? (
        <RelatedRecordsView />
      ) : (
        <RecordPageLayout
          left={leftContent}
          middle={
            <>
              <ComposeBox onPost={(item) => setActivityItems((prev) => [item, ...prev])} />
              <ActivityFeed items={activityItems} />
            </>
          }
          rightPanel={activePanelView}
          rightStrip={
            <ToolRail
              activeId={activePanel}
              onSelect={(id) => { setPanelLoading(true); setTimeout(() => setPanelLoading(false), 200); setActivePanel(id) }}
            />
          }
        />
      )}
    </div>
  )
}
