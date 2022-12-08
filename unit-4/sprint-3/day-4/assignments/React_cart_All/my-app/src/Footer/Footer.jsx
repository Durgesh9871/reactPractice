import {Link} from "react-router-dom"
export default function Footer(){
    let style = {
        backgroundColor:"black" ,
        color:"white" ,
        display:"flex" ,
        justifyContent:"space-around" ,
        alignItems:"center" ,
        padding:"30px" ,
        position:"fixed" ,
        bottom:"30px" ,
        width:"100%"

    }
return (
    <div style={style}>
           
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/shoppingcart">Visit Page</Link>
            <Link to="/faq">Ques & Ans</Link>
    </div>
)
}