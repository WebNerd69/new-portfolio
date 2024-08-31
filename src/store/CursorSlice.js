import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     cursor : {
          color:'bg-[#111]',
          scale:1,
          style:'default',
          z:10

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
               state.cursor.z = action.payload.z
          },

          mediaHover: (state,action)=>{
               state.cursor.color = action.payload.color,
               state.cursor.scale = action.payload.scale,
               state.cursor.style = 'media'
               state.cursor.z = action.payload.z
          },

          textHover : (state,action)=>{
               state.cursor.color = action.payload.color,
               state.cursor.scale = action.payload.scale,
               state.cursor.style = 'text'
               state.cursor.z = action.payload.z
          },

          menuHover: (state,action)=>{
               state.cursor.color = action.payload.color,
               state.cursor.scale = action.payload.scale,
               state.cursor.style = 'default'
               state.cursor.z = action.payload.z
          }
     }
})


export const {bgHover , mediaHover , textHover , menuHover} = CursorSlice.actions

export default CursorSlice.reducer