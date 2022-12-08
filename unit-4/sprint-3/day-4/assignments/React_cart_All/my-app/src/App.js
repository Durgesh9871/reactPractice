import logo from './logo.svg';
import './App.css';
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Faq from "./Pages/Faq"
import Product from "./Pages/Product"
import Linkdata from './Components/Link';
import Footer from './Footer/Footer';
import SingleUser from "./Pages/SingleUser"
import Private from './Components/Private';
import Home from './Pages/Home';

import {Routes , Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
        {/*  Navigation bar  */}
        < Linkdata />

           <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/faq' element={<Faq/>}></Route>
            <Route path='/contact' element={< Contact/>}></Route>
            <Route path='/product' element={<Private>< Product/></Private>}></Route>
            <Route path='/product/:user_id' element={< SingleUser/>}></Route>
            <Route path='*' element={<h1>404 page not found</h1>}></Route>

           </Routes>
         
         {/* Footer */}
           <Footer/>
    
    </div>
  );
}

export default App;
