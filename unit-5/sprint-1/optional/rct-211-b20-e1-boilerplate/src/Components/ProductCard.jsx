import React from "react";

// get the product item details through the props
const ProductCard = ({price , brand , title , image}) => {
  return <div data-testid="productcard">
        <img src={image} alt={brand} />
        <p>{brand}</p>
        <p>{price}</p>
        <h1>{title}</h1>
  </div>;
};

export default ProductCard;
