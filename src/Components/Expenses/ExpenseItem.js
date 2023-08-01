import React, {useState} from 'react'
import './ExpenseItem.css'
import Card from '../Cards/Card'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
  const titles = props.title
  const [title, setTitle]=useState(titles)
  const changeHandler=()=>{
  setTitle(title)
  console.log("clicked !!!!")
}
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{titles}</h2></div>
        <div className="expense-item__price">${props.amount}</div>
        <div onClick={changeHandler}> </div>
    </Card>
   
  )
}

export default ExpenseItem