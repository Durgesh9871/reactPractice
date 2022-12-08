import { useState } from "react"

//get the data parameter here, and you can store it in a local useState.
export const useTodos = (initialData = ['Task1']) => {
    const [data , setData] = useState(initialData)
    
    const addData = (val) => {
        setData( [...data , val])
    }

    const clearData = () => {
        setData(()=> [])
    }

    const removeByIndex = (index) => {
    setData((prev)=>{
        const newTodo = [...prev] 
        newTodo.splice(index , 1) 
        return newTodo
    })


    }

    return {
        data,
        addData, 
        clearData, 
        removeDataByIndex: removeByIndex,
    }
}