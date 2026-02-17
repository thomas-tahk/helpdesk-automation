import { useEffect, useMemo, useState } from 'react'
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
import { useMode } from '../app/ModeContext'
import { incidentRecord, initialActivity } from '../data/incident_INC0010001'

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

function computePriority(impact: string, urgency: string) {
  const i = parseInt(impact) || 4
  const u = parseInt(urgency) || 4
  const score = Math.min(i, u)
  if (score === 1) return '1 - Critical'
  if (score === 2) return '2 - High'
  if (score === 3) return '3 - Moderate'
  return '4 - Low'
}

export default function Incident() {
  const { mode } = useMode()
  const [title, setTitle] = useState(incidentRecord.title)
  const [fields, setFields] = useState({ ...incidentRecord.fields })
  const [activityItems, setActivityItems] = useState(initialActivity)
  const [activePanel, setActivePanel] = useState<ToolPanelId>('record')
  const [panelLoading, setPanelLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<RecordTab>('overview')

  useEffect(() => {
    const timer = setTimeout(() => setPanelLoading(false), 200)
    return () => clearTimeout(timer)
  }, [activePanel])

  const updateField = (key: string, value: string | boolean) => {
    setFields((prev) => {
      const next = { ...prev, [key]: value }
      if (key === 'impact' || key === 'urgency') {
        next.priority = computePriority(String(next.impact), String(next.urgency))
      }
      return next
    })
  }

  const activePanelView = useMemo(() => {
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
      case 'templates': return <PanelTemplates />
      case 'attachments': return <PanelAttachments />
      case 'recommendations': return <PanelRecommendations />
    }
  }, [activePanel, fields, panelLoading])

  const leftColumn = (
    <>
      <CollapsibleSection title="Summary" defaultOpen>
        {summaryFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key as keyof typeof fields] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
      <CollapsibleSection
        title="Impact"
        defaultOpen
        badge={<span className="badge badge-gray">{fields.impact}</span>}
      >
        {impactFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key as keyof typeof fields] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
      <CollapsibleSection
        key={`assignment-${mode}`}
        title="Assignment"
        defaultOpen={mode === 'proposed'}
      >
        {assignmentFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key as keyof typeof fields] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
      <CollapsibleSection title="Cause & Resolution">
        {causeFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key as keyof typeof fields] as string} onChange={updateField} />
        ))}
      </CollapsibleSection>
    </>
  )

  const detailsPlaceholder = (
    <div style={{ padding: 'var(--space-4)', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
      <p>Details view fields will go here. Provide screenshots to flesh this out.</p>
    </div>
  )

  const relatedPlaceholder = (
    <div style={{ padding: 'var(--space-4)', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
      <p>Related records (Incident Tasks, Change Requests, etc.) will go here. Provide screenshots to flesh this out.</p>
    </div>
  )

  const tabContent = activeTab === 'overview' ? leftColumn
    : activeTab === 'details' ? detailsPlaceholder
    : relatedPlaceholder

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

      <RecordPageLayout
        left={tabContent}
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
            onSelect={(id) => { setPanelLoading(true); setActivePanel(id) }}
          />
        }
      />
    </div>
  )
}
