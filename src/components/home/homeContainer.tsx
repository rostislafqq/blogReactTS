import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { useDispatch } from 'react-redux'
import { ICards } from '../../interface/nterfaces'
import {  getLaterCards } from '../../state/Slice/readLaterSlice'
import { Card } from './card'
import HomeSceleton from './homeCardSceleton'
import { Pagination } from './pagination'
import { getPaginationNumber } from '../../state/Slice/readLaterSlice'
 const HomeContainer:React.FC = () => {
  const dispatch = useDispatch()
    const [cards,setCards] = useState<ICards[]>([])
    const [cardsTotal,setCardsTotal] = useState<ICards[]>([])
  //отрисовка карточек + счет длины
    useEffect(()=>{
        const getCard =async() =>{
            const res = await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards?`)
            setCardsTotal(res.data)
           
        }
        getCard()
        
    },[])
  if(cards.length>0){
    for(let i = 0 ; i < cards.length;i++){
      cards[i].data = cards[i].data.slice(0,150);
    }
  }


   //pagination
  
    const [currentValue,setCarrentValue] = useState(1)
    const countOnPage = 3 ;
    const countCards = cardsTotal.length;
    const paginationLenght = Math.ceil(countCards/countOnPage);
    useEffect(()=>{
        const getCard =async() =>{
            const res = await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards?page=${currentValue}&limit=3`)
            setCards(res.data)
          
        }
        getCard()
        
    },[currentValue])
    //отправляем все карточки и выбранную страницу в редакс
    const giveStateInfo =async()=>{
      const res = await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards?page=${currentValue+1}&limit=3`)
      dispatch(getLaterCards(res.data))
      dispatch(getPaginationNumber(currentValue))
    }
    
    
  return (
    <>
    
    <div className="home">
      {(cards.length > 0 ? cards.map((val)=>(<Card giveStateInfo={giveStateInfo} key={val.avatar} id={val.id} avatar={val.avatar} data={val.data}/>)) : [...new Array(3)].map((val,i)=>(<HomeSceleton key={i}/>)))}
    </div>
   
     <Pagination  paginationLenght={paginationLenght} currentValue={currentValue} setCarrentValue={setCarrentValue} /> 
    </>
  )
}

export default HomeContainer
