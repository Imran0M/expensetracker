import React from 'react'
import Card from '../Cards/Card'
import ExpenseItem from './ExpenseItem'

function Expense(props) {
    return (
        <div>
            <Card className="expenses">
{props.items.map((expense)=><ExpenseItem  title={expense.title} amount={expense.amount} date={expense.date}/>)}
            
            </Card>
        </div>
    )
}

export default Expense