import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import {AllRoutes} from "./AllRoutes/AllRoutes"



function App() {
  return (
    <div className="App">
    <Link to="/home" style={{ display:"inline-block"}}><h1>Home Page</h1></Link>
    <Link to="/" style={{marginLeft:"100px" ,display:"inline-block"}}><h1>Login Page</h1></Link>
   

    <AllRoutes/>
    </div>
  );
}

export default App;
