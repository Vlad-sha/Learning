// Import the React and React-DOM libraries
import React from "react"
import ReactDOM from "react-dom"

// Create a react component
const App = () => {
  const ButtonText = { text: "Click me!" }
  const labelText = "Enter name:"
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button
        style={{
          border: "1px solid red",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        {ButtonText.text}
      </button>
    </div>
  )
}

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"))
