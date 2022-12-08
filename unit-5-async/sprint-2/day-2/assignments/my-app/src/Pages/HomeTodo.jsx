import React from 'react'
import { useEffect } from 'react';
import {useSelector , useDispatch} from "react-redux" 
import {displayTodo} from "../Redux/AppReducer/action" 

const HomeTodo = () => {


    const {todoData ,isLoading , isError} = useSelector((state)=>{
      // console.log(state)
        return {
             todoData:state.Todoreducer.todoData ,
             isLoading:state.Todoreducer.isLoading ,
             isError: state.Todoreducer.isError , 
        }
       })
    
      const dispatch = useDispatch()
      useEffect(()=>{
         dispatch(displayTodo)
      },[])
        // console.log(TodoData)
        if(isError){
          return alert("Something Went Wrong")
        }
  return (
    <div>
       {isLoading && <h1>...Loading</h1>}
      {todoData.length > 0 && todoData.map((el)=>{
        return (
          <div key={el.id}>
             <h2>{el.title} - {el.status?"Completed":"Progress"}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default HomeTodo
