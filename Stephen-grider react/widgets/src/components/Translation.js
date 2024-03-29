import React, { useState, useEffect, useRef } from "react"
import Convert from "./Convert"
import Dropdown from "./Dropdown"

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
]

const Translation = () => {
  const [language, setLanguage] = useState(options[0])
  const [text, setText] = useState("")
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output:</h3>
      <Convert language={language} text={text} />
    </div>
  )
}

export default Translation
