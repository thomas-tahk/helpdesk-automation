export default function PanelRecommendations() {
  return (
    <div className="tools-panel">
      <h3>Recommendations</h3>
      <div className="card" style={{ marginBottom: '10px' }}>
        <strong>Run connectivity check</strong>
        <p style={{ margin: '6px 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Validate mail relay health with the diagnostics script.
        </p>
      </div>
      <div className="card">
        <strong>Notify stakeholders</strong>
        <p style={{ margin: '6px 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Send a status update to Sales leadership and IT Ops.
        </p>
      </div>
    </div>
  )
}
