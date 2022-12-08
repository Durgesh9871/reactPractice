//import the action types here from the actionTypes.js to be used in the reducer function

//Complete the reducer function here
const reducer = (reducerState , action) => {
    switch(action.type){
        case "GET_PRODUCTS_SUCCESS" :
         return {...reducerState , data:action.payload , isLoading:false}
         case "GET_PRODUCTS_REQUEST":{
             return {...reducerState ,isLoading:true  ,isError:false}
         }
         case "GET_PRODUCTS_FAILURE" :{
             return {...reducerState , isError :true , isLoading:false }
         }
          default :
          return reducerState ;
      }
};

export { reducer };

// data: [],
// isLoading: false,
// isError: false,