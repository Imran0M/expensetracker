import React, {useState} from 'react';
import './App.css';
import NewExpenses from './Components/NewExpenses/NewExpenses';
import Expense from './Components/Expenses/Expense';
const DummyExpense = [
  {
    id:"e1",
    title: "car Insurance",
    amount: 24.15,
    date: new Date(2021, 3, 23),
  },
  {
    id:"e2",
    title: "paper Insurance",
    amount: 60.15,
    date: new Date(2020, 4, 3),
  }
]
function App() {
  const[expenses, setExpense]=useState(DummyExpense)

  const addExpenseHandler=(expense)=>{
    setExpense((prevExpense)=>{
      return  [expense, ...prevExpense]
    });

  };
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
