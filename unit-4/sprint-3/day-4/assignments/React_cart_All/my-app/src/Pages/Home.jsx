import { useContext } from "react";
import { Authcontext } from "../AuthContext/AuthContext";

export default function Home(){
   const {toggle} = useContext(Authcontext)
   let style = {
    padding:"20px" ,
    fontSize:"20px"
   }
   return (
    <button onClick={toggle} style={style}>Log In</button>
   )
}