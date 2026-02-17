import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Mode = 'current' | 'proposed'

type ModeContextValue = {
  mode: Mode
  setMode: (mode: Mode) => void
}

const ModeContext = createContext<ModeContextValue | undefined>(undefined)

const STORAGE_KEY = 'sow-mode'

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>('current')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'current' || stored === 'proposed') {
      setMode(stored)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const value = useMemo(() => ({ mode, setMode }), [mode])

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>
}

export function useMode() {
  const ctx = useContext(ModeContext)
  if (!ctx) {
    throw new Error('useMode must be used within ModeProvider')
  }
  return ctx
}
