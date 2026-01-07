import { useState } from "react";

const Content = () => {
  let [items,setItems]=useState([
    {id:1,label:"Html & Css",checked:true},
    {id:2,label:"JavaScript",checked:true},
    {id:3,label:"React JS",checked:false},
  ])
  let [input,setInput]=useState("")
  let handleInput=(e)=>{
   setInput(e.target.value);
   
  }
  return <main>
    <div>
      <input type="text" onChange={handleInput} value={input} placeholder="Add Item"/>
      <button>Add</button>
    </div>
   <ul>
    {
      items.map((item)=>{
        return(

       <li key={item.id}>
        <input type="checkBox" checked={item.checked} onChange={()=>{}}/>
        <label>{item.label}</label>
        <button>delete</button>
       </li>
        )
      })
    }
   </ul>
  </main>;
};

export default Content;
