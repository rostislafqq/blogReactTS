import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InsideCardState {
 cardData:{ id:number
    body:string
    avatar:string}
   
}

const initialState: InsideCardState = {
    cardData:{ 
        id: 0,
        body : '',
        avatar:''}
   
}

export const InsideCardliceSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
 
   
    getCardState:(state,action)=>{
        state.cardData =action.payload
       
       console.log(state.cardData.id)
    }
  },
})


export const { getCardState } = InsideCardliceSlice.actions

export default InsideCardliceSlice.reducer