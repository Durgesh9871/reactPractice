// NOTE: DO NOT MODIFY the intial state structure in this file.
import { LOGIN_REQUEST ,LOGIN_SUCCESS ,LOGIN_FAILURE} from "./actionTypes";


const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState , action) => {
           switch(action.type){
            case LOGIN_REQUEST:
            return {...state , isLoading: true }
            case LOGIN_SUCCESS :
             return {...state , token:action.payload , isAuth:true , isLoading:false  } 
              
             case LOGIN_FAILURE :
              return {...state ,isError:true , isLoading:false  , isAuth: false  }

               default :
               return state 

           }
};

export { reducer };
