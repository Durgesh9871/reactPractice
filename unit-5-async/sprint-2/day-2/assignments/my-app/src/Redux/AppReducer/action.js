import  {GET_TODO_REQUEST ,GET_TODO_SUCCESS,GET_TODO_FAILURE }  from "./actionType" 
import axios from "axios" ;



const getTodoRequest = () =>{
    return {
        type:GET_TODO_REQUEST ,
    }
}




const getTodoSuccess = (data) =>{
    return {
        type:GET_TODO_SUCCESS ,
        payload: data , 
    }
}


const getTodoFailure = () =>{
    return {
        type:GET_TODO_FAILURE ,
    }
}

const displayTodo = (dispatch) =>{
    dispatch(getTodoRequest())
   return axios.get('http://localhost:8080/todo')
     .then((res)=> dispatch(getTodoSuccess(res.data)))
     .catch(()=> dispatch(getTodoFailure()) )
}

export {displayTodo}

