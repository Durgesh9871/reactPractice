import axios from "axios"
import { useFetchApi } from "../Hooks/FetchApi"

const Fetch = () => { 
   
  const data = useFetchApi('https://tan-real-buffalo.cyclic.app/Fish&SeaFood')
//   console.log(data)
   return (
    <div>
         {data && data.map((item)=>(
            <img src={item.imgUrl} alt=""   key={item.id}/>
         ))}
    </div>
   )
  
}

export  {Fetch}
