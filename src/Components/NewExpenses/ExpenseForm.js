import React, {useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
  const[enteredTitle, setEnteredTitle]=useState('')
  const[enteredAmount, setEnteredAmount]=useState('')
  const[enteredDate, setEnteredDate]=useState('')

const titleHandler=(event)=>{
setEnteredTitle(event.target.value)
}
const amountHandler=(event)=>{
  setEnteredAmount(event.target.value)
}
const dateHandler=(event)=>{
setEnteredDate(event.target.value)
}
const submitHandler=(event)=>{
event.preventDefault()

const expense={
  title: enteredTitle,
  amount: enteredAmount,
  date: new Date(enteredDate)
}
props.onSaveExpense(expense)
setEnteredTitle('')
setEnteredAmount('')
setEnteredDate('')
}

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="name" value={enteredTitle}
          onChange={titleHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button  type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm