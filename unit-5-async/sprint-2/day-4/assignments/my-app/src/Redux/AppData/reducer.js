import React from 'react'
import { GET_BOOKS_DATA_REQUEST , GET_BOOKS_DATA_SUCCESS , GET_BOOKS_DATA_FAILURE } from "./actionType"; 



const initialState = {
  booksData : [] ,
  isLoading : false ,
  isError : false , 
}


const Appreducer = (oldstate=initialState , action) => {
   switch(action.type){
    case GET_BOOKS_DATA_REQUEST :
      return {...oldstate , isLoading: true } 
      case GET_BOOKS_DATA_SUCCESS :
        return {...oldstate , booksData:action.payload , isLoading: false }
        case GET_BOOKS_DATA_FAILURE :
          return {...oldstate , isError:true , isLoading:false }
     default:
      return oldstate ; 

   }
    
  
}

export  {Appreducer}
