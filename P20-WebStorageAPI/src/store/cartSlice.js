import {createSlice} from "@reduxjs/toolkit"
let dataFromWeb=JSON.parse(localStorage.getItem("cart"))
const cartSlice=createSlice({
    name:"cart",
    initialState:dataFromWeb,
    reducers:{
        addItem(state,action){
           state.push(action.payload)
           localStorage.setItem("cart",JSON.stringify([...state]))
        }
        ,
        removeItem(state,action){
            let itemId=action.payload;
          let newproducts=state.filter((product)=>product.id!==itemId)
          localStorage.setItem("cart",JSON.stringify([...newproducts]))
          return newproducts
        }
    }
})
export default cartSlice.reducer
export let {addItem,removeItem}=cartSlice.actions