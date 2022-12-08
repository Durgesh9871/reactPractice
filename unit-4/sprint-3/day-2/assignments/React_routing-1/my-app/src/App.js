import logo from './logo.svg';
import './App.css';
import {Routes , Route , Link} from "react-router-dom"
import AllLink from "./Components/Links"
import AllProduct from "./Components/AllProduct"
import ProductDetail from "./Components/ProductDetail"

function App() {
 
  return (
    
    <div className="App">
       <AllLink />
      <Routes>
        <Route path="/"  element={<h1>Home Page</h1>}></Route>
        <Route path='/allProducts' element={<AllProduct />}></Route>
        <Route path='/Product/:user_id' element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
