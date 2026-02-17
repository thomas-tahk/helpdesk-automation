import { FileText, Layers, Paperclip, Sparkles } from 'lucide-react'

export type ToolPanelId = 'record' | 'templates' | 'attachments' | 'recommendations'

type ToolRailProps = {
  activeId: ToolPanelId
  onSelect: (id: ToolPanelId) => void
}

const tools: { id: ToolPanelId; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { id: 'record', label: 'Record Info', icon: FileText },
  { id: 'templates', label: 'Templates', icon: Layers },
  { id: 'attachments', label: 'Attachments', icon: Paperclip },
  { id: 'recommendations', label: 'Recommendations', icon: Sparkles },
]

export default function ToolRail({ activeId, onSelect }: ToolRailProps) {
  return (
    <div className="tool-rail">
      {tools.map((tool) => {
        const Icon = tool.icon
        return (
          <button
            key={tool.id}
            type="button"
            title={tool.label}
            className={activeId === tool.id ? 'active' : ''}
            onClick={() => onSelect(tool.id)}
          >
            <Icon size={18} />
          </button>
        )
      })}
    </div>
  )
}
