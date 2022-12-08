import React,{useState} from "react"; 
import { useDispatch , useSelector } from "react-redux"; 
import { getLoginData } from "../Redux/AuthReducer/action"; 
import { useLocation, useNavigate } from 'react-router-dom'


const Login = () => {
const [email , setEmail ] = useState("")
const [password , setPassword] = useState("") 
 

  // console.log(email)
  // console.log(password)
  // const token = useSelector((store)=> store.AuthReducer.token) 

  const dispatch = useDispatch()
  const navigate = useNavigate()
 const location = useLocation()
  
  const goPage = location.state?.data || "/"

  const handleForm = (e)=>{
       e.preventDefault() 
       dispatch(getLoginData({email , password})).then((r)=>{
        navigate(goPage ,{replace: true})
       })

  }

  // console.log(token)


  return (
    <div data-testid="login">
      <h2>LOGIN</h2>
      <form onSubmit={handleForm}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email"  value={email} onChange={(e) =>setEmail(e.target.value) }  />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password"  value={password}  onChange={(e) =>setPassword(e.target.value) } />
        </div>
        <button type="submit" data-testid="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
