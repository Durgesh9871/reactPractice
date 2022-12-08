import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { useState , useEffect } from 'react'

const SearchBar = ({suggestions , queryHandler}) => {
    const [inputText , setInputText ] = useState('')
  
    const handleInputTextChange = (e)=>{
      setInputText(e.target.value) ;   
    }

  useEffect(()=>{
    queryHandler(inputText)  
  }, [inputText , queryHandler])

  
  return (
    <div>
        <Wrapper>
      <SearchBarWrapper>
        <Input value={inputText} onChange={handleInputTextChange}/>
      </SearchBarWrapper>
      <SuggestionBox>
        {suggestions.map((item ,index)=> {
            return (
                <div key ={index}>{item}</div>
            )
        })}
      </SuggestionBox>
      </Wrapper>
    </div>
  )
}

const SuggestionBox = styled.div`
border:1px solid black ; 
display :flex ;
flex-direction:column ;
max-height :200px ; 

margin :auto ; 
overflow :auto ; 

& * {
    border : 1px solid purple 
    flex:1 
    text-align :left :
    padding :10px ;
    padding-left :30px 
}
`;

const SearchBarWrapper = styled.div`
border:1px solid red ;
display :flex ; 
padding :5px 10px ;
align-items: center ; 
`;

const Input = styled.input`
border: 1px solid blue; 
outline :none ;
font-size :20px ;
flex :1 ; 
`;
const Wrapper = styled.div`
max-width:400px ;
margin :auto ;

`;



export default SearchBar
