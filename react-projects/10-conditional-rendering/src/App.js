import "./App.css"
import WhatIsLove from "./components/Gameinfo"

function App() {
  return (
    <div className="App">
      <WhatIsLove game="Heroes of Might and Magic" part={3} isGame />
      <WhatIsLove game="King's Bounty" part={1} isGame={false} />
    </div>
  )
}

export default App
