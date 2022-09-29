import React from 'react';
import HeaderContainer from './components/header/headerContainer';
import HomeContainer from './components/home/homeContainer';
import {  useDispatch ,useSelector} from 'react-redux'
import { setIsVisable } from './state/Slice/headerSlice';
import { Route, Routes } from 'react-router-dom';
  
import { InsideCardContainer } from './components/home/insideCard/insideCardContainer';
const App:React.FC=() => {
  const dispatch = useDispatch();
  
  return (
    <div className="wrapper" onClick={()=>{
      dispatch(setIsVisable(false))
    }}>
     <HeaderContainer />  
     <Routes >
      <Route path='*' element={<HomeContainer />} />
      <Route path='/card' element ={<InsideCardContainer />} />
     </Routes>
</div>
    
  );
}

export default App;
