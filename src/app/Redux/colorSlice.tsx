import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface colorState {
 
  value:number,
 
  dumpArray:Array<any>
}

const initialState :colorState= {
  
  value:1,
  
  dumpArray:[],
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    
    increment:(state,action:PayloadAction<number>)=>{
        state.value=action.payload
    },
    
  getDumpArray:(state,action:PayloadAction<any>)=>{
    state.dumpArray.push(action.payload)
},
  
  
    
   
   
   
  
  },
})

// Action creators are generated for each case reducer function
export const {  increment,getDumpArray} = colorSlice.actions

export default colorSlice.reducer