
import { useContext } from "react";
import { Authcontext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
export default function Private({children}){
    const {isAuth} = useContext(Authcontext)

     if(!isAuth){
      return   <Navigate to="/" />
     }
     return children
   
}