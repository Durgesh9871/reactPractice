import React from "react";
import "./Input.css";
import PropTypes from "prop-types"

const Input = ({type="text" , size="md", variant, value , onChange}) => {
  // console.log("type" , value)
  // console.log("variant" , variant)

  return <input data-testid="inputTag" type={type}  value={value} onChange={onChange}  className={`${size} ${variant}   `}/>;
};

Input.propTypes = {
  type : PropTypes.string ,  
  size: PropTypes.string , 
  variant: PropTypes.string.isRequired , 
  value: PropTypes.string , 
  

  
}



export default Input;
