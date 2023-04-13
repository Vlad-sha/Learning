import React from "react"
import ReactDOM from "react-dom"
import { faker } from "@faker-js/faker"
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"

const App = () => {
  //   const image = faker.image.avatar()
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 15:45pm"
          img={faker.image.avatar()}
          text="Woohoo"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 02:00am"
          img={faker.image.avatar()}
          text="Love it!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Clover"
          timeAgo="Yesterday at 05:00pm"
          img={faker.image.avatar()}
          text="Bestie!"
        />
      </ApprovalCard>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
