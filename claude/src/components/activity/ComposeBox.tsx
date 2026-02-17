import { Lock, Mail, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import type { ActivityItem, ActivityType } from '../../data/incident_INC0010001'

type ComposeBoxProps = {
  onPost: (item: ActivityItem) => void
}

const tabMap: { label: string; type: ActivityType; placeholder: string; icon: typeof Lock; isWorkNote?: boolean }[] = [
  { label: 'Work notes', type: 'note', placeholder: 'Enter your Work notes here', icon: Lock, isWorkNote: true },
  { label: 'Additional comments (Customer visible)', type: 'comment', placeholder: 'Enter your comments here...', icon: MessageSquare },
  { label: 'Email', type: 'email', placeholder: 'Draft an email update...', icon: Mail },
]

export default function ComposeBox({ onPost }: ComposeBoxProps) {
  const [activeTab, setActiveTab] = useState(tabMap[0])
  const [value, setValue] = useState('')

  const canPost = value.trim().length > 0

  return (
    <div className="compose-section">
      <div className="compose-header">
        <span className="compose-label">Compose</span>
      </div>
      <div className="compose-tabs">
        {tabMap.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.label}
              type="button"
              className={`compose-tab${tab.label === activeTab.label ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <Icon size={12} className="tab-icon" />
              {tab.label}
            </button>
          )
        })}
      </div>
      <textarea
        className={`compose-textarea${activeTab.isWorkNote ? ' work-notes' : ''}`}
        placeholder={activeTab.placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="compose-footer">
        <button
          className="btn btn-primary"
          type="button"
          disabled={!canPost}
          onClick={() => {
            const now = new Date()
            const ts = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            const item: ActivityItem = {
              id: `act-${Date.now()}`,
              type: activeTab.type,
              author: 'Demo User',
              content: value.trim(),
              timestamp: `Today ${ts}`,
            }
            onPost(item)
            setValue('')
          }}
        >
          Post {activeTab.label.split(' ')[0]} {activeTab.label.split(' ')[1] || ''}
        </button>
      </div>
    </div>
  )
}
