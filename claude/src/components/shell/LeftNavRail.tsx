import { BarChart3, Calendar, ClipboardList, Home, Settings, Users } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/home', icon: Home },
  { label: 'Lists', to: '#', icon: ClipboardList },
  { label: 'Tasks', to: '/incident/INC0010001', icon: Calendar },
  { label: 'People', to: '#', icon: Users },
  { label: 'Reports', to: '#', icon: BarChart3 },
  { label: 'Settings', to: '#', icon: Settings },
]

export default function LeftNavRail() {
  const { pathname } = useLocation()

  return (
    <nav className="left-rail" aria-label="Primary">
      {navItems.map((item) => {
        const Icon = item.icon
        const isTask = item.label === 'Tasks' && pathname.startsWith('/incident/')
        return (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `rail-item${isActive || isTask ? ' active' : ''}`
            }
            title={item.label}
          >
            <Icon size={18} />
          </NavLink>
        )
      })}
    </nav>
  )
}
