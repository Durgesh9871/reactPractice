import React,{useState , useEffect} from 'react'

const useTimeout = (delay) => {


    const [value , setValue] = useState(false)
  
    useEffect(()=>{
     let id =   setTimeout(()=>{
         setValue(true)
         // console.log("yes")
     },delay)  
     return ()=>{
         clearInterval(id)
     }
    },[])
  return value 
  
}

export  {useTimeout}
