import React from 'react'
import styles from "./Button.module.css"
import Proptypes from "prop-types"

const Button = ({colorScheme="white", size="md", variant}) => {
  return (
    <button className={`${styles[colorScheme]}  ${styles[size]}  ${styles[variant]} `} >Cutom Button</button>
  )
}

Button.prototype ={
  colorScheme:Proptypes.string ,
  size :Proptypes.string ,
  variant :Proptypes.string , 
}

export default Button