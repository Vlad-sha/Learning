import "./App.css"
import { useState } from "react"
import axios from "axios"

function App() {
  const [text, setText] = useState("")
  const [output, setOutput] = useState("")

  const onTextSubmit = async (text) => {
    const { data } = await axios.post(
      "https://9yiq01h6ud.execute-api.eu-central-1.amazonaws.com/JsonValidationStage/ValidateJson/",
      text
    )
    !data.isSuccess ? setOutput(data.errorMessage) : setOutput("JSON is valid")
  }

  const clear = () => {
    setText("")
    setOutput("")
  }

  return (
    <div className="App">
      <div>
        <form>
          <div className="field">
            <label>
              <h1>JSON validator</h1>
            </label>
            <textarea
              onChange={(e) => {
                setText(e.target.value)
              }}
              value={text}
              rows={30}
              placeholder="Write your JSON here"
            />
          </div>
        </form>
        <button className="send" onClick={() => onTextSubmit(text)}>
          Validate
        </button>
        <button className="clear" onClick={() => clear()}>
          Clear
        </button>
        <h3 className="ui header">Results:{output}</h3>
      </div>
    </div>
  )
}

export default App
