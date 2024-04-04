<<<<<<< HEAD
import { useState,useEffect } from "react"

export function useLocalStorage (key) {
    const [data, setData] = useState()
    useEffect(() => {
        const response = JSON.parse(localStorage.getItem(key))
        if (response) {
          setData(response)
        }
      },[])

      const saveData = (newData) => {
        localStorage.setItem(key, JSON.stringify(data))
        setData(newData)
      }


    return [data, saveData]
=======
import { useState,useEffect } from "react"

export function useLocalStorage (key) {
    const [data, setData] = useState()
    useEffect(() => {
        const response = JSON.parse(localStorage.getItem(key))
        if (response) {
          setData(response)
        }
      },[])

      const saveData = (newData) => {
        localStorage.setItem(key, JSON.stringify(data))
        setData(newData)
      }


    return [data, saveData]
>>>>>>> 74b09b3caf063b2ee6a3d512777f0af827501a7a
}