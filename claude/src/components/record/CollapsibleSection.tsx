import { ChevronUp, Pencil } from 'lucide-react'
import { useState } from 'react'
import type { ReactNode } from 'react'

type CollapsibleSectionProps = {
  title: string
  defaultOpen?: boolean
  badge?: ReactNode
  children: ReactNode
}

export default function CollapsibleSection({
  title,
  defaultOpen = false,
  badge,
  children,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="section-card">
      <button
        type="button"
        className="section-header"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <div className="section-header-left">
          <span>{title}</span>
          {badge}
        </div>
        <div className="section-header-right">
          {open && (
            <span
              className="section-edit-btn"
              onClick={(e) => { e.stopPropagation() }}
              title="Edit"
            >
              <Pencil size={13} />
            </span>
          )}
          <ChevronUp
            size={16}
            className={`section-chevron${open ? ' open' : ''}`}
          />
        </div>
      </button>
      <div className={`section-body-wrapper${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="section-body-inner">
          <div className="section-body">{children}</div>
        </div>
      </div>
    </div>
  )
}
