import React, { useState } from "react"

const SearchBar = ({ onTextSubmit }) => {
  const [text, setText] = useState("")

  const onFormSubmit = (event) => {
    event.preventDefault()
    onTextSubmit(text)
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
