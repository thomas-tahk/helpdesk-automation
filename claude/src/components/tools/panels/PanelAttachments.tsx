import { Plus } from 'lucide-react'

export default function PanelAttachments() {
  return (
    <div>
      <div className="panel-title">Attachments</div>
      <div className="attachments-empty">
        <Plus size={40} className="attachments-empty-icon" />
        <div className="attachments-empty-text">No attachments available</div>
        <div className="attachments-empty-sub">Drag or select files to upload</div>
        <button className="btn btn-primary" type="button">Select file</button>
      </div>
    </div>
  )
}
