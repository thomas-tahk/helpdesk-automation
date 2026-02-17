import { BrowserRouter } from 'react-router-dom'
import AppShell from '../components/shell/AppShell'
import { ModeProvider } from './ModeContext'

export default function App() {
  return (
    <ModeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ModeProvider>
  )
}
