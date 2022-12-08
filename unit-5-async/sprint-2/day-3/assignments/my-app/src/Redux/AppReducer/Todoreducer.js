import  {GET_TODO_REQUEST ,GET_TODO_SUCCESS,GET_TODO_FAILURE }  from "./actionType" ;

const initialState = {
     todoData :[] ,
     isLoading:false ,
     isError:false , 
}


const Todoreducer = (oldstate=initialState, action)=>{
    // console.log(oldstate) 
      switch(action.type){
          case GET_TODO_REQUEST :
            return {...oldstate , isLoading:true} 
            case GET_TODO_SUCCESS :
                return {...oldstate, todoData:action.payload, isLoading:false}
            case GET_TODO_FAILURE :
                return {...oldstate, isError:true , isLoading:false , todoData:[]}
         default:
            return oldstate ;
      }
}

export default Todoreducer