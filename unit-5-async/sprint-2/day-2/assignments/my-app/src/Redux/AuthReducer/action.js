import axios from "axios";
import {GET_LOGIN_REQUEST ,GET_LOGIN_SUCCESS , GET_LOGIN_FAILURE } from "./actionType" ;



const getlogRequest = ()=>{
    return{
        type:GET_LOGIN_REQUEST ,

    }
}

const getlogSuccess = (data)=>{
    return{
        type:GET_LOGIN_SUCCESS ,
        payload :data ,
    }
}

const getlogFailure = ()=>{
    return{
        type:GET_LOGIN_FAILURE ,
    }
}

 
 export {getlogRequest ,getlogSuccess ,getlogFailure}
