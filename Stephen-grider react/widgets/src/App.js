import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import { useState } from "react"

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
  const [showDropDown, setShowDropDown] = useState(true)

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <div>
        <button onClick={() => setShowDropDown(!showDropDown)}>
          Show Dropdown
        </button>
        {showDropDown ? (
          <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        ) : null}
      </div>
    </div>
  )
}

export default App
