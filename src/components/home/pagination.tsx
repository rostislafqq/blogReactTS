import React from 'react'

interface paginationI{
    paginationLenght:number
    currentValue:number 
    setCarrentValue:React.Dispatch<React.SetStateAction<number>>
}

export const Pagination:React.FC<paginationI> = ({paginationLenght , currentValue , setCarrentValue}) => {
    const numberPaginations:number[] = [];
    for (let i=1 ; i <=paginationLenght ; i++){
        numberPaginations.push(i)
}
 
    
  return (
    <div className="pagination">
        <ul>
            {numberPaginations.map((val)=>(<li key={val} onClick={()=>{
                setCarrentValue(val)
             
            }} className={currentValue===val ? 'pagination__Item-active': ''}>{val}</li>))}  
        </ul>
    </div>
  )
}