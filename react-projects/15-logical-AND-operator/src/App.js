import { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import Counter from "./components/Counter"
import ResetButton from "./components/ResetButton"

function App() {
  console.log("App rendered")
  const [schet, setSchet] = useState(0)
  const incrementSchet = () => {
    setSchet(schet + 1)
  }

  const resetSchet = () => {
    setSchet(0)
  }

  const buttonStyle = { backgroundColor: "lightred" }

  return (
    <div className="App">
      <Counter count={schet} />
      <Button onClick={incrementSchet} />
      <Button onClick={incrementSchet} />
      <Button onClick={incrementSchet} />
      <Button onClick={incrementSchet} />
      {schet > 0 && (
        <ResetButton onClick={resetSchet} buttonStyle={buttonStyle} />
      )}
    </div>
  )
}

export default App
