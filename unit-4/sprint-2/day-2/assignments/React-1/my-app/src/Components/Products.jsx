import {useState} from "react"
export default function Product(props){
    const [count , setCount]= useState(1)
    const {text,price} =  props 
    let cursor = {
        cursor:"pointer"  ,
        fontSize :"35px" ,
        backgroundColor :"white" ,
        border :"none" ,
    }
    return <div>
        <h1> {text} ${price} 
        <button disabled={count===1} style={cursor}   onClick={()=> setCount(count-1)}>-</button> {count} <button style={cursor} onClick={()=> setCount(count+1)}>+</button></h1> 
    </div>
        


    
   
}