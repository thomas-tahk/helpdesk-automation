type PanelRecordInfoProps = {
  state: string
  priority: string
  assignmentGroup: string
  callerName: string
  assignedToName: string
}

export default function PanelRecordInfo({
  state,
  priority,
  assignmentGroup,
  callerName,
  assignedToName,
}: PanelRecordInfoProps) {
  return (
    <div>
      <div className="panel-title">Record Information</div>
      <div className="panel-subtitle">
        Last updated by {assignedToName}<br />
        2026-02-16 10:31:54 AM
      </div>

      <div className="panel-section">
        <h3>SLAs and timings</h3>
        <div style={{ display: 'flex', gap: 16 }}>
          <div>
            <div className="panel-kv-label">Response SLA</div>
            <span className="badge badge-green">Completed</span>
          </div>
          <div>
            <div className="panel-kv-label">Resolution SLA</div>
            <span className="badge badge-red">Breached</span>
          </div>
        </div>
        <div className="panel-link" style={{ marginTop: 8 }}>View all SLAs</div>
      </div>

      <div className="panel-section">
        <h4>Caller</h4>
        <div className="panel-user-card">
          <div className="panel-user-avatar">
            {callerName.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
          <div>
            <div className="panel-user-name">{callerName}</div>
            <div className="panel-user-detail">Staff &middot; Main Campus</div>
            <div className="panel-user-detail">Mountain Time</div>
          </div>
        </div>
        <button type="button" className="panel-btn">Contact</button>
        <div className="panel-link">Recent incidents &gt;</div>
        <div className="panel-link">Recent interactions &gt;</div>
        <div className="panel-link">Assigned assets &gt;</div>
      </div>

      <div className="panel-section">
        <h4>Assigned to</h4>
        <div className="panel-user-card">
          <div className="panel-user-avatar">
            {assignedToName.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
          <div>
            <div className="panel-user-name">{assignedToName}</div>
            <div className="panel-user-detail">{assignmentGroup}</div>
          </div>
        </div>
        <button type="button" className="panel-btn">Reassign</button>
        <div className="panel-link">View additional collaborators</div>
      </div>

      <div className="panel-section">
        <h3>Quick facts</h3>
        <div className="panel-kv"><span className="panel-kv-label">State</span><span className="panel-kv-value">{state}</span></div>
        <div className="panel-kv"><span className="panel-kv-label">Priority</span><span className="panel-kv-value">{priority}</span></div>
        <div className="panel-kv"><span className="panel-kv-label">Assignment group</span><span className="panel-kv-value">{assignmentGroup}</span></div>
        <div className="panel-kv"><span className="panel-kv-label">Updated</span><span className="panel-kv-value">Today 10:31</span></div>
      </div>
    </div>
  )
}
