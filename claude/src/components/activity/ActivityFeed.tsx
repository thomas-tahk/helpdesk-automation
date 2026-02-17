import type { ActivityItem } from '../../data/incident_INC0010001'

export default function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <div className="activity-feed">
      {items.map((item) => (
        <div key={item.id} className={`activity-item ${item.type}`}>
          <div className="activity-meta">
            <span className="activity-type">{item.type}</span>
            <span>{item.author}</span>
            <span>{item.timestamp}</span>
          </div>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  )
}
