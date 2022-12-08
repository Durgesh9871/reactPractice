import {FilterPage } from "../Components/FilterPage" ;
import {BooksPage } from "../Components/BooksPage" ; 
import styled from "styled-components"

 

const  CommonPage = () => {
  return (
  
   
 <Wrapper>



  {/*  filter is started from here  */}
  <FilterWrapper>
    <FilterPage />
    </FilterWrapper>


  {/* books data is strated from  here  */}
  <BookWrapper>
    <BooksPage/>
  </BookWrapper>


   </Wrapper>

  
  )
}

const Wrapper = styled.div`
border :2px solid red  ; 
display:flex ; 



`
const BookWrapper = styled.div`
// border :2px solid black  ; 
width : 70% ; 
height :auto ;  



`

const  FilterWrapper = styled.div`
// border :2px solid  yellow  ; 
width : 30% ; 
height :auto ; 


`



export {CommonPage}