import React,{useState} from 'react' 
import {useDispatch , useSelector} from "react-redux"
import { useLocation, useNavigate } from 'react-router-dom'
import { getLoginData } from '../Redux/AuthData/action'

const Login = () => {
 const [email , setEmail] = useState("")
 const [password , setPassword] = useState("")

//  const token = useSelector((state)=> state.AuthDataReducer.token)
   
const dispatch = useDispatch()
const navigate = useNavigate()
const location = useLocation()

const comingFrom = location.state?.data || "/home"


// console.log("comingFrom" , comingFrom)

 const handleForm = (e)=>{
    e.preventDefault() 

    if(email && password){
        dispatch(getLoginData({email,password})).then((r)=>{
           navigate(comingFrom ,{replace: true})
        })
    }
 }
 
//  console.log("token" , token)


  return (
    <div>
     <form onSubmit={handleForm}>
       <div>
         <label>Email </label>
      <input type="email" placeholder='Enter Email'  value={email} onChange={(e) => setEmail(e.target.value)}  />
       </div>
       <div>
        <br />
       <label>password </label>
      <input type="password" placeholder='Enter Password' value ={password}  onChange={(e) => setPassword(e.target.value)}  />
       </div>
    
        <button type="submit"> Log in </button>

     </form>
    </div>
  )
}

export  {Login}
