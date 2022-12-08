import React from 'react'
import  {GET_MUSIC_RECORD_REQUEST , GET_MUSIC_RECORD_FAILURE ,GET_MUSIC_RECORD_SUCCESS} from "./actionType"

const initialState ={
   musicRecord: []  ,
   isLoading: false ,
   isError :false ,
   
}

const reducer = (oldState=initialState , action) => {
         console.log(oldState)

           switch(action.type){
              case GET_MUSIC_RECORD_REQUEST :
                return {...oldState , isLoading:true } 
                case GET_MUSIC_RECORD_SUCCESS :
                    return {...oldState,musicRecord:action.payload , isLoading:false } 
                    case GET_MUSIC_RECORD_FAILURE :
                        return {...oldState , isError:true , isLoading:false}

                 default :
                 return oldState
           }
}

export default reducer
