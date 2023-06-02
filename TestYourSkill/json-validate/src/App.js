import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [text, setText] = useState("")
  const [output, setOutput] = useState("")

  const onTextSubmit = async (text) => {
    const response = await axios.post(
      "https://9yiq01h6ud.execute-api.eu-central-1.amazonaws.com/JsonValidationStage/ValidateJson/",
      text,
      { headers: { "Content-Type": "text/plain" } }
    )
    if (response.data.isSucess) {
      setOutput("Json valid")
    } else setOutput(response.data.errorMessage)
    console.log(response.data)
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={() => onTextSubmit(text)}>
          <div className="field">
            <label>
              <h1>Please type JSON to validate</h1>
            </label>
            <textarea
              onChange={(e) => {
                setText(e.target.value)
              }}
              value={text}
              rows={5}
              cols={5}
            />
          </div>
        </form>
        <button onClick={() => onTextSubmit(text)}>Send</button>
        <button onClick={() => setText("")}>Clear</button>
        <h3 className="ui header">Output:{output}</h3>
      </div>
    </div>
  )
}

export default App
