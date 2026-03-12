import { useState } from 'react'
import { ChevronDown, MoreHorizontal, Tag } from 'lucide-react'
import ActivityFeed from '../components/activity/ActivityFeed'
import ComposeBox from '../components/activity/ComposeBox'
import FieldRenderer from '../components/fields/FieldRenderer'
import type { FieldSpec } from '../components/fields/fields'
import CollapsibleSection from '../components/record/CollapsibleSection'
import RecordPageLayout from '../components/record/RecordPageLayout'
import ToolRail from '../components/tools/ToolRail'
import type { ToolPanelId } from '../components/tools/ToolRail'
import PanelAttachments from '../components/tools/panels/PanelAttachments'
import PanelTemplates from '../components/tools/panels/PanelTemplates'
import { interactionRecord, interactionActivity } from '../data/interaction_IMS0002749'

const interactionFields: FieldSpec[] = [
  { key: 'number', label: 'Number', type: 'readonly' },
  { key: 'opened_for', label: 'Opened for', type: 'lookup' },
  { key: 'type', label: 'Type', type: 'select', options: ['Phone', 'Email', 'Chat', 'Walk-up'] },
  { key: 'assigned_to', label: 'Assigned to', type: 'lookup' },
  { key: 'state', label: 'State', type: 'readonly' },
  { key: 'short_description', label: 'Short description', type: 'textarea', width: 'full' },
]

function PanelInteractionRecordInfo({ openedForName, openedForDetail, openedForTimezone }: {
  openedForName: string
  openedForDetail: string
  openedForTimezone: string
}) {
  const initials = openedForName.split(' ').map(n => n[0]).join('').toUpperCase()
  return (
    <div>
      <div className="panel-title">Record Information</div>
      <div className="panel-subtitle">
        Last updated by {interactionRecord.assignedToName}<br />
        2026-01-14 08:15:48 AM
      </div>

      <div className="panel-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 style={{ margin: 0 }}>Opened for</h4>
          <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 2 }}>ⓘ</button>
        </div>
        <div className="panel-user-card" style={{ marginTop: 'var(--space-2)' }}>
          <div className="panel-user-avatar">{initials}</div>
          <div>
            <div className="panel-user-name">{openedForName}</div>
            <div className="panel-user-detail">{openedForDetail}</div>
            <div className="panel-user-detail">{openedForTimezone}</div>
          </div>
        </div>
        <button type="button" className="panel-btn">Contact</button>
        <div className="panel-link">Recent tasks &gt;</div>
        <div className="panel-link">Recent interactions &gt;</div>
        <div className="panel-link">Assigned assets &gt;</div>
      </div>
    </div>
  )
}

type InteractionTab = 'details' | 'related'

export default function Interaction() {
  const [title, setTitle] = useState(interactionRecord.title)
  const [fields, setFields] = useState({ ...interactionRecord.fields })
  const [activityItems, setActivityItems] = useState(interactionActivity)
  const [activePanel, setActivePanel] = useState<ToolPanelId>('record')
  const [activeTab, setActiveTab] = useState<InteractionTab>('details')

  const updateField = (key: string, value: string | boolean) => {
    setFields((prev) => ({ ...prev, [key]: String(value) }))
  }

  const activePanelView = (() => {
    switch (activePanel) {
      case 'record':
        return (
          <PanelInteractionRecordInfo
            openedForName={interactionRecord.openedForName}
            openedForDetail={interactionRecord.openedForDetail}
            openedForTimezone={interactionRecord.openedForTimezone}
          />
        )
      case 'templates': return <PanelTemplates />
      case 'attachments': return <PanelAttachments />
      default: return null
    }
  })()

  const leftContent = (
    <>
      <CollapsibleSection title="Interaction" defaultOpen>
        {interactionFields.map((f) => (
          <FieldRenderer key={f.key} field={f} value={fields[f.key as keyof typeof fields] as string} onChange={updateField} />
        ))}
        {/* Duration row */}
        <div className="field full">
          <span className="field-label">Duration</span>
          <div className="duration-row">
            {(['duration_days', 'duration_hours', 'duration_minutes', 'duration_seconds'] as const).map((key, i) => (
              <div key={key} className="duration-field">
                <div className="field-readonly">{fields[key]}</div>
                <span className="duration-label">{['Days', 'Hours', 'Minutes', 'Seconds'][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>
    </>
  )

  const relatedContent = (
    <div style={{ padding: 'var(--space-4)', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
      No related records.
    </div>
  )

  return (
    <div className="incident-page">
      {/* Interaction Header */}
      <section className="record-header">
        <input
          className="record-title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Tag size={14} className="record-tag-icon" />
        <div className="record-actions">
          <button className="btn" type="button" onClick={() => console.log('Save')}>Save</button>
          <div className="split-btn">
            <button className="btn" type="button">Create incident</button>
            <button className="btn split-btn-arrow" type="button" aria-label="More options">
              <ChevronDown size={13} />
            </button>
          </div>
          <button className="btn" type="button" aria-label="More actions">
            <MoreHorizontal size={14} />
          </button>
        </div>
      </section>

      {/* Interaction meta row */}
      <div className="interaction-meta-row">
        <span className="interaction-meta-item">
          <span className="interaction-meta-label">Type</span>
          <span>{fields.type}</span>
        </span>
        <span className="interaction-meta-sep">|</span>
        <span className="interaction-meta-item">
          <span className="interaction-meta-label">State</span>
          <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{fields.state}</span>
        </span>
        <span className="interaction-meta-sep">|</span>
        <span className="interaction-meta-item">
          <span className="interaction-meta-label">Opened for</span>
          <span className="table-link">{fields.opened_for}</span>
        </span>
      </div>

      {/* Tabs */}
      <div className="record-tabs">
        {(['details', 'related'] as InteractionTab[]).map((tab) => (
          <button
            key={tab}
            type="button"
            className={`record-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'details' ? 'Details' : 'Related records'}
          </button>
        ))}
      </div>

      <RecordPageLayout
        left={activeTab === 'details' ? leftContent : relatedContent}
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
            onSelect={setActivePanel}
          />
        }
      />
    </div>
  )
}
