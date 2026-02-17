export type FieldType =
  | 'text'
  | 'textarea'
  | 'select'
  | 'readonly'
  | 'lookup'
  | 'datetime'
  | 'checkbox'

export type FieldSpec = {
  key: string
  label: string
  type: FieldType
  options?: string[]
  placeholder?: string
  width?: 'full' | 'half'
}
