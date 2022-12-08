import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SinglePage = () => {
  const {id} = useParams()
  const [data , setData] = useState({})
   
  const getSinglePageData = (id)=>{
    axios.get(`http://localhost:5000/books/${id}`)
    .then((res) => setData(res.data))
  }
   
  useEffect(()=>{
    getSinglePageData(id)
  },[id])

  
   
  return (
    <div>
      <h1>Single Page </h1>
        <h1>{data.category}</h1>
        <h1>{data.release_year}</h1>
    </div>
  )
}

export  {SinglePage}
