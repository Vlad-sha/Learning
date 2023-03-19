import UserContext from "../context/UserContext"
import { useContext } from "react"
function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext)
  return (
    <button
      onClick={() => changeUserName(userName === "Test" ? "Vladislav" : "Test")}
    >
      Change User
    </button>
  )
}

export default ChangeUser
