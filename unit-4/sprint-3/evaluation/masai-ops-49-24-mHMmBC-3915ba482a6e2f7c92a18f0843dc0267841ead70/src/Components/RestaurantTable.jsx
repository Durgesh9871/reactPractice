import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react" ;
// import Dashboard  from "../Routes/Dashboard";
// import Pagination from "./Pagination";
function RestaurantTable() {
 const [table , setTable] = useState([])
 const [load , noLoad] = useState(false)


 const getData = async ()=>{
  // console.log("table" ,table)
     try{

      noLoad(true)
      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=1&limit=10
      `)

      let data = await res.json()
      let finalData = data.data
      setTable(finalData)
      noLoad(false)
      // console.log(finalData)
     }
     catch (err){
      console.log(err)
     }
 }
 useEffect(()=>{
   getData()
 },[])

  return (
    
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {
          table?.map((el)=>{
            // console.log('yes')
        return    <RestaurantCard key={el.id} name={el.name} rating={el.rating} type={el.type} price_starts_from ={el.price_starts_from} id ={el.id} />
            // console.log(el.name)
          })
        }
      </tbody>
    
    </table>
      // <h1>helzlo</h1>
      
  );
}

export default RestaurantTable;
