


const initialState = {
    isAuth : false , 
    isAuthLoading : false , 
    token :"" ,
    isAuthError : false  

}

const AuthDataReducer = (oldstate=initialState , action)=>{
      switch(action.type){
      case "GET_AUTH_DATA_REQUEST" :
        return {...oldstate , isAuthLoading: true ,isAuth: false }
        case "GET_AUTH_DATA_SUCCESS" :
            return {...oldstate , token: action.payload , isAuth: true }
            case "GET_AUTH_DATA_FAILURE" :
       return {...oldstate , isAuthError: true , isAuthLoading : false ,isAuth: false  }
        default:
            return oldstate ; 
      }
}

export {AuthDataReducer}