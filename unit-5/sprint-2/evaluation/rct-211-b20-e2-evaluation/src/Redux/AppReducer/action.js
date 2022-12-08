//Write the ActionCreator functions here 

import {GET_WATCHES_DATA_REQUEST ,GET_WATCHES_DATA_SUCCESS,GET_WATCHES_DATA_FAILURE} from "./actionType"
import axios from "axios"

const  getWatchReq = ()=>{
    return {
        type:GET_WATCHES_DATA_REQUEST ,
    }
}

const getWatchSuccess = (data)=>{
    return{
        type:GET_WATCHES_DATA_SUCCESS ,
        payload:data  ,
    }
}

const getWatchFailure = ()=>{
    return{
        type:GET_WATCHES_DATA_FAILURE ,
    }
}


const getData = (dispatch)=>{
    dispatch(getWatchReq())
 return axios.get('http://localhost:8080/watches')
  .then((res)=>  dispatch(getWatchSuccess(res.data)))
  .catch(() => dispatch(getWatchFailure()))
}

export {getData}