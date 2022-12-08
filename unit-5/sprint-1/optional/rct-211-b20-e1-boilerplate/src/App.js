import { useReducer , useEffect } from "react";
import "./App.css";
import {reducer} from "./reducer" 
import {initialState} from "./initialState"
import axios from "axios"; 
import ProductCard from "./Components/ProductCard"

function App() {
  //DO NOT USE use useState;
  //use the useReducer function here; import the reducer function from reducer.js and initial state variable from initialState.js here, for useReducer arguments.
  const [reducerState, dispatch] = useReducer(reducer , initialState);
     
       const getData = ()=>{
        return axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products')
       }
        
       const showData = ()=>{
        dispatch({type:"GET_PRODUCTS_REQUEST"})
         getData()
        .then((res)=> dispatch({type:"GET_PRODUCTS_SUCCESS" ,payload:res.data.data}))
        .catch(()=>  dispatch({type:"GET_PRODUCTS_FAILURE"}))
        

       }

       useEffect(()=>{
        showData()
       },[])

  //  console.log(reducerState)



  if(reducerState.isLoading === true){
   return  <div data-tesid="loading">Loading...</div>
  }
  if(reducerState.isError === true){
   return <div data-testid="error" style={{ color: "red" }}>
    Error in fetching details
  </div>
  }
  return (
    <div>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>PRODUCTS</h1>
          <div>Welcome to the RCT-211-B20 E1 Evaluation</div>

          {/* If the application is in the loading state, show the below div else not */}
            

             
            
          

          {/* If there is any error while fetching the data from the API, show the below div, else not */}
        
          
          {/* Map through the products data, here, by passing the data to the ProductCards component */}

          {reducerState.data.map((el)=>(
           <ProductCard  price={el.price} image={el.image} title={el.title} brand={el.brand}/>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
