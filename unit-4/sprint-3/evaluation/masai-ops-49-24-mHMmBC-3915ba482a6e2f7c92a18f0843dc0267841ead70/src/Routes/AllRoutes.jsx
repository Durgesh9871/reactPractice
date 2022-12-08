import {Routes , Route} from "react-router-dom"
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import RestaurantPage from "./RestaurantPage"



function AllRoutes() {
  return (
    
  <div>

     <Home />

<Routes>
 <Route path="/login" element={<Login/>}></Route>
 <Route path="/dashboard" element={<Dashboard/>}></Route>
 <Route path="/dashboard/:id" element={<RestaurantPage />}></Route>

</Routes>
  </div>
  ) 
  
    

  




}

export default AllRoutes;
