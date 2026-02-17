import type { ReactNode } from 'react'

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
  return (
    <div className="record-body">
      <div className="record-col-left">{left}</div>
      <div className="record-col-middle">{middle}</div>
      <div className="record-col-right">
        <div className="record-panel-content">{rightPanel}</div>
        <div className="record-tool-strip">{rightStrip}</div>
      </div>
    </div>
  )
}
