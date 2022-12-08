import {GET_MUSIC_RECORD_REQUEST , GET_MUSIC_RECORD_FAILURE ,GET_MUSIC_RECORD_SUCCESS} from "./actionType" ;
import axios from "axios" ;

const getMusicRecordRequest = () =>{
    return {
        type: GET_MUSIC_RECORD_REQUEST , 
    }
}

const getMusicRecordSuccess = (payload) =>{
    return {
        type:  GET_MUSIC_RECORD_SUCCESS , 
        payload ,
    }
}

const getMusicRecordFailure = () =>{
    return {
        type: GET_MUSIC_RECORD_FAILURE , 
    }
}


const getMusicRecord = (dispatch)=>{
      dispatch(getMusicRecordRequest()) 
      return axios.get('http://localhost:3000/albums')
      .then((res)=> dispatch(getMusicRecordSuccess(res.data)) )
      .catch(()=> dispatch(getMusicRecordFailure()))
}

export {getMusicRecord }