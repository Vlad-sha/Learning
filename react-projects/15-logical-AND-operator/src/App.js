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

  const buttonStyle = { backgroundColor: "lightgreen" }

  return (
    <div className="App">
      <Counter count={schet} />
      <Button onClick={incrementSchet} />
      <Button onClick={incrementSchet} />
      <Button onClick={incrementSchet} />
      <Button onClick={incrementSchet} />
      <ResetButton onClick={resetSchet} style={buttonStyle} schet={schet} />
      {/* {schet > 0 && (
        <div>
          <button style={buttonStyle} onClick={resetSchet}>
            Reset
          </button>
        </div>
      )} */}
    </div>
  )
}

export default App
