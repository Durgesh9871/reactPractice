import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar';
import axios from "axios"
// import countries from "./Components/country" 


function App() {
  const [query , setQuery] = useState('')
  const [suggestions , setSuggestions] = useState([])

  const [data , setData] = useState([]) 

const answer = ()=>{
   axios.get('https://github.com/samayo/country-json/blob/master/src/country-by-capital-city.json')
   .then((res)=>setData(res.data))
   .catch((err)=>console.log(err))
}
  useEffect(()=>{
     answer()
  },[])
   
  const queryHandler = useCallback((val) =>{
    setQuery(val)
  },[])

console.log(data)

  useEffect(()=>{
  if(query == ""){
    setSuggestions([])
  }else{
    let inputText = query.toLowerCase() ; 
    let newSuggestions = data.filter(item=>{
      return item.name.toLowerCase().indexOf(inputText) !== -1 ? true :false 
    }).map(item => item.name);
    setSuggestions(newSuggestions)
    // console.log(newSuggestions)
  }
  } ,[query])

  return (
    <div className="App">
     <h1>Search Bar</h1>
     <h3>Search Query is {query}</h3>
     <SearchBar suggestions={suggestions} queryHandler={queryHandler}/>
    </div>
  );
}

export default App;
