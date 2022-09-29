import React from 'react'


interface BurgerProps {
    isVisable:boolean,
    setIsVisable:() => void
}

const Burger:React.FC<BurgerProps> = ({isVisable,setIsVisable}) => {
    
  return (
   <>
    <div onClick={(e)=>{
        setIsVisable()
        e.stopPropagation()
        
    }} className={isVisable?'header__burger-close' :'header__burger'}>
            <div className="header__burgerItem"></div>
            <div className="header__burgerItem"></div>
            <div className="header__burgerItem"></div>
        </div>
        </>
  )
}

export default React.memo(Burger)