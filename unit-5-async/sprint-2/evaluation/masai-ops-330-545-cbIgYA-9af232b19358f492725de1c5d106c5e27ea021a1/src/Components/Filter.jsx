import React,{useEffect, useState} from 'react' ;
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI

  const [searchParams , setSearchParams] = useSearchParams()
  const [category , setCategory] = useState(searchParams.getAll('category') || [])
 
 


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

  useEffect(()=>{
    let params = {} 
     params.category = category 
     setSearchParams(params) 
    
    },[category,setSearchParams ])
    


  

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" checked={category.includes("Sneakers")} onChange={handleChange} />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers" checked={category.includes("Loafers")} onChange={handleChange} />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" checked={category.includes("Canvas")} onChange={handleChange}/>
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" checked={category.includes("Boots")} onChange={handleChange}/>
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
