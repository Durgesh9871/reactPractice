import React,{useEffect} from "react";
import Filter from "../Components/Filter";
import { useSelector , useDispatch} from "react-redux"; 
import { getShoesData } from "../Redux/AppReducer/action"; 
import ShoeCard from "../Components/ShoeCard"; 
import { useLocation, useSearchParams ,Link} from 'react-router-dom'


const Shoes = () => {

  const location = useLocation()
const [searchParams] = useSearchParams()

    const shoes = useSelector((store)=> store.AppReducer.shoes) 
    const dispatch = useDispatch()
     



    useEffect(()=>{
        if(location || shoes.length === 0){
          const shoesParams ={
            params:{
             category :searchParams.getAll('category')
            }
          }
          dispatch(getShoesData(shoesParams))
        }
    },[location.search])
     
    
    // console.log(shoes)


  return (
    <div>
      <Filter />
      <div style={{display:"grid" , gridTemplateColumns:`repeat(3,1fr)`}}>
        {/* Map through the shoes list here using ShoeCard Component */}

      
        {shoes.length > 0 &&  shoes.map((item)=> (
         <Link to={`/shoes/${item.id}`} key ={item.id}>  <ShoeCard   shoeId={item.id} category={item.category} name={item.name} image={item.image}  />   </Link>
        )) }

      </div>
    </div>
  );
};

export default Shoes;
