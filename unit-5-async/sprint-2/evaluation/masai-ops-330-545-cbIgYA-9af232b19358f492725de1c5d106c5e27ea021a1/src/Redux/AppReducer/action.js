//Write the ActionCreator functions here
import {GET_SHOES_DATA_REQUEST , GET_SHOES_DATA_SUCCESS , GET_SHOES_DATA_FAILURE}  from "./actionType" 
import axios from "axios" 

const getShoesDataRequest = ()=>{
    return {
        type: GET_SHOES_DATA_REQUEST , 
    }
}

const getShoesDataSuccess = (data)=>{
    return {
        type: GET_SHOES_DATA_SUCCESS , 
        payload : data 
    }
}

const getShoesDataFailure = ()=>{
    return {
        type: GET_SHOES_DATA_FAILURE , 
    }
}


const getShoesData =(params)=> (dispatch)=>{
     dispatch(getShoesDataRequest())
     return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/shoes` ,params)
     .then((res)=> dispatch(getShoesDataSuccess(res.data)))
     .catch(()=>  dispatch(getShoesDataFailure()))
}

export {getShoesData} ;