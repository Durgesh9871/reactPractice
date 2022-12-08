import LoadingIndicator from "./LoadingIndicator";
import {useState ,useEffect} from "react" ;
import  CountriesCard from "./CountriesCard"

function Countries() { 
  
   const [arr ,updateArr] = useState([])
   const [loading ,setLoad] = useState(false)
   const [count , setCount] = useState(1)

    
  async function getData(){
    try{
      // setLoad(true)
      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=1&limit=10`)
    
      let data = await res.json()
      updateArr(data)
      console.log(data)
      //  setLoad(false)
    }
    catch (err){
      console.log(err)
    }
   }
   

   useEffect(()=>{
    getData()
   },[])

    //  if(setLoad){
    // return <LoadingIndicator />;
    //  }


  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      
      
          {
      

          arr.map((el)=>{
          return   <> <div data-testid="countries-container">
           
           <CountriesCard key={el.id} country={el.country} population={el.population} />
           </div> </>
           })
        }
          
     
      <div>
       
      </div>
    </div>
  );
}

export default Countries;
