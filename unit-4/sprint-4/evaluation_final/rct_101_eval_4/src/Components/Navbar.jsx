import React from "react";
import {Flex, Heading , Box ,Button ,Spacer ,ButtonGroup} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";


// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  const {accepted} = useContext(AuthContext)
  return(
    <Flex minWidth='max-content' alignItems='center' gap='2'>
    <Box p='2'>
      <Heading size='md'>{accepted?"Token" :""}</Heading>
    </Box>
    <Spacer />
    <ButtonGroup gap='2'>
    <Link to="/Home">  <Button colorScheme='teal'>HOME</Button> </Link>
    <Link to="/">  <Button colorScheme='teal'>Login</Button> </Link>
    <Link to="/Cart">  <Button colorScheme='teal'>CART</Button>  </Link>
    </ButtonGroup>

    
  </Flex>
  )
};

export default Navbar;
