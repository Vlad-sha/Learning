import { useState, useEffect } from "react"
import Youtube from "../APIs/Youtube"

const useVideos = (defaultSearchText) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    search(defaultSearchText)
  }, [defaultSearchText])

  const search = async (text) => {
    const response = await Youtube.get("/search", {
      params: {
        q: text,
      },
    })

    setVideos(response.data.items)
  }
  return [videos, search]
}

export default useVideos
