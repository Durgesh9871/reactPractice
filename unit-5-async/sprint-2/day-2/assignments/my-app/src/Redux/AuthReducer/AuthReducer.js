import React from 'react'
import {GET_LOGIN_REQUEST ,GET_LOGIN_SUCCESS , GET_LOGIN_FAILURE } from "./actionType"


const initialState = {
    token:"" ,
    isAuthLoading:false ,
    isAuthError:false ,
    isAuth :false ,
}
const AuthReducer = (oldstate=initialState ,action) => {
    // console.log(oldstate)
     switch(action.type){
         case GET_LOGIN_REQUEST :
            return {...oldstate , isAuthLoading:true }
            case GET_LOGIN_SUCCESS :
                return {...oldstate , token:action.payload , isAuthLoading: false,isAuth:true}
                case GET_LOGIN_FAILURE :
                    return {...oldstate, isAuthError:true ,isAuthLoading:false ,isAuth:false  }
        default:
            return oldstate ;
     }
}

export default AuthReducer;
