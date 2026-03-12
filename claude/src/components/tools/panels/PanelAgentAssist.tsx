import { MoreHorizontal, Search, SlidersHorizontal } from 'lucide-react'

const articles = [
  {
    title: 'Email Outage — Outlook Web Client',
    body: 'Standard procedure for resolving Outlook web client connectivity issues affecting shared mailboxes. Check transport rules and connector status first.',
    updated: '2 months ago',
    views: 14,
  },
  {
    title: 'Messaging Operations — Escalation Path',
    body: 'When to escalate email-related incidents to the Exchange team vs. routing through Tier 2 support. Includes contact list and SLA thresholds.',
    updated: '3 months ago',
    views: 8,
  },
  {
    title: 'Shared Mailbox Permissions',
    body: 'How to check and restore shared mailbox permissions for sales and operations teams. Includes PowerShell commands for common scenarios.',
    updated: '1 month ago',
    views: 22,
  },
]

export default function PanelAgentAssist({ searchQuery }: { searchQuery: string }) {
  return (
    <div>
      <div className="panel-title">Agent Assist</div>
      <div className="agent-assist-search">
        <Search size={13} className="agent-assist-search-icon" />
        <input
          className="agent-assist-search-input"
          defaultValue={searchQuery}
          placeholder="Search knowledge base..."
        />
        <button type="button" className="agent-assist-filter-btn" title="Filters">
          <SlidersHorizontal size={13} />
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-3)' }}>
        {articles.map((article) => (
          <div key={article.title} className="rec-card" style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="rec-type">Article</div>
              <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 0 }}>
                <MoreHorizontal size={14} />
              </button>
            </div>
            <div className="rec-title">{article.title}</div>
            <div className="rec-body">{article.body}</div>
            <div className="rec-meta">updated {article.updated} · {article.views} views</div>
          </div>
        ))}
      </div>
    </div>
  )
}
