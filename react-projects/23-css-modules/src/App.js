import "./App.css"
import Info from "./components/info"

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>App component heading</h1>
        <h2>Heading in the App component</h2>
        <button className="myButton">App button</button>
      </div>
    </div>
  )
}

export default App
