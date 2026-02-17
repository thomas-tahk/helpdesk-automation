import { Bell, ChevronDown, HelpCircle, Search, Settings } from 'lucide-react'
import { useMode } from '../../app/ModeContext'

export default function TopBar() {
  const { mode, setMode } = useMode()

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="topbar-logo">SN</div>
        <nav className="topbar-nav">
          <a href="#">All</a>
          <a href="#">Favorites</a>
          <a href="#">History</a>
          <a href="#">Workspaces</a>
        </nav>
      </div>

      <div className="topbar-center">
        <span className="topbar-title">Service Operations Workspace</span>
        <div className="mode-toggle" role="group" aria-label="Mode toggle">
          <button
            type="button"
            className={mode === 'current' ? 'active' : ''}
            onClick={() => setMode('current')}
          >
            Current
          </button>
          <button
            type="button"
            className={mode === 'proposed' ? 'active' : ''}
            onClick={() => setMode('proposed')}
          >
            Proposed
          </button>
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-search">
          <Search size={14} />
          <input placeholder="Search" aria-label="Search" />
          <ChevronDown size={12} />
        </div>
        <button className="topbar-icon-btn" aria-label="Settings" type="button">
          <Settings size={16} />
        </button>
        <button className="topbar-icon-btn" aria-label="Help" type="button">
          <HelpCircle size={16} />
        </button>
        <button className="topbar-icon-btn" aria-label="Notifications" type="button">
          <Bell size={16} />
          <span className="topbar-badge">3</span>
        </button>
        <div className="topbar-avatar" title="Demo User">DU</div>
      </div>
    </header>
  )
}
