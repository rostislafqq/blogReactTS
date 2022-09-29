import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


export interface ReadLaterState {
  
    whatchLater:[{ id:number
        data:string
        avatar:string
    }]
    currentPagination:number
    
}

const initialState: ReadLaterState = {
    
    whatchLater:[{ 
        id: 0,
        data : '',
        avatar:''
    }],
    currentPagination:0
    
}

export const readLaterSlice = createSlice({
  name: 'readLater',
  initialState,
  reducers: {
 
    getLaterCards: (state, action) => {
      for(let i = 0 ; i < action.payload.length;i++){
        action.payload[i].data=action.payload[i].data = action.payload[i].data.slice(0,150);
      }
     state.whatchLater=action.payload
    },
    getPaginationNumber:(state,action)=>{
      state.currentPagination=action.payload
    }
   
  },
})


export const { getLaterCards ,getPaginationNumber} = readLaterSlice.actions

export default readLaterSlice.reducer