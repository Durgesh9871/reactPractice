//Create the HOC for protected Routes 

import { useSelector } from "react-redux"; 
import {Navigate , useLocation} from "react-router-dom"


const ReqAuth = ({children}) => {
  const location = useLocation() 

  const isAuth = useSelector((store)=>store.AuthReducer.isAuth) 
  

  if(!isAuth){
    return <Navigate to="/login" replace="true" state={{data:location.pathname}} />
  }

  return children 

};

export default ReqAuth;
