import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     cursor : {
          color:'bg-black',
          scale:1,
          style:'default'

     }
}

export const CursorSlice = createSlice({
     name:"cursor",
     initialState:initialState,
     reducers:{
          bgHover: (state,action)=>{
               state.cursor.color = action.payload.color,
               state.cursor.scale = action.payload.scale,
               state.cursor.style = 'default'
          },

          mediaHover: (state,action)=>{
               state.cursor.color = action.payload.color,
               state.cursor.scale = action.payload.scale,
               state.cursor.style = 'media'
          
          },

          textHover : (state,action)=>{
               state.cursor.color = action.payload.color,
               state.cursor.scale = action.payload.scale,
               state.cursor.style = 'text'
          
          }
     }
})


export const {bgHover , mediaHover , textHover} = CursorSlice.actions

export default CursorSlice.reducer