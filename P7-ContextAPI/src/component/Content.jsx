import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Shop from "./Shop";
import { createContext } from "react";
export let userContext=createContext();
const Content = () => {
  let [user,setUser]=useState({
    uName:"Logu",
    age:22,
    gmail:"abc@gmail.com"
  })
  return <main>
    <userContext.Provider value={{user}}>
    <Shop/>
    </userContext.Provider>
  </main>;
};

export default Content;
