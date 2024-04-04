<<<<<<< HEAD
import { useContext } from "react"
import { UserContext } from "../../context/user.context"
import styles from './SelectUser.module.css'

function SelectUser () {
    const {userId, setUserId} = useContext(UserContext)
    
    const changeUser = (e) => {
        setUserId(Number(e.target.value))

    }

    return (
        <select className={styles['select']} name='user' id='user' value={userId} onChange={changeUser}>
            <option value="1">Антон</option>
            <option value='2'>Василий</option>
        </select>
    )
}   

=======
import { useContext } from "react"
import { UserContext } from "../../context/user.context"
import styles from './SelectUser.module.css'

function SelectUser () {
    const {userId, setUserId} = useContext(UserContext)
    
    const changeUser = (e) => {
        setUserId(Number(e.target.value))

    }

    return (
        <select className={styles['select']} name='user' id='user' value={userId} onChange={changeUser}>
            <option value="1">Антон</option>
            <option value='2'>Василий</option>
        </select>
    )
}   

>>>>>>> 74b09b3caf063b2ee6a3d512777f0af827501a7a
export default SelectUser