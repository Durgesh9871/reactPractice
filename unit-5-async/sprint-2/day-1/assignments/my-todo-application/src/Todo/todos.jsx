import {InputTodo} from "../Todo/todoInput"
import axios from "axios" ;
import { useEffect } from "react";
import { useSelector,useDispatch, shallowEqual } from "react-redux";
import {getTodoFailure , getTodoReq , getTodoSuccess, postTodoFailure, postTodoSuccess,postTodoReq} from "../Redux/action"

export function Todo(){
    const dispatch = useDispatch()
      
    const {todos ,isLoading,isError} = useSelector((state) => {
      return {
        todos: state.todos ,
        isLoading:state.isLoading ,
        isError :state.isError ,
      }
}, shallowEqual)   
   
const getTodo = ()=>{
       dispatch(getTodoReq())
    axios.get("http://localhost:5000/todo")
   .then((res) => dispatch(getTodoSuccess(res.data)))
   .catch(() => dispatch(getTodoFailure()))
}


const AddTodo = (title)=>{
    if(title){
   const payload={
    title:title ,
    status :false , 
   }    
   dispatch(postTodoReq())
  return axios.post('http://localhost:5000/todo' ,payload)
   .then(() => dispatch(postTodoSuccess()))
   .catch(()=> dispatch(postTodoFailure()))

}
}

const RemoveStatus = (id,status)=>{
    const payload ={
        status:!status ,
    }
   axios.patch(`http://localhost:5000/todo/${id}`,payload)
   .then(() => getTodo())
}

const deleteTodo = (id)=>{
    axios.delete(`http://localhost:5000/todo/${id}`)
    .then(()=> getTodo())
}

const handleAddTodo = (text)=>{
    AddTodo(text)
    .then(()=> getTodo())
  
}

useEffect(()=>{
    getTodo()
},[])
  


let style = {
    display :"flex" , 
    justifyContent :"center" ,
}



   
    
    if(isError){
     return  alert("Something went wrong")
     
    }

    return (
        <div>
            <h1>Todos</h1>
           {isLoading ? (<h1>...Loading</h1>) :  (<InputTodo handleAddTodo={handleAddTodo} /> )}
           {todos.length > 0 && todos.map((el)=> (
            <div key ={el.id} style={style}>
            <h2 >  {el.title}  <button onClick={()=>RemoveStatus(el.id , el.status)}>{el.status ?"working" :"progress"}</button></h2>
            <button onClick={()=>deleteTodo(el.id)} >Delete</button>
            </div>
           ))}
        </div>
    )
}
// export {todo} 