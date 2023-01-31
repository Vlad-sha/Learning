function Wrapper(props) {
  const Wrapperstyle = {
    backgroundColor: props.color,
    width: "250px",
    padding: "20px",
    margin: "20px auto",
  }
  return <div style={Wrapperstyle}>{props.children}</div>
}

export default Wrapper
