import { BrowserRouter } from 'react-router-dom'
import AppShell from '../components/shell/AppShell'

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
