import AppRoutes from '../../app/routes'
import LeftNavRail from './LeftNavRail'
import TopBar from './TopBar'

export default function AppShell() {
  return (
    <div className="app-shell">
      <TopBar />
      <LeftNavRail />
      <main className="app-main">
        <AppRoutes />
      </main>
    </div>
  )
}
