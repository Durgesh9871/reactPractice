import { useState,useEffect } from "react"
import { Link } from "react-router-dom" 
import Pagination from "../Components/Pagination"
import { useSearchParams } from "react-router-dom"

  const getParamUrl =(val)=>{
  val = Number(val)
  if(typeof val === "number" && val < 0){
    val = 1 
  }
  if(!val){
    val = 1
  }
  return val 
  }
export default function Product(){
    let [searchParams , setSearchParams] = useSearchParams()
    const [product , setProduct] = useState([])
    const [page , setPage] = useState(getParamUrl(searchParams.get("page"))  || 1 )


    const getData = async (page)=>{
        try{
       let res = await fetch(`http://localhost:5000/Products?_page=${page}&_limit=2`)
       let data = await res.json()
       setProduct(data)

        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
       getData(page)
    },[page])


    //   useeffect for page 
    useEffect(()=>{
       let params = {page}
       setSearchParams(params)

    },[page])
      
    let style = {
          display:"grid" ,
          gridTemplateColumns:"repeat(2,1fr)" ,
          width :"80%" ,
          margin :"40px auto"  ,
          gap :"20px" ,
         

    }
    let secondStyle ={
           border :"2px solid grey" ,
           display:"flex" ,
           flexDirection:"column" ,
           justifyContent :"center" ,
           alignItems :"center" ,
           width:"60%"
    }
    return (
        <div>
        <div style={style}>
            
            {
                product?.map((el)=>(
                    <Link to={`/product/${el.id}`} key={el.id}>
                        <div style={secondStyle}  >
                         <img src={el.image} alt="Product" style={{width:"40%"}}/>
                      <h2>{el.name}</h2>
                      <p>{el.price}</p>
                      <button>Add to Cart</button>
                      </div>
                    </Link>
                ))
            }
        </div>
            
            <Pagination page={page} setPage ={setPage}/>
        </div>
    )
}