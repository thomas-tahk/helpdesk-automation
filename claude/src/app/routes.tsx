import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Incident from '../pages/Incident'
import Interaction from '../pages/Interaction'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/incident/:id" element={<Incident />} />
      <Route path="/interaction/:id" element={<Interaction />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}
