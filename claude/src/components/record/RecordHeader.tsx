import { MoreHorizontal, Tag } from 'lucide-react'

type RecordHeaderProps = {
  title: string
  onTitleChange: (value: string) => void
  recordNumber: string
  state: string
  assignedTo: string
}

export default function RecordHeader({
  title,
  onTitleChange,
  recordNumber,
  state,
  assignedTo,
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
        <button type="button" className="record-tab active">Overview</button>
        <button type="button" className="record-tab">Details</button>
        <button type="button" className="record-tab">Related records</button>
      </div>
    </>
  )
}
