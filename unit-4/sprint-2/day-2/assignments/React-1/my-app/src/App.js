import logo from './logo.svg';
import './App.css';
import Product from "./Components/Products"
import {useState} from "react"

function App() {
  const [count , setCount]= useState(0)
 
  
  let cursor = {
    cursor:"pointer"  ,
    fontSize :"35px" ,
    backgroundColor :"white" ,
    border :"none" ,
}     
    function add(){
     return  setCount(count+1)
    }
 
  let pro = [
   { name:"Noodles" , price:"30" } ,
   { name:"Biryani" , price:"90" } ,
   { name:"Biscuit" , price:"10" } ,
    
  ]
   
    


  return (
    <div className="App">
      <div className='appBorder'>
      {pro.map((el)=> <Product text={el.name} price ={el.price}
     />)}
        
        <h2>Total- 130</h2>
      </div>

   
     
    </div>
  );
}

export default App;
