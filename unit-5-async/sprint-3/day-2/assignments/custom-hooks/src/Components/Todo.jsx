import React from 'react'
import { useState } from 'react'
import  Todoinput  from './Todoinput'
 
const initialData = [
    {  id:1 , status : false , task: "Practice"},{ id:2 , status : false , task: "Redux"},{ id:3 , status : false , task: "Reducer"}
]

const Todo = () => {
    const [todoData , setTodoData] = useState(initialData) 
    const [currentTodo , setCurrentTodo] = useState("") 
     
  
    const addTodoFunction = ()=>{
        let payload={
            id:todoData.length+1 ,
            status: false , 
             task:currentTodo , 
        }
        setTodoData([...todoData , payload])
        setCurrentTodo("")
    }
      
    
     

  return (
    <div style={{marginTop:"3%"}}>
        <input type="text"  placeholder='Enter Todo' value={currentTodo} onChange={(e)=> setCurrentTodo(e.target.value)} />
        <button onClick={addTodoFunction}>Add Todo</button>
    
       {todoData && todoData.map((item)=> (
        <Todoinput key={item.id} {...item} />
       ))}
    </div>
  )
}

export  {Todo}
