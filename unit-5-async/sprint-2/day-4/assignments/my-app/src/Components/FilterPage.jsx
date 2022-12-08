
import React,{useEffect, useState} from 'react' ;
import { useSearchParams } from 'react-router-dom';



const FilterPage = () => {
  const [searchParams , setSearchParams] = useSearchParams()
 const [category , setCategory] = useState(searchParams.getAll('category') || [])

const [sort , setSort ] = useState(searchParams.getAll("sort")[0] || "")
 
  const handleChange = (e)=>{
    let newCategory = [...category] 

   if(newCategory.includes(e.target.value)){
    newCategory.splice(newCategory.indexOf(e.target.value) , 1)
   }
   else{
        newCategory.push(e.target.value)
   }
   setCategory(newCategory)

  }
  

  const handleSort = (e)=>{
      setSort(e.target.value)
  }

  useEffect(()=>{
    let params = {} 
     params.category = category 
    sort &&  (params.sort = sort )
     setSearchParams(params) 
    


  },[category,setSearchParams ,sort])
  



  
  // console.log(category)
  
  return (
    <div>
      <div>
      <h1>Filter Options</h1>

        <div>
        <input type="checkbox" value="Novel" checked={category.includes("Novel")} onChange={handleChange}  />
          <label>Novel</label>
        </div>

        <div>
        <input type="checkbox" value="Motivational" checked={category.includes("Motivational")} onChange={handleChange}  />
          <label>Motivational</label>
        </div>

        <div>
        <input type="checkbox" value="Science_Fiction" checked={category.includes("Science_Fiction")} onChange={handleChange}   />
          <label>Science Fiction</label>
        </div>

        <div>
        <input type="checkbox" value="Thriller" checked={category.includes("Thriller")} onChange={handleChange}   />
          <label>Thriller</label>
        </div>

      </div>
      
   
      <div>
        <h1>Sorting</h1>

        <div>
        <input type="radio" value="asc" defaultChecked={sort === 'asc'} name="sortBy"  onChange={handleSort}   />
          <label>Low to high</label>
          
          <br />
        <input type="radio" value="desc" defaultChecked={sort === 'desc'} name="sortBy"  onChange={handleSort}   />
          <label>High to low </label>
        </div>

      </div>
       
      
    </div>
  )
}

export  {FilterPage}
