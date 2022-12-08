import React from 'react'
import {useState , useEffect} from "react"

const useTimeout = (delay= 1000) => {
    const [ready , setTime] = useState(false)
  

  useEffect(()=>{
    let timining =  setTimeout(()=>{
       setTime(true)
       console.log('yes')
    },delay)
    return ()=>{
         clearTimeout(timining)
    }

  },[delay])

  return {ready} 
}

export default useTimeout
