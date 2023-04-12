import React from "react"
import ReactDOM from "react-dom"
import { faker } from "@faker-js/faker"
import CommentDetail from "./CommentDetail"

const App = () => {
  //   const image = faker.image.avatar()
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 15:45pm"
        img={faker.image.avatar()}
        text="Woohoo"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 02:00am"
        img={faker.image.avatar()}
        text="Love it!"
      />
      <CommentDetail
        author="Clover"
        timeAgo="Yesterday at 05:00pm"
        img={faker.image.avatar()}
        text="Bestie!"
      />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
