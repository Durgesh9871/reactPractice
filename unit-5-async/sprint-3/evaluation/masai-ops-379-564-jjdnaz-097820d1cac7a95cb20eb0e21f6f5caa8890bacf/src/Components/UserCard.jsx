import React from "react";
import "./UserCard.css";
import PropTypes from "prop-types"

const UserCard = ({imageURL, avatarShape="round", name, description="Testing Description", backgroundColor="red" , title}) => {
  return (
    <div data-testid="usercard" className={`usercard ${backgroundColor} ${description} `}>
     <img src={imageURL} alt={name}  className={`${avatarShape}`} />
      <h1  >{title}</h1>
      <h2  >{name}</h2>
      <h2  >{description}</h2>
    </div>
  );
};


UserCard.propTypes = {
  imageURL : PropTypes.string ,  
  avatarShape: PropTypes.string , 
  name: PropTypes.string.isRequired , 
  description: PropTypes.string , 
  backgroundColor: PropTypes.string , 
  title: PropTypes.string , 
}


export default UserCard;
