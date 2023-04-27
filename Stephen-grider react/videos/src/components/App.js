import React from "react"
import SearchBar from "./SearchBar"
import Youtube from "../APIs/Youtube"

class App extends React.Component {
  onTextSubmit = (text) => {
    Youtube.get("/search", {
      params: {
        q: text,
      },
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTextSubmit={this.onTextSubmit} />
      </div>
    )
  }
}

export default App
