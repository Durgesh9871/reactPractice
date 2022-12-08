import { createContext } from "react";
import { useState } from "react";

export const Authcontext = createContext()

function AuthcontextProvider({children}){
        const [isAuth , setisAuth] = useState(false)
   const toggle = ()=>{
      setisAuth(isAuth===true?false:true)
   }
    return (
         <Authcontext.Provider value={{isAuth , toggle}}>
            {children}
         </Authcontext.Provider>
    )
} 
export default AuthcontextProvider
