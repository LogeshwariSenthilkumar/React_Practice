import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineSaveAlt } from "react-icons/md";

const Content = () => {
  let [items,setItems]=useState([
    {id:1,label:"Html & Css",checked:true},
    {id:2,label:"JavaScript",checked:true},
    {id:3,label:"React JS",checked:false},
  ])
  let [newItem,setNewItem]=useState("")
  let handleInput=(e)=>{
   setNewItem(e.target.value);
   
  }
  let [isEditing,setIsEditing]=useState(false)
  let [currentId,setCurrentId]=useState(null)
  let handlecheckbox=(id)=>{
   let newItems=items.map((item)=>{
    return(

      item.id===id? {...item,checked:!item.checked} :item
    )
   })
   setItems(newItems)
  }
  let handleUpdate=(id)=>{
    setCurrentId(id)
    setIsEditing(true)
    let newLists=items.find((item)=>{
      return (
        item.id===id
      )
    })
    setNewItem(newLists.label)
  }
  let handleDelete=(id)=>{
    let newListItems=items.filter((item)=>{
      return item.id!==id
    }).map((item,index)=>{
      return(
        {...item,id:index+1}
      )
    })
    setItems(newListItems)
  }
  let handleAddorSave=()=>{
    if(isEditing){
     let newOnes=items.map((item)=>{
       return(
        item.id===currentId? {...item,label:newItem}:item
       )
     })
     setItems(newOnes)
     setNewItem("")
     setCurrentId(null)
     setIsEditing(false)
    }
    else{

      setItems([...items,{id:items.length+1,label:newItem,checked:false}])
      setNewItem("")
    }
  }
  return <main>
    <div>
      <input type="text" onChange={handleInput} value={newItem} placeholder="Add Item"/>
      <button onClick={handleAddorSave}>{isEditing?<MdOutlineSaveAlt/>:<IoIosAddCircle/>}</button>
    </div>
   <ul>
    {
      items.map((item)=>{
        return(

       <li key={item.id}>
        <input type="checkBox" checked={item.checked} onChange={()=>{handlecheckbox(item.id)}}/>
        <label>{item.label}</label>
        <FaEdit role="button" tabIndex={0} id="edit" onClick={()=>{handleUpdate(item.id)}}/>
        <FaTrashCan role="button" tabIndex={0} id="delete" onClick={()=>{handleDelete(item.id)}}/>
       </li>
        )
      })
    }
   </ul>
  </main>;
};

export default Content;
