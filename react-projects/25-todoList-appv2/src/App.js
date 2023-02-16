import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import TodoForm from "./components/Todos/TodoForm"
import TodoList from "./components/Todos/TodoList"
import TodosActions from "./components/Todos/TodosActions"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      toggle: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, toggle: !todo.toggle } : { ...todo }
      )
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.toggle))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm handler={addTodoHandler} />
      <TodosActions
        resetTodos={resetTodosHandler}
        deleteCompleted={deleteCompletedTodosHandler}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  )
}

export default App
