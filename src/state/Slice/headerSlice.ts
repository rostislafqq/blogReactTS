import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HeaderState {
    isVisable: boolean
}

const initialState: HeaderState = {
    isVisable: false,
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
 
    setIsVisable: (state, action: PayloadAction<boolean>) => {
      state.isVisable = action.payload
    },
  },
})


export const { setIsVisable } = headerSlice.actions

export default headerSlice.reducer