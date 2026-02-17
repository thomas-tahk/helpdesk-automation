import {
  Bell,
  Compass,
  FileText,
  Mail,
  MessageSquare,
  Paperclip,
  Sparkles,
  Users,
} from 'lucide-react'

export type ToolPanelId = 'record' | 'templates' | 'attachments' | 'recommendations'

type ToolRailProps = {
  activeId: ToolPanelId
  onSelect: (id: ToolPanelId) => void
}

const tools: { id: ToolPanelId | string; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { id: 'recommendations', label: 'Recommendations', icon: Compass },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'agent-assist', label: 'Agent Assist', icon: Sparkles },
  { id: 'collaborate', label: 'Collaborate', icon: Users },
  { id: 'attachments', label: 'Attachments', icon: Paperclip },
  { id: 'templates', label: 'Templates', icon: FileText },
  { id: 'record', label: 'Record Info', icon: MessageSquare },
  { id: 'email-templates', label: 'Email Templates', icon: Mail },
]

const activePanels = new Set<string>(['record', 'templates', 'attachments', 'recommendations'])

export default function ToolRail({ activeId, onSelect }: ToolRailProps) {
  return (
    <>
      {tools.map((tool) => {
        const Icon = tool.icon
        const isActive = activeId === tool.id
        return (
          <button
            key={tool.id}
            type="button"
            title={tool.label}
            className={`tool-strip-btn${isActive ? ' active' : ''}`}
            onClick={() => {
              if (activePanels.has(tool.id)) {
                onSelect(tool.id as ToolPanelId)
              }
            }}
          >
            <Icon size={16} />
          </button>
        )
      })}
    </>
  )
}
