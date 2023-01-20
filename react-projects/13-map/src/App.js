import { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import Counter from "./components/Counter"

const names = [
  "Click me",
  "Hit me",
  "I'm buton too",
  "I do the same",
  "Press me!",
  "+1",
]

function App() {
  console.log("App rendered")
  const [schet, setSchet] = useState(0)
  const incrementSchet = () => {
    setSchet(schet + 1)
    console.log(schet)
  }

  return (
    <div className="App">
      <Counter count={schet} />
      {names.map((name, index) => {
        return <Button onClick={incrementSchet} name={name} key={index} />
      })}
    </div>
  )
}

export default App
