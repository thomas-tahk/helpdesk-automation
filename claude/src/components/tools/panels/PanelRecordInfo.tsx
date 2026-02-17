type PanelRecordInfoProps = {
  state: string
  priority: string
  assignmentGroup: string
}

export default function PanelRecordInfo({
  state,
  priority,
  assignmentGroup,
}: PanelRecordInfoProps) {
  return (
    <div className="tools-panel">
      <h3>Record info</h3>
      <div className="kv-list">
        <div>
          <span>State</span>
          <strong>{state}</strong>
        </div>
        <div>
          <span>Priority</span>
          <strong>{priority}</strong>
        </div>
        <div>
          <span>Assignment group</span>
          <strong>{assignmentGroup}</strong>
        </div>
        <div>
          <span>Updated</span>
          <strong>Today 08:36</strong>
        </div>
        <div>
          <span>SLA</span>
          <strong>4h 12m</strong>
        </div>
      </div>
    </div>
  )
}
