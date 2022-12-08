import { GET_BOOKS_DATA_REQUEST , GET_BOOKS_DATA_SUCCESS , GET_BOOKS_DATA_FAILURE } from "./actionType"; 
import axios from "axios"

 const getBooksDataRequest = ()=>{
 return {
    type : GET_BOOKS_DATA_REQUEST  
 }
}

 const getBooksDataSuccess = (data)=>{
  return {
    type:GET_BOOKS_DATA_SUCCESS  , 
    payload: data 
  }
}

 const getBooksDataFailure = ()=>{
return {
    type:GET_BOOKS_DATA_FAILURE
}

}

const getBooksData =(params)=> (dispatch)=>{
   dispatch(getBooksDataRequest()) 
   return axios.get(`http://localhost:5000/books` ,params)
    .then((res)=> dispatch(getBooksDataSuccess(res.data)))
    .catch(()=> dispatch(getBooksDataFailure()))
}
export {getBooksData}