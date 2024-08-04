import React, {useState} from 'react';

import NewExpense from './Components/NewExpense/NewExpense';

import Expenses from './Components/Expenses/Expenses';


let DUMMY_EXPENSE = [
    {
        id: 'e1',
        title: 'school Fee',
        amount: 250,
        date: new Date(2024, 5, 12)
    },
    {
        id: 'e2',
        title: 'school books',
        amount: 230,
        date: new Date(2021, 2, 22)
    },
    {
        id: 'e3',
        title: 'house rent',
        amount: 700,
        date: new Date(2023, 4, 2)
    },
    {
        id: 'e4',
        title: 'food',
        amount: 540,
        date: new Date(2024, 1, 2)
    }
   ];



const App = () => {

   const[expenses, setExpenses] = useState(DUMMY_EXPENSE);

   const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses]
    setExpenses(updatedExpense)
   };

    return(
        <div>
           <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
       
        </div>
    );
}

export default App;