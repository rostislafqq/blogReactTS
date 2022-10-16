import React, { useState } from 'react'
import { Card } from '../card'
import { InsideBody } from './insideBody'
import { useSelector} from 'react-redux'
import { RootState } from '../../../state/store'
import {ICardChosen} from '../../../interface/nterfaces'
import axios from 'axios'
import CardScelet from './cardScelet'
import { useDispatch } from 'react-redux'
import { getLaterCards, getPaginationNumber } from '../../../state/Slice/readLaterSlice'
import HomeSceleton from '../homeCardSceleton'
export const InsideCardContainer:React.FC = () => {
  const [loaded,seiIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const cardData = useSelector((state:RootState) =>  state.card.cardData)
    const readLater = useSelector((state:RootState) => state.readLater.whatchLater)
    const currentValue=useSelector((state:RootState)=>state.readLater.currentPagination)
 const [thisCard,setCard] =  React.useState<ICardChosen[]>([])
   React.useEffect(()=>{
    const getCard =async()=>{
     const getCard = await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards?avatar=${cardData.avatar}`)
      setCard(getCard.data)
      seiIsLoaded(true)
    } 
    getCard()
   },[cardData])
   
   const giveStateInfo =async ()=>{
    const res = await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards?page=${currentValue+1}&limit=3`)
    dispatch(getLaterCards (res.data))
    
   
    console.log(loaded)
    dispatch(getPaginationNumber(currentValue+1))
  }

  return (
    <div className="cardContainer">
      {thisCard.length > 0 ? thisCard.map((val)=><InsideBody key={val.avatar} body={val.data} avatar={val.avatar} name={val.name}/> ):<CardScelet />}
       
        <div className="cardContainer__sideBar">
          <h3 className='readLater'>Read later</h3>
          {loaded ? readLater.map((val)=> <Card giveStateInfo={giveStateInfo} key={val.id} avatar={val.avatar} data={val.data} id={val.id} />): [...new Array(3)].map((val,i)=>(<HomeSceleton key={i}/>))}
          
        </div>
    </div>
  )
}
