import logo from './logo.svg';
import './App.css';
import {useState , useEffect} from "react"



function App() {
  const [count , setCount] = useState(5)

    useEffect(()=>{
      const id = setInterval(()=>{
           setCount((prevCount)=>{
            if(prevCount == 1){
              clearInterval(id)
              return 0 
            }
            return prevCount-1
           })
      },1000)
    },[])

  return (
    <div className="App">
     <h1>Count down {count} </h1>

    </div>
  );
}

export default App;
