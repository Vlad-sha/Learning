import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import Button from "../UI/Button"

function TodosActions({ resetTodos, deleteCompleted }) {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear Completed Todos" onClick={deleteCompleted}>
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodosActions
