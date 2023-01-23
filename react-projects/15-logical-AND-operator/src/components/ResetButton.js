function ResetButton({ onClick, buttonStyle }) {
  return (
    <div>
      <button style={buttonStyle} onClick={onClick}>
        Reset
      </button>
    </div>
  )
}
export default ResetButton
