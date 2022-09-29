import React from 'react'

interface popUpProps {
    isVisable:boolean
}

export const PopUp:React.FC<popUpProps> = ({isVisable }) => {

  return (
<>
    <div onClick={(e) =>{
        e.stopPropagation()
    }} className={isVisable ? 'header__PopUp-active' : 'header__PopUp'}>
    <div className="header__profileImg"></div>
    <p className="header__userName">Name</p>
    <button className="header__exit">exit</button>
</div>
</>
  )
}
