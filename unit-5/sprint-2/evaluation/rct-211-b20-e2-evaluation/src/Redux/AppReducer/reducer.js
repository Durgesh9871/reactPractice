// NOTE: DO NOT MODIFY the intial state structure in this file.
import {GET_WATCHES_DATA_REQUEST ,GET_WATCHES_DATA_SUCCESS,GET_WATCHES_DATA_FAILURE} from "./actionType"


const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState ,action) => {
      switch(action.type){
        case GET_WATCHES_DATA_REQUEST :
         return {...state , isLoading:true}
        case GET_WATCHES_DATA_SUCCESS :
          return {...state , watches:action.payload , isLoading:false}
          case GET_WATCHES_DATA_FAILURE:
            return {...state, isError:true , isLoading:false}
         default :
         return state;

      }


};

export { reducer };
