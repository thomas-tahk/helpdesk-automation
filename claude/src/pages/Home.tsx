import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">APS Overview</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Snapshot of active service operations.
          </div>
        </div>
        <Link className="primary-button" to="/incident/INC0010001">
          Open Incident
        </Link>
      </div>
      <div className="grid-cards">
        <div className="card">
          <strong>Active incidents</strong>
          <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>14 in progress</p>
        </div>
        <div className="card">
          <strong>Major alerts</strong>
          <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>3 requiring attention</p>
        </div>
        <div className="card">
          <strong>Queue health</strong>
          <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>Stable (96%)</p>
        </div>
      </div>
    </div>
  )
}
