function ResetButton({ onClick, style, schet }) {
  return (
    schet > 0 && (
      <div>
        <button style={style} onClick={onClick}>
          Reset
        </button>
      </div>
    )
  )
}
export default ResetButton
