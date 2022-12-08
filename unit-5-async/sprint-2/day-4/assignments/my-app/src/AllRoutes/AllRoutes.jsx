import React from 'react'
import {Routes , Route} from "react-router-dom"
import { CommonPage } from '../Pages/CommonPage'
import {Login} from '../Pages/Login'
import {SinglePage} from '../Pages/SinglePage'
import { PrivateRoutes } from '../Pages/PrivateRoutes'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={  <CommonPage/>  }></Route>
        <Route path = "/home/:id" element={<PrivateRoutes> <SinglePage /> </PrivateRoutes>}></Route>
        <Route path="/" element={<Login /> }></Route> 

      </Routes>
    </div>
  )
}

export  {AllRoutes}
