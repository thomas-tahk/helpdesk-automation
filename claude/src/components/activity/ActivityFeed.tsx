import { ArrowUpDown, Filter, Maximize2, Search } from 'lucide-react'
import type { ActivityItem } from '../../data/incident_INC0010001'

function getInitials(author: string): string {
  const parts = author.split(' ')
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  return author.slice(0, 2).toUpperCase()
}

function getTypeLabel(type: string): string {
  switch (type) {
    case 'system': return 'Sent Email'
    case 'comment': return 'Additional comments'
    case 'note': return 'Work notes'
    case 'email': return 'Sent Email'
    case 'field-change': return 'Field changes'
    default: return type
  }
}

export default function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <div>
      <div className="activity-header">
        <h3>Activity</h3>
        <span className="activity-count">{items.length}</span>
        <div className="activity-actions">
          <button type="button" title="Filter"><Filter size={14} /></button>
          <button type="button" title="Search"><Search size={14} /></button>
          <button type="button" title="Sort"><ArrowUpDown size={14} /></button>
          <button type="button" title="Expand"><Maximize2 size={14} /></button>
        </div>
      </div>
      <div className="activity-feed">
        {items.map((item) => (
          <div key={item.id} className="activity-item">
            <div className={`activity-avatar ${item.type}`}>
              {getInitials(item.author)}
            </div>
            <div className="activity-content">
              <span className="activity-author">{item.author}</span>
              <div className="activity-type-label">
                {getTypeLabel(item.type)} &middot; {item.timestamp}
              </div>
              <div className="activity-text">{item.content}</div>
              {item.type === 'system' && (
                <button type="button" className="activity-show-more">Show more</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
