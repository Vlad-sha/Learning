import "./App.css"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside of the Wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Enother one text</h2>
        <p>Test</p>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
    </div>
  )
}

export default App
