import React,{useEffect , useState} from 'react'
import axios from "axios"

const useFetchApi = (Api) => {
    const [data , setData ] = useState([])

    // const getData = ()=>{
    // axios.get(Api)
    // .then((res)=>  setData(res.data))
    // .catch((err)=> console.log(err))
    // }

    async function getData(Api){
      try{
        let res = await fetch(Api)
        let data =await  res.json()
        let real = data 
        setData(real)
      }
      catch (err){
        alert("something error")
      }
     
    }
  
    useEffect(()=>{
        getData(Api)
    },[Api])


  return data 
}

export  {useFetchApi}
