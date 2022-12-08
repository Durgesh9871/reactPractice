import React from 'react'
import { useState , useRef} from 'react'
import PropTypes from 'prop-types' ;

const Pin = ({length , maxLength}) => {
    const [inputBoxLength] = useState(new Array(length).fill(""))
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