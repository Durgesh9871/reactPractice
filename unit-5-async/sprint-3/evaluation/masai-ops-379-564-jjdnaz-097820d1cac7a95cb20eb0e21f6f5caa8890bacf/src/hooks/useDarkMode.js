import {useEffect, useState} from "react"

const useDarkMode = () => {
     
    const [isDarkMode, ChangeValue] = useState(false)
      
   const toggleDarkMode =()=>{
    ChangeValue((prev)=> !prev)
   }
     

     
     
     return [isDarkMode ,toggleDarkMode]
    
};

export default useDarkMode;
