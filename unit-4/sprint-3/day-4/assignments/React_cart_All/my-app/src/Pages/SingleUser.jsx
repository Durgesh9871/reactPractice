
import {useParams , Link} from "react-router-dom"
import { useState ,useEffect } from "react"

 export default function SingleUser(){
  const [single , setData] = useState([])
  const {user_id} = useParams()

  const getData = async (user_id)=>{
    try{
   let res = await fetch(`http://localhost:5000/Products/${user_id}`)
   let data = await res.json()
   setData(data)
    }
    catch (err){
      console.log(err)
    }
  }


  useEffect(()=>{
        getData(user_id)
  },[])

      return (
        <div>
            <h1>You can buy</h1>
            <>
              <img src={single.image} alt="Image" />
              <h2>{single.name}</h2>
              <p>{single.price}</p>
            </>
             <Link to="/product"><button>GO Back</button></Link>
        </div>
      )
}