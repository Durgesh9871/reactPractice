
import {Link} from "react-router-dom"  

export  default function Linkdata(){
      let style = {
        display:"flex" ,
         justifyContent:"space-around" ,
         alignItems:"center" ,

      }
    return (
        <div style={style}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
            <Link to="/faq">FAQ</Link>
        </div>
    )
}