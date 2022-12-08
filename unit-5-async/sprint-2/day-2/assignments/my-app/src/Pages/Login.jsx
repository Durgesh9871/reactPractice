import React from 'react'
import { useState } from 'react'
import AuthReducer from '../Redux/AuthReducer/AuthReducer';
import {getlogRequest ,getlogSuccess ,getlogFailure} from "../Redux/AuthReducer/action"
import {Navigate} from "react-router-dom" ;
import { useSelector,useDispatch } from 'react-redux' ;
import axios from 'axios'

const Login = () => {
  const [userData , updateUserData]= useState({
    email:"" ,
    password:"" ,
  })
// console.log('true')
  const dispatch = useDispatch()
  const {isAuth ,isAuthError ,isAuthLoading ,token}= useSelector((state)=>{
   return {
    isAuth: state.AuthReducer.isAuth,
    isAuthError: state.AuthReducer.isAuthError,
    isAuthLoading:state.AuthReducer.isAuthLoading ,
    token:state.AuthReducer.token
   }
  })

    // console.log(isAuth)
    // console.log(token)
  
  const handleChange = (e)=>{
          const {name ,value} = e.target 
          updateUserData({
            ...userData,
            [name]:value
          })
  }

  const sendData = (userData)=>{
    if(userData){
    const payload = {
      email:userData.email,
      password:userData.password,
    }
    dispatch(getlogRequest())
        axios.post('https://reqres.in/api/login',payload)
        .then((res)=> dispatch(getlogSuccess(res.data.token)))
        .catch(()=> dispatch(getlogFailure()))
       
  }
}
    
const handleSubmit = (e)=>{
   e.preventDefault() 
  sendData(userData)

}
    
             

  if(isAuthError){
    return alert("Refresh Page")
  }
  if(isAuth){
    return <Navigate to="/" />
  }

  return (
    <div>
     {isAuthLoading && (<h1>...Loading</h1>)}
      <form onSubmit={handleSubmit}>
        <input type="text" value={userData.email} onChange={handleChange} name="email" placeholder='Enter Email'/>
        <br />
        <br />
        <input type="password"value={userData.password} onChange={handleChange} name="password" placeholder='Enter Password'/>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
