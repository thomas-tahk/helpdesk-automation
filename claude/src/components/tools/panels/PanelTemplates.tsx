import { MoreVertical, Star } from 'lucide-react'
import { useState } from 'react'

const templates = [
  { id: 't1', title: 'Follow-up reminder', desc: 'Reminder to check back on the reported issue', lastUsed: 'Last used 2 hours ago' },
  { id: 't2', title: 'Suggest restart and retry', desc: '', lastUsed: '' },
  { id: 't3', title: 'Quick Call - Password Reset', desc: 'Password Reset - Can\'t sign in, one of: expired, forgotten, locked', lastUsed: '' },
  { id: 't4', title: 'Escalation notice', desc: 'Ticket has been escalated to the next tier for review', lastUsed: '' },
  { id: 't5', title: 'Request additional info', desc: '', lastUsed: '' },
]

export default function PanelTemplates() {
  const [activeTab, setActiveTab] = useState<'favorites' | 'mine' | 'all'>('all')
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div>
      <div className="panel-title">Templates</div>
      <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border)', marginBottom: 12 }}>
        {(['favorites', 'mine', 'all'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            className={`record-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
            style={{ textTransform: 'capitalize' }}
          >
            {tab === 'mine' ? 'My Templates' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="template-list">
        {templates.map((t) => (
          <div
            key={t.id}
            className="template-item"
            onClick={() => setSelected(selected === t.id ? null : t.id)}
          >
            <div className="template-item-title">
              {t.title}
              <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <Star size={13} />
                <MoreVertical size={13} />
              </span>
            </div>
            {t.desc && <div className="template-item-meta">{t.desc}</div>}
            {t.lastUsed && <div className="template-item-meta" style={{ color: 'var(--accent)' }}>{t.lastUsed}</div>}
            {selected === t.id && (
              <div style={{ marginTop: 8, padding: 8, background: 'var(--surface-muted)', borderRadius: 'var(--radius-xs)', fontSize: 'var(--font-size-xs)' }}>
                Template preview content would appear here...
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
