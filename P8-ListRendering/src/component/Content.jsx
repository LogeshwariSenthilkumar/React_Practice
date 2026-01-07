import { useState } from "react";

const Content = () => {
  let [items,setItems]=useState([
    {id:1,label:"Html & Css",checked:true},
    {id:2,label:"JavaScript",checked:true},
    {id:3,label:"React JS",checked:false},
  ])
  return <main>
    <div>
      <input type="text"/>
      <button>Add</button>
    </div>
   <ul>
    {
      items.map((item)=>{
        return(

       <li key={item.id}>
        <input type="checkBox" checked={item.checked}/>
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
