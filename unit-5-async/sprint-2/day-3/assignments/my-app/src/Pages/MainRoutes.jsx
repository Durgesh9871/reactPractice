import {Routes , Route} from "react-router-dom"   
import HomeTodo from "./HomeTodo" ;
// import Login from "./Login"
// import { Link } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
// import React from 'react'
import Login from "./Login"

const MainRoutes = () => {
  return (
    <div>
   
      <Routes>
        <Route path="/" element={<PrivateRoutes><HomeTodo/></PrivateRoutes>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      </div>
  
  )
}

export default MainRoutes
