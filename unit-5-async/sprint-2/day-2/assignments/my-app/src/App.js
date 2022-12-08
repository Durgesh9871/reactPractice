import logo from './logo.svg';
import './App.css';
// import HomeTodo from "./Pages/HomeTodo"
import MainRoutes from "./Pages/MainRoutes" 
import {Link} from "react-router-dom"


function App() {
  
  const style={
    display:"flex" ,
    justifyContent:"space-around" ,
  }
  return (
    <div className="App">
      <div style={style}>
          <Link to="/">Home Page</Link>
          <Link to="/Login">Login Page</Link>

       </div>
        <MainRoutes/>

    </div>
  );
}

export default App;
