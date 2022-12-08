import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS ,POST_TODOS_REQUEST ,POST_TODOS_SUCCESS,POST_TODOS_FAILURE} from "./actionType"
 
 const initialState = {
     todos:[]  ,
     isLoading : false ,
     isError :false ,
     postisLoading : false ,
     postisError :false ,

 }
export  const reducer = (state = initialState, action)=>{
    // console.log(state)
        switch(action.type){
           case GET_TODOS_REQUEST :
            return {...state , isLoading:true , isError:false} ;

            case GET_TODOS_SUCCESS :
                return {...state ,todos:action.payload ,isLoading:false ,isError:false }
            case GET_TODOS_FAILURE :
                return {...state , todos:[] , isError:true ,isLoading:false}
              
            case POST_TODOS_REQUEST :
               return {...state ,  postisLoading : true }
            case POST_TODOS_SUCCESS :
                return {...state ,postisLoading : false  }
             case POST_TODOS_FAILURE :
                return {...state ,postisLoading : false ,postisError :true ,  }
  

            default:
                return state 
        }
 }

 