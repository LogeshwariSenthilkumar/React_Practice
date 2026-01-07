import React from 'react'
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
  return (
    <main>
      <p style={textstyle}>Main Content</p>
      <Button>Click Me!</Button>
      <NewButton>duplicate</NewButton>
    </main>
  )
}

export default Content
