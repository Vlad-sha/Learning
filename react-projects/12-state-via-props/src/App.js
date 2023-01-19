import { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import Counter from "./components/Counter"

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
      <Button onClick={incrementSchet} />
      <Button onClick={incrementSchet} />
      <Button onClick={incrementSchet} />
      <Button onClick={incrementSchet} />
    </div>
  )
}

export default App
