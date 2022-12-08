import {Link} from "react-router-dom"
export default function AllLink(){

    const allLink = [
          {
            path:"/" ,
            title :"Home" ,
          } ,{
            path:"/allProducts" ,
            title :"All Products" ,
          } ,
           

    ]

    // let style={
    //     textDecoration:"none" ,
    //     color:'black' ,
    // }

    return (
        <div style={{display:"flex" ,
        alignItems:"center" ,
         justifyContent:"space-around" , 
         width:"70%" ,margin:"auto" ,
        
         
         }}>
     {/* <Link to="/" >Home</Link>
     <Link to="/allProducts">All Products</Link>
     <Link to="/productsDetail">Product details</Link> */}
     {
        allLink.map((el)=>(
            
            <Link key ={el.path} to={el.path}>{el.title}</Link>
        )
            
        )
     }
 
   </div>
    )
}



