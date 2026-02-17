import { Search } from 'lucide-react'
import type { FieldSpec } from './fields'

type FieldRendererProps = {
  field: FieldSpec
  value: string | boolean
  onChange: (key: string, value: string | boolean) => void
}

export default function FieldRenderer({ field, value, onChange }: FieldRendererProps) {
  const className = `field${field.width === 'full' ? ' full' : ''}`

  if (field.type === 'readonly') {
    return (
      <div className={className}>
        <span className="field-label">{field.label}</span>
        <div className="field-readonly">{String(value || '—')}</div>
      </div>
    )
  }

  if (field.type === 'textarea') {
    return (
      <div className={className}>
        <span className="field-label">{field.label}</span>
        <textarea
          placeholder={field.placeholder}
          value={String(value || '')}
          onChange={(e) => onChange(field.key, e.target.value)}
        />
      </div>
    )
  }

  if (field.type === 'select') {
    return (
      <div className={className}>
        <span className="field-label">{field.label}</span>
        <select
          value={String(value || '')}
          onChange={(e) => onChange(field.key, e.target.value)}
        >
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    )
  }

  if (field.type === 'checkbox') {
    return (
      <div className={className}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--font-size-sm)' }}>
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(field.key, e.target.checked)}
          />
          {field.label}
        </label>
      </div>
    )
  }

  if (field.type === 'lookup') {
    return (
      <div className={className}>
        <span className="field-label">{field.label}</span>
        <div className="field-lookup-wrapper">
          <input
            type="text"
            placeholder={field.placeholder}
            value={String(value || '')}
            onChange={(e) => onChange(field.key, e.target.value)}
          />
          <Search size={13} className="field-lookup-icon" />
        </div>
      </div>
    )
  }

  const inputType = field.type === 'datetime' ? 'datetime-local' : 'text'

  return (
    <div className={className}>
      <span className="field-label">{field.label}</span>
      <input
        type={inputType}
        placeholder={field.placeholder}
        value={String(value || '')}
        onChange={(e) => onChange(field.key, e.target.value)}
      />
    </div>
  )
}
