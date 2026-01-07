import React from 'react'
import { useState } from 'react'
import styled from "styled-components"

let Button=styled.button`
background-color:blue;
color:white;
width:150px;
height:50px;`

const Content = () => {
  let textstyle={
    backgroundColor:"red",
    color:"white"
  }
  let [count,setCount]=useState(0);
  let handleIncrement=()=>{
      setCount(count+1);
      
  }
  let handleDecrement=()=>{
      setCount(count-1);
      
  }
  let [sample,setSample]=useState("success");
  switch(sample){
    case "loading": return <Loading/>
    case "success":return <Success/>
    case "error": return <Error/>
    default: return sample
  }
  // let message=""
  // if(count>=10){
  //   message="you got 10% discount"
  // }
  // else{
  //   message="click 10 to get discount"
  // }
  return (
    <main>
      <h1 style={textstyle}>Counter-{count}</h1>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
      {/* {
        count>=10 && <p>You got 10% discount.</p>
      } */}
      {/* {
        count>=10? <p>you got 
        10% discount</p>:<p>click 10 to get discount</p>
      } */}
      {/* {
        message
      } */}

    </main>
  )
}

export default Content

function Loading(){
  return(
    <h1>Loading...</h1>
  )
}
function Success(){
  return(
    <h1>Success...</h1>
  )
}
function Error(){
  return(
    <h1>Error...</h1>
  )
}