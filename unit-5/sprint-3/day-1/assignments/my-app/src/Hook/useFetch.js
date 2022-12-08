import React from 'react' 
import axios from "axios" 
import { useState ,useEffect } from 'react'


const useFetch = (URL) => {
    const [loading , setLoading] = useState(false)
    const [isError , setError] = useState(false)
    const [data , setData ] = useState([]) 

     const FetchData = ()=>{
        setLoading(true)
        axios.get(URL)
        .then((res) => setData(res.data) , setLoading(false))
        .catch(() => setError(true) ,setLoading(false))
     }

     useEffect(()=>{
        FetchData()
     },[])
     return {loading , isError ,data}
}

export default useFetch
