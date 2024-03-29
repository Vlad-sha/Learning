import { useState } from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translation from "./components/Translation"
import Route from "./components/Route"
import Header from "./components/Header"

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use Reacr by creating components",
  },
]

const options = [
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
]

function App() {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translation />
      </Route>
    </div>
  )
}

export default App
