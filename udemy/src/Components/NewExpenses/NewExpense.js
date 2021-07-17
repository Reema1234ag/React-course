import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
export default function NewExpense(props) {
    const saveExpenseDataHandler=(enteredExpensesData)=>{
        const expensesData={
       ...enteredExpensesData,
       id:Math.random().toString()
        };
        props.onAddExpense(expensesData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            
        </div>
    )
}
