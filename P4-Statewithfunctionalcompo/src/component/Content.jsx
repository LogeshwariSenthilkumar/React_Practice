import React from 'react'
import { useState } from 'react'
import styled from "styled-components"

let Button=styled.button`
background-color:blue;
color:white;
width:150px;
height:50px;`
let NewButton=styled(Button)`
background-color:red;`
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
  
  return (
    <main>
      <h1 style={textstyle}>Counter-{count}</h1>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </main>
  )
}

export default Content
