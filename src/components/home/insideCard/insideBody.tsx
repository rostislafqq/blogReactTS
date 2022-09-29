import React from 'react'

interface InsideBodyProps  {
  name:string,
    body:string 
    avatar:string 
}

export const InsideBody:React.FC<InsideBodyProps>= ({body,avatar,name}) => {
  return (
    <div className="cardContainer__card">
     
    <img src={avatar} className="cardContainer__imgCard"/>
    <h3>Username:{name}</h3>
     
    <p className="cardContainer__text">
       {body}
    </p>
</div>
  )
}
