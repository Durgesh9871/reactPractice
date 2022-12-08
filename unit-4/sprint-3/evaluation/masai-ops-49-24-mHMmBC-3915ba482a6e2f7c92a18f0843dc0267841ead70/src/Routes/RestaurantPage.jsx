import Loader from "../Components/Loader";
import {useParams} from "react-router-dom"  
import {useState , useEffect} from "react"

function RestaurantPage() {
  const {id} = useParams()
  const [load , dataLoad] = useState(false)
  const [data , setData] = useState([])
  
  
  const getData = async (id)=>{
   try{
    dataLoad(true)
   let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
   let data = await res.json()
   let finalData = data.data 
   setData(finalData)
   dataLoad(false)


   }
   catch(err){
    console.log(err)
   }
  }

  useEffect(()=>{
    getData(id)
  },[id])
  
  
if (load) {
  
    return <Loader />;

  }


  return (
    
    <div data-testid="restaurant-container">
     
      <img data-testid="restaurant-image" width={"100%"} src={data.image} />
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{data.type}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{data.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestaurantPage;
