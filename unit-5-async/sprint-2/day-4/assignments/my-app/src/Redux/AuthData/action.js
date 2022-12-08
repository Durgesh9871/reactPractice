import axios from "axios"



const getLoginData = (payload)=>(dispatch)=>{
  dispatch({type:"GET_AUTH_DATA_REQUEST"})
  return axios.post(`https://reqres.in/api/login`,payload)
  .then((res) => dispatch({type:"GET_AUTH_DATA_SUCCESS" , payload :res.data.token}))
  .catch(()=> dispatch({type:"GET_AUTH_DATA_FAILURE"}))

}

export {getLoginData}