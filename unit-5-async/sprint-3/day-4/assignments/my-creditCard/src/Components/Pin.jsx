import React from 'react'
import { useState , useRef} from 'react'
import PropTypes from 'prop-types' ;

const Pin = ({length , maxLength , size}) => {
    const [inputBoxLength] = useState(new Array(size).fill(""))
     for(var i=0 ; i<size ; i++){
      inputBoxLength.push((new Array(length).fill("")))
     }
    (new Array(length).fill(""))
    const inputRef = useRef([])

    const onChangeHandler = (e, index) =>{
        if(index < length-1){
            inputRef.current[index+1].focus()
        }
        
    }


  return (
    <div>
      {inputBoxLength.map((_,index) => {
        return <input 
           ref = {(inputElem)=>{
            return (inputRef.current[index] = inputElem) 
        }} key ={index} maxLength={maxLength} 
        onChange = {(e) => onChangeHandler(e,index)}
        />
      })}
    </div>
  )
}

export default Pin

Pin.prototype ={
    length : PropTypes.number.isRequired , 
    maxLength:PropTypes.number.isRequired ,
} 