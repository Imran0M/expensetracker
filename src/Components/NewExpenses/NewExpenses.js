import React from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'
function NewExpenses(props) {
    const saveExpenseData=(enteredExpense)=>{
        const expense={
            ...enteredExpense,
            id: Math.random().toString()
        }
        console.log(expense)
        props.onAddExpense(expense)
    }
  return (
    <div className="new-expense">
<ExpenseForm  onSaveExpense={saveExpenseData}/>
    </div>
  )
}

export default NewExpenses