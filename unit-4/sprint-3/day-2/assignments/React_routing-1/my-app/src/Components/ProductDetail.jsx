import {useState , useEffect} from "react"  ; 
import {useParams ,Link } from "react-router-dom"

export default function ProductDetail(){
   const [myData , setData ] = useState([])
   const {user_id} = useParams()

    
   const singleData = async (user_id)=>{
    try{
     let res = await fetch(`http://localhost:5000/Products/${user_id}`)
     let  data = await res.json()
     setData(data)
    }
    catch (err){
        console.log(err)
    }
   }
   
   useEffect(()=>{
     singleData(user_id)
   },[user_id])
   

  return (
     <div>
      <h1>Particular Product detail</h1>
        
              <>
              <img src={myData.image} alt="Products" />
                <h1>name : {myData.name}</h1>
                <h2>price : {myData.price}</h2>
                </>

                <Link to="/allProducts">Go On Product Page</Link>
      
       
     </div>
  )
}