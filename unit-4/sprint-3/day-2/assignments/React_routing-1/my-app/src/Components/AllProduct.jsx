import {useState , useEffect} from "react"
import {Link} from "react-router-dom"



export default function AllProduct(){
    const [user , setUser] = useState([])

    const  getData = async ()=>{
        try{
            // console.log('yes')
            let res = await fetch(`http://localhost:5000/Products`)
            // fetch http://localhost:5000/Products
            let data = await res.json()
            let finalData = data 
            // console.log("data" ,data)
            setUser(finalData)
        }
        catch (err){
            console.log(err)
        }
    }


        useEffect(()=>{
         getData()
            
        },[])
        
         
    // }
    return (
        <div>
             <h1>This is product page</h1>
             {
                 user.map((el)=>(
                    // <img src="el.image" alt="pic" />

                //    <p key={el.id}> <Link to={`/Product/${el.id}`}>
                //     {el.name}</Link> </p>

                    <Link key={el.id} to={`/Product/${el.id}`}>
                      <img src={el.image} alt="Product" />
                      <p>{el.name}</p>
                    </Link>

                  ))
             }

        </div>
    )
}

