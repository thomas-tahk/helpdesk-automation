import { MoreHorizontal, Tag } from 'lucide-react'

export type RecordTab = 'overview' | 'details' | 'related'

type RecordHeaderProps = {
  title: string
  onTitleChange: (value: string) => void
  recordNumber: string
  state: string
  assignedTo: string
  activeTab: RecordTab
  onTabChange: (tab: RecordTab) => void
}

const tabs: { id: RecordTab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'details', label: 'Details' },
  { id: 'related', label: 'Related records' },
]

export default function RecordHeader({
  title,
  onTitleChange,
  recordNumber,
  state,
  assignedTo,
  activeTab,
  onTabChange,
}: RecordHeaderProps) {
  return (
    <>
      <section className="record-header">
        <input
          className="record-title-input"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          title={`${recordNumber} — Assigned to: ${assignedTo}`}
        />
        <span className="badge badge-gray" style={{ marginRight: 'auto' }}>{state}</span>
        <Tag size={14} className="record-tag-icon" />
        <div className="record-actions">
          <button className="btn" onClick={() => console.log('Save')}>Save</button>
          <button className="btn btn-resolve" onClick={() => console.log('Resolve')}>
            Resolve
          </button>
          <button className="btn" type="button" aria-label="More actions">
            <MoreHorizontal size={14} />
          </button>
        </div>
      </section>
      <div className="record-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`record-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </>
  )
}
