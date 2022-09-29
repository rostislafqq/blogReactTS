import React from 'react'
import logo from '../../assets/logo.png'
import  Burger  from './burger'
import { PopUp } from './popUp'
import { useSelector} from 'react-redux'
import { RootState} from '../../state/store'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setIsVisable } from '../../state/Slice/headerSlice'

const HeaderContainer:React.FC = ()=> {
  const dispatch=useDispatch()
  const isVisable = useSelector((state:RootState)=>state.header.isVisable)
  
  const setVisable:() => void =()=>{
    dispatch(setIsVisable(true))
  }
    
  return (
   <header >
    <Link to='/'>
    <img className="header__logo" src={logo} alt=""/>
    </Link>
   
       <Burger isVisable={isVisable} setIsVisable={setVisable}/>
       <PopUp isVisable={isVisable}/>
   </header>
  )
}

export default HeaderContainer
