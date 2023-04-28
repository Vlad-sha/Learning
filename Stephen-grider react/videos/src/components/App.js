import React from "react"
import SearchBar from "./SearchBar"
import Youtube from "../APIs/Youtube"
import VideoList from "./VideoList"

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  onTextSubmit = async (text) => {
    const response = await Youtube.get("/search", {
      params: {
        q: text,
      },
    })
    this.setState({ videos: response.data.items })
  }

  onVideoSelect = (video) => {
    console.log("I'm from App", video)
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTextSubmit={this.onTextSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    )
  }
}

export default App
