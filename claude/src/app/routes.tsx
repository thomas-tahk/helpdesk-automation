import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Incident from '../pages/Incident'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/incident/:id" element={<Incident />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}
