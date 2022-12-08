import React from "react";
import {getData} from "./Axios" 
import { useEffect, useState } from "react";
import { Container , SimpleGrid , Box , Button , Text} from "@chakra-ui/react";

// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

const Home = () => {
  const [dataItem , setDataItem] = useState([])
  // const [isLoading , setLoading] = useState(false)
     
  const fetchData = ()=>{
    
    getData()
    .then((res)=> setDataItem(res.data))
    .catch(()=> alert('Unable to get data'))
    .finally(() => console.log("executed"))
    
  }
  
  useEffect(()=>{
    fetchData()
  },[])
  // console.log(dataItem)
 
  // if(isLoading){
  //   console.log(isLoading)
  //   return (
  //     <h1>...Loading</h1>
  //   )
   
  // }

  return (
    <div>

         <SimpleGrid columns={{base:3 ,sm: 1, md: 2 ,lg: 3 , xl:3 }} spacing={10} mt={5}>
          {dataItem.map((el)=>(

            <Box   width="20rem" mt={4} border='1px' borderColor='gray.200' p={10} key={el.id}>
              <img src={el.image} alt={el.id} />
                 <h2>{el.title}</h2>
                 <Text>{el.price}</Text>
                 <Button >Add to Cart Button</Button>
            </Box>
          ))}
  
 
</SimpleGrid>
</div>

  );

};

export default Home;
