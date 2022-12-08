import logo from './logo.svg';
import './App.css';
import {SetTimeout} from "./Components/setTimeout" 
import {Fetch} from "./Components/Fetch"

function App() {
  return (
    <div className="App">
      

     <SetTimeout />

     < Fetch /> 
      
      <Todo />
       
    </div>
  );
}

export default App;
