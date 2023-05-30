import axios from "axios"

const KEY = "AIzaSyBQk55UpTq7rKN3Vs8sdjKTMC6R-58VuMI"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
})
