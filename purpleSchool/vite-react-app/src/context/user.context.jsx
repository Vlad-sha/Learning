<<<<<<< HEAD
import { createContext} from "react";
import { useState } from 'react'

export const UserContext = createContext({
    userId: 1
})

export const UserContextProvider = ({children}) => {
    const [userId, setUserId] = useState(1)

    return (
        <UserContext.Provider value ={ {userId, setUserId}}>
            {children}
        </UserContext.Provider>
    )
=======
import { createContext} from "react";
import { useState } from 'react'

export const UserContext = createContext({
    userId: 1
})

export const UserContextProvider = ({children}) => {
    const [userId, setUserId] = useState(1)

    return (
        <UserContext.Provider value ={ {userId, setUserId}}>
            {children}
        </UserContext.Provider>
    )
>>>>>>> 74b09b3caf063b2ee6a3d512777f0af827501a7a
}