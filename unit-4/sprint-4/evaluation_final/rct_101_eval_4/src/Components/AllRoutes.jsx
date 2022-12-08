import React from "react"; 
import {Routes , Route} from "react-router-dom"
import Login from "../Pages/Login"
import Home from "../Pages/Home"
import Cart from "../Pages/Cart"
import Navbar from "./Navbar";
import PrivateRoute from "./PrivateRoute"


// all the routing using the routing library should be done from here; 

const AllRoutes = () => {
  return( 
     <div>
      <Navbar />
    <Routes>
     
      <Route path="/" element={<Login />}>  </Route>
        
      <Route path="/Home" element={<PrivateRoute><Home /></PrivateRoute>}> </Route>
      
      <Route path="/Cart" element={<PrivateRoute>< Cart /></PrivateRoute>}>  </Route>
    </Routes>
        
     
    </div>
  )
};

export default AllRoutes;
