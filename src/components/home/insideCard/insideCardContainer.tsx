import React from 'react'
import { Card } from '../card'
import { InsideBody } from './insideBody'
import { useSelector} from 'react-redux'
import { RootState } from '../../../state/store'
import {ICardChosen} from '../../../interface/nterfaces'
import axios from 'axios'
import CardScelet from './cardScelet'
import { useDispatch } from 'react-redux'
import { getLaterCards, getPaginationNumber } from '../../../state/Slice/readLaterSlice'
export const InsideCardContainer:React.FC = () => {
    const dispatch = useDispatch()
    const cardData = useSelector((state:RootState) =>  state.card.cardData)
    const readLater = useSelector((state:RootState) => state.readLater.whatchLater)
    const currentValue=useSelector((state:RootState)=>state.readLater.currentPagination)
 const [thisCard,setCard] =  React.useState<ICardChosen[]>([])
   React.useEffect(()=>{
    const getCard =async()=>{
     const getCard = await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards?avatar=${cardData.avatar}`)
      setCard(getCard.data)
    
    } 
    getCard()
   },[cardData])
   
   const giveStateInfo =async ()=>{
    const res = await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards?page=${currentValue+1}&limit=3`)
    dispatch(getLaterCards (res.data))
    dispatch(getPaginationNumber(currentValue+1))
  }

  return (
    <div className="cardContainer">
      {thisCard.length > 0 ? thisCard.map((val)=><InsideBody key={val.avatar} body={val.data} avatar={val.avatar} name={val.name}/> ):<CardScelet />}
       
        <div className="cardContainer__sideBar">
          <h3 className='readLater'>Читать далее</h3>
          {readLater.map((val)=> <Card giveStateInfo={giveStateInfo} key={val.id} avatar={val.avatar} data={val.data} id={val.id}/>)}
          
        </div>
    </div>
  )
}
