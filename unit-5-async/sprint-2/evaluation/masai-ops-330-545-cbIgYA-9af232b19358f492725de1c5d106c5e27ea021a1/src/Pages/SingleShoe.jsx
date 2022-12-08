import axios from "axios";
import React ,{useState , useEffect} from "react"; 
import {useParams} from "react-router-dom"

const SingleShoe = () => {
  const {id} = useParams() 
  const [singleData , setSingleData] = useState({})

    // console.log(id)  
   
     const getSingleData = (id)=>{
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/shoes/${id}`)
        .then((res)=> setSingleData(res.data) )
        .catch((err) => console.log(err))
     }
  
     useEffect(()=>{
      getSingleData(id)
     },[id])
      
    //  console.log(singleData)
     
  return (
    <div>
      <h1>Single Shoe Page</h1>
    </div>
  );
};

export default SingleShoe;
