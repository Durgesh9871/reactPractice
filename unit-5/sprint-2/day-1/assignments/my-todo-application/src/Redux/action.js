import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS  ,
    POST_TODOS_FAILURE, POST_TODOS_REQUEST, POST_TODOS_SUCCESS} from "./actionType"

const getTodoReq = ()=>{
    return {
        type:GET_TODOS_REQUEST 

    }
}

const getTodoSuccess = (data)=>{
    return { 
        type:GET_TODOS_SUCCESS ,
        payload :data
    }
}

const getTodoFailure = ()=>{
    return {
        type:GET_TODOS_FAILURE ,
    
    }
}

//    post req   

const postTodoReq = ()=>{
    return {
        type:POST_TODOS_REQUEST 

    }
}
 
const postTodoSuccess = (data)=>{
    return { 
        type:POST_TODOS_SUCCESS ,
        payload :data
    }
}

const postTodoFailure = ()=>{
    return {
        type:POST_TODOS_FAILURE ,
    
    }
}

export {getTodoFailure , getTodoReq , getTodoSuccess ,postTodoFailure , postTodoReq , postTodoSuccess} ;