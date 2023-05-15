import React, { useState } from "react"

const Search = () => {
  const [text, setText] = useState("")

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Request</label>
          <input
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Search
