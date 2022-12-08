import {Navigate, useLocation} from "react-router-dom"
import React from 'react'
import { useSelector } from 'react-redux'
import { AuthDataReducer } from '../Redux/AuthData/reducer'

const PrivateRoutes = ({children}) => {
  const location = useLocation() 
  

  const {isAuth} = useSelector((store)=> {
    return {
        // token : store.AuthDataReducer.token ,
        isAuth : store.AuthDataReducer.isAuth ,
    }
  })
        
       
   
    if( !isAuth ){
     return  <Navigate to="/" replace="true" state={{data:location.pathname}} />
    }
    
    return children 
}

export  {PrivateRoutes} 
