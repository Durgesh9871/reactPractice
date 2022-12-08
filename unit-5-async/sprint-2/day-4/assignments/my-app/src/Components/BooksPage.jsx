import React,{useEffect} from 'react' 
import { useSelector , useDispatch } from 'react-redux' 
import { useLocation, useSearchParams ,Link} from 'react-router-dom'
import { getBooksData } from '../Redux/AppData/action'

const BooksPage = () => {
const location = useLocation()
const [searchParams] = useSearchParams()



  const booksData = useSelector((state)=>state.Appreducer.booksData)
  const dispatch = useDispatch()

    useEffect(()=>{
      if(booksData.length === 0 || location){
        const sortBy = searchParams.get("sort")
        const getBookParams = {
          params:{
            category : searchParams.getAll('category') ,
            _sort:sortBy && "release_year" ,
            _order : sortBy
          }
        }
        dispatch(getBooksData(getBookParams))
      }
    },[ location.search ])


const style ={
  display :"grid" , 
  gridTemplateColumns :"repeat(3,1fr)"
}
    
// console.log("booksData" ,booksData)
    
  return (
    <div style={style}>
     
      {booksData.length > 0 && booksData.map((item)=>(
      <Link to={`/home/${item.id}`} key={item.id}>  <div style={{border:"1px solid blue"}} >

         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVxqrnWzt59BCkIFnp_ggArqReeHzCY8Heg&usqp=CAU" alt={item.category} /> 
        <h2>{item.category}</h2>
        <h2>{item.book_name}</h2>
        <h2>{item.release_year}</h2>
        

        </div> </Link>
      ))}
      
    </div>
  )
}

export  {BooksPage}
