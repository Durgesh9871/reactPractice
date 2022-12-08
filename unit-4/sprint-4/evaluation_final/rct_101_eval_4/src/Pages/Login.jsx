import React from "react";
import {FormControl ,FormLabel ,Input ,Container ,Button} from "@chakra-ui/react"
import {useState} from "react"
import {sendData} from "./Axios" 
import { Navigate } from "react-router-dom"; 
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";


// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`
 
const Login = () => {
  const [userData , setUserData] = useState({
    email:"" ,
    password:"" ,
  })
  const {accepted , rejected} = useContext(AuthContext)
  // const [value , setValue] = useState(false)
  const {value , setValue}  = useContext(AuthContext)

  const handleChange= (e) =>{
   const {name , value} = e.target ;
   setUserData({
     ...userData ,
      [name]:value ,
   })
  }
  
  const setUser = (userData)=>{
    sendData(userData)
    .then((res) => rejected(res.data) , setValue(true))
    .catch(() => alert("Something went wrong. please refresh"))
  }
     if(value== true && accepted){
       
        return (
          < Navigate to ="/Home" />
          
        )

     }

  return (
    <div>
      
      <Container width="50%"> 
        
     <FormControl isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='Enter Email' type="email"  name="email" value={userData.email} onChange={handleChange}/>
</FormControl>

<FormControl isRequired>
  <FormLabel>Password</FormLabel>
  <Input placeholder='password' type="password" name="password" value={userData.password} onChange={handleChange}/>
</FormControl>
  
<FormControl isRequired>
  <Button onClick={()=>setUser(userData)}>Submit:</Button>
</FormControl>

</Container>

    </div>
  )
};

export default Login;
