import React from 'react'
import PropTypes from "prop-types" 

const Image = ({src , alt , width , height }) => {

  return (
  
    <img src={src} alt={alt} width={width} height={height} /> 
    
    
  )

}

Image.propTypes ={
  src:PropTypes.string.isRequired ,
  alt:PropTypes.string.isRequired ,
  width:PropTypes.number ,
  height :PropTypes.number ,
 
}


export default Image