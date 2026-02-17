import { useState } from 'react'

const recommendations = [
  {
    id: 'r1',
    type: 'Knowledge',
    title: 'Troubleshoot Outlook Web Access',
    number: 'KB0018234',
    author: 'Service Desk KB',
    updated: '2025-11-14 02:15:00 PM',
    body: 'Steps to troubleshoot when users cannot access Outlook Web App (OWA). Verify DNS, check IIS bindings, confirm certificate validity, and restart the relevant application pool...',
  },
  {
    id: 'r2',
    type: 'Copy resolution notes',
    title: 'Sales mailbox delivery delays resolved',
    incidentNum: 'INC0008477',
    body: 'Root cause was a stalled mail relay after the weekend patch window. Restarting the transport service and clearing the queue resolved the issue for all affected users.',
  },
  {
    id: 'r3',
    type: 'Copy resolution notes',
    title: 'Shared mailbox permissions reset',
    incidentNum: 'INC0009102',
    body: 'Permissions on the shared mailbox were inadvertently removed during a migration. Re-applied Full Access and Send As permissions for the sales distribution group.',
  },
]

export default function PanelRecommendations() {
  const [activeTab, setActiveTab] = useState<'actions' | 'search'>('actions')

  return (
    <div>
      <div className="panel-title">Recommendations</div>
      <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border)', marginBottom: 12 }}>
        <button
          type="button"
          className={`record-tab${activeTab === 'actions' ? ' active' : ''}`}
          onClick={() => setActiveTab('actions')}
        >
          Recommended actions ({recommendations.length})
        </button>
        <button
          type="button"
          className={`record-tab${activeTab === 'search' ? ' active' : ''}`}
          onClick={() => setActiveTab('search')}
        >
          Search (0)
        </button>
      </div>

      {recommendations.map((rec) => (
        <div key={rec.id} className="rec-card">
          <div className="rec-type">{rec.type}</div>
          <div className="rec-title">{rec.title}</div>
          {'number' in rec && rec.number && (
            <div className="rec-meta">
              Number: {rec.number} &middot; Author: {rec.author} &middot; Updated: {rec.updated}
            </div>
          )}
          {'incidentNum' in rec && rec.incidentNum && (
            <div className="rec-meta">
              Incident: <span style={{ color: 'var(--accent)' }}>{rec.incidentNum}</span>
            </div>
          )}
          <div className="rec-body">{rec.body}</div>
          <div className="rec-actions">
            <button className="btn" type="button">Dismiss</button>
            <button className="btn btn-primary" type="button">
              {rec.type === 'Knowledge' ? 'Attach and add link' : 'Copy resolution notes'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
