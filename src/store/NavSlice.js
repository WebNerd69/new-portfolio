import { createSlice } from "@reduxjs/toolkit";
const initialState = {
     out:{
          x:-600
     },
     dis:{
          dispaly:"hidden"
     }

}

export const NavSlice = createSlice({
     name:"nav",
     initialState:initialState,
     reducers:{
          outClick: (state,actions)=>{
               state.out.x = actions.payload
          },
          unhide: (state,actions)=>{
               state.dis.dispaly = actions.payload
          }
     }
})



export const { outClick,unhide } = NavSlice.actions
export default NavSlice.reducer