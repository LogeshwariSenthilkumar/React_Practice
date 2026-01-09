import {createSlice} from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem(state,action){
           state.push(action.payload)
        }
        ,
        removeItem(state,action){
            let itemId=action.payload;
          let newproducts=state.filter((product)=>product.id!==itemId)
          return newproducts
        }
    }
})
export default cartSlice.reducer
export let {addItem,removeItem}=cartSlice.actions