function Button({ onClick, name }) {
  console.log("Button rendered")
  return <button onClick={onClick}>{name}</button>
}

export default Button
