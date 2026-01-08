import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const CounterApp = () => {
    let [count,setCount]=useState(0)
    let handleIncrement=()=>{
        setCount(count+1)
    }
    // useEffect(()=>{
    //     console.log("Renders on every render");
    // })
    // useEffect(()=>{
    //     console.log("Renders on initial Render");
    // },[])
     useEffect(()=>{
        console.log("Renders on specific Dependency Change");
    },[count])
  return (
    <div>
      <h1>Counter - {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default CounterApp
