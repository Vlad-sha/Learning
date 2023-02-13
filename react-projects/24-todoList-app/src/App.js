import { useState } from "react"
import TodoForm from "./components/Todos/TodoForm"
import TodoList from "./components/Todos/TodoList"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  const deleteHandler = (index) => {
    setTodos(todos.filter((todo, id) => id !== index))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm handler={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteHandler} />
    </div>
  )
}

export default App
