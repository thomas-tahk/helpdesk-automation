export default function PanelAttachments() {
  return (
    <div className="tools-panel">
      <h3>Attachments</h3>
      <p style={{ margin: '8px 0 16px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        No attachments
      </p>
      <button className="secondary-button" type="button">
        Add
      </button>
    </div>
  )
}
