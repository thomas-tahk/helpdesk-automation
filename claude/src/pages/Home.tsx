import { Link } from 'react-router-dom'

function DonutWidget({ title, total, segments }: {
  title: string
  total: number
  segments: { label: string; value: number; color: string }[]
}) {
  const r = 40
  const cx = 50
  const cy = 50
  const circumference = 2 * Math.PI * r
  let offset = 0

  return (
    <div className="widget-card">
      <div className="widget-card-title">{title}</div>
      <div className="widget-donut">
        <svg viewBox="0 0 100 100">
          {segments.map((seg) => {
            const pct = total > 0 ? seg.value / total : 0
            const dash = pct * circumference
            const gap = circumference - dash
            const currentOffset = offset
            offset += dash
            return (
              <circle
                key={seg.label}
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={seg.color}
                strokeWidth="12"
                strokeDasharray={`${dash} ${gap}`}
                strokeDashoffset={-currentOffset}
                transform={`rotate(-90 ${cx} ${cy})`}
              />
            )
          })}
        </svg>
        <div className="widget-donut-center">{total}</div>
      </div>
      <div className="widget-legend">
        {segments.map((seg) => (
          <div className="widget-legend-item" key={seg.label}>
            <span className="widget-legend-dot" style={{ background: seg.color }} />
            {seg.label} {seg.value}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-greeting">
        <div className="home-greeting-avatar">DU</div>
        <h1>Hello Demo User!</h1>
      </div>

      <div className="home-body">
        <div className="home-main-panel">
          <div className="home-main-header">
            <div className="home-main-title">APS Overview</div>
          </div>
          <div className="home-tabs">
            <button type="button" className="home-tab active">Your work</button>
            <button type="button" className="home-tab">Your team's work</button>
          </div>
          <div className="widget-grid">
            <DonutWidget
              title="Incidents assigned to you"
              total={8}
              segments={[
                { label: 'In Progress', value: 2, color: '#9b59b6' },
                { label: 'On Hold', value: 6, color: '#e67e22' },
              ]}
            />
            <DonutWidget
              title="Incident SLAs"
              total={7}
              segments={[
                { label: '2 to 7 days', value: 6, color: '#3498db' },
                { label: 'Breached', value: 1, color: '#e74c3c' },
              ]}
            />
            <DonutWidget
              title="Unassigned incidents"
              total={15}
              segments={[
                { label: '3 - Moderate', value: 3, color: '#e67e22' },
                { label: '4 - Low', value: 12, color: '#3498db' },
              ]}
            />
            <DonutWidget
              title="Tasks assigned to you"
              total={3}
              segments={[
                { label: 'Open', value: 3, color: '#2ecc71' },
              ]}
            />
          </div>
          <div className="home-cta" style={{ marginTop: 16 }}>
            <Link to="/incident/INC0010001">Click on a widget to view the record below.</Link>
          </div>
        </div>

        <div className="home-sidebar">
          <div className="sidebar-card">
            <h3>Upcoming</h3>
            <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border)', marginBottom: 12 }}>
              <button type="button" className="record-tab active" style={{ fontSize: 'var(--font-size-xs)' }}>Today</button>
              <button type="button" className="record-tab" style={{ fontSize: 'var(--font-size-xs)' }}>Tomorrow</button>
            </div>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--danger)' }}>
              1 incident with breached SLA
            </div>
          </div>
          <div className="sidebar-card">
            <h3>Quick links</h3>
            <div style={{ textAlign: 'center', padding: '16px 0', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
              No quick links yet
            </div>
            <button className="btn" style={{ width: '100%', justifyContent: 'center' }} type="button">Add a link</button>
          </div>
        </div>
      </div>
    </div>
  )
}
