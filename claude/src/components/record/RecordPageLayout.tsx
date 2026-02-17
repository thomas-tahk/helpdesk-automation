import { useCallback, useRef, useState, type ReactNode } from 'react'

type RecordPageLayoutProps = {
  left: ReactNode
  middle: ReactNode
  rightPanel: ReactNode
  rightStrip: ReactNode
}

export default function RecordPageLayout({
  left,
  middle,
  rightPanel,
  rightStrip,
}: RecordPageLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [leftWidth, setLeftWidth] = useState(340)
  const [rightWidth, setRightWidth] = useState(280)

  const handleDrag = useCallback((side: 'left' | 'right') => {
    return (e: React.MouseEvent) => {
      e.preventDefault()
      const startX = e.clientX
      const startLeft = leftWidth
      const startRight = rightWidth

      const onMove = (ev: MouseEvent) => {
        const delta = ev.clientX - startX
        if (side === 'left') {
          setLeftWidth(Math.max(220, Math.min(600, startLeft + delta)))
        } else {
          setRightWidth(Math.max(200, Math.min(500, startRight - delta)))
        }
      }

      const onUp = () => {
        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseup', onUp)
        document.body.style.cursor = ''
        document.body.style.userSelect = ''
      }

      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'
      document.addEventListener('mousemove', onMove)
      document.addEventListener('mouseup', onUp)
    }
  }, [leftWidth, rightWidth])

  return (
    <div className="record-body" ref={containerRef}>
      <div className="record-col-left" style={{ width: leftWidth }}>
        {left}
      </div>
      <div className="col-resize-handle" onMouseDown={handleDrag('left')} />
      <div className="record-col-middle">
        {middle}
      </div>
      <div className="col-resize-handle" onMouseDown={handleDrag('right')} />
      <div className="record-col-right" style={{ width: rightWidth + 42 }}>
        <div className="record-panel-content" style={{ width: rightWidth }}>
          {rightPanel}
        </div>
        <div className="record-tool-strip">{rightStrip}</div>
      </div>
    </div>
  )
}
