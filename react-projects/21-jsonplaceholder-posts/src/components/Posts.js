import Post from "./Post"
import { useState, useEffect } from "react"

function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        console.log(posts)
        setPosts(posts)
      })
      .catch((error) => console.log(error.message))
  }, [])
  return (
    <div>
      <Post />
      <Post />
    </div>
  )
}

export default Posts
