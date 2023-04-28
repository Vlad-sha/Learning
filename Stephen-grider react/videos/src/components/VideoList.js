import React from "react"
import VideoFile from "./VideoFile"

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoFile onVideoSelect={onVideoSelect} video={video} />
  })
  return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList
