import { useState } from 'react'

const templates = [
  {
    id: 't1',
    title: 'Email outage update',
    preview: 'We are investigating an email delivery outage affecting Sales...',
  },
  {
    id: 't2',
    title: 'Workaround instructions',
    preview: 'Please use Teams chat or SMS until email service is restored...',
  },
  {
    id: 't3',
    title: 'Resolution confirmation',
    preview: 'Service has been restored. Please confirm receipt of email...',
  },
]

export default function PanelTemplates() {
  const [active, setActive] = useState(templates[0])

  return (
    <div className="tools-panel">
      <h3>Templates</h3>
      <div className="kv-list">
        {templates.map((template) => (
          <button
            key={template.id}
            className="secondary-button"
            type="button"
            onClick={() => setActive(template)}
          >
            {template.title}
          </button>
        ))}
      </div>
      <div className="card" style={{ marginTop: '12px' }}>
        <strong>{active.title}</strong>
        <p style={{ margin: '8px 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {active.preview}
        </p>
      </div>
    </div>
  )
}
