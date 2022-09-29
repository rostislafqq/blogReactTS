import  card from './Slice/insideCardSlice';
import  header from './Slice/headerSlice';
import readLater from './Slice/readLaterSlice'
import { configureStore } from '@reduxjs/toolkit'
 

export const store = configureStore({
  reducer: {
    header,
    card,
    readLater
  },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch