import logo from './logo.svg';
import './App.css';  
import {useEffect} from "react" ;
import {getMusicRecord} from "./Redux/action" ;
import {useSelector , useDispatch} from "react-redux"

function App() {
  // const 
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getMusicRecord)
  },[])
  return (
    <div className="App">
      hello 
    </div>
  );
}

export default App;
