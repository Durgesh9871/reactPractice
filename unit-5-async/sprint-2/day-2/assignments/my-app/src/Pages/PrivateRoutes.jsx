import React from 'react'
import { Navigate } from 'react-router-dom' 
import { useSelector } from 'react-redux' 
import AuthReducer from '../Redux/AuthReducer/AuthReducer'

const PrivateRoutes = ({children}) => {
const isAuth = useSelector((state)=> state.AuthReducer.isAuth)
  
if(!isAuth){
    return <Navigate to="/Login" />
}
return children
 
  
}

export default PrivateRoutes
