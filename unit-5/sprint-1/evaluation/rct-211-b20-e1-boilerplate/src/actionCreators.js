//create action creator functions here, using the action types from actionTypes.js;

export default function reducer(reducerState,action){
     switch(action.type){
       case " GET_PRODUCTS_SUCCESS " :
        return {...reducerState , arr:action.payload}
        case "GET_PRODUCTS_REQUEST":{
            return {...reducerState ,loading:true }
        }
        case "GET_PRODUCTS_FAILURE" :{
            return {...reducerState , isError :false }
        }
         default :
         return reducerState ;
     }


}