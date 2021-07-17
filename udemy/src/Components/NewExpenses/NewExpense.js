import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
export default function NewExpense() {
    const saveExpenseDataHandler=(enteredExpensesData)=>{
        const expensesData={
       ...enteredExpensesData,
       id:Math.random().toString()
        };
        console.log(expensesData)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            
        </div>
    )
}
