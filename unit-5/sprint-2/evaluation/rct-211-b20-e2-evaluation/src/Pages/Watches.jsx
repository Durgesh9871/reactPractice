import React from "react";
import Filter from "../Components/Filter";
import {useSelector , useDispatch} from "react-redux" 
import { useEffect } from "react"; 
import {getData} from "../Redux/AppReducer/action" 
import WatchCard from "../Components/WatchCard"

const Watches = () => {
     
    const {watches , isLoading ,isError} = useSelector((state)=>{
      return {
        watches:state.watches ,
        isLoading:state.isLoading ,
        isError:state.isError
      }
    })
    
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getData)
    },[])
    
   
  return (
    <div>
      <Filter />
      <div>
        {/* Map through the watch list here using WatchCard Component */}
        { watches.map((el)=>{
          return <WatchCard id={el.id} image={el.image} name={el.name} category={el.category} key={el.id}/>
        })}
      </div>
    </div>
  );
};

export default Watches;
