import React,{useState}from 'react'
import './ExpensesForm.css'
export default function ExpenseForm() {
    const [enteredTitle, setEnteredTitle]= useState('');
    const [enteredAmount, setEnteredAmount]= useState('');
    const [enteredDate, setEnteredDate]= useState('');
    /*other way is-
    const[userinput,setUserInput]=useState({
        enteredTitle:'',
        EnteredDate:'',
        EnteredAmount:'',
    })*/
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)
       /*other way
        setUserInput({
            ...userinput,
            enteredTitle:event.target.value,
        })*/
        /* setUserInput(prevstate)=>{
            return(...prevstate,enteredTitle:event.target.value)  //use this aproach when there is the need of prev state(not the above app.
            this is will the updated prev state)
        }*/
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
        /*other way
        setUserInput({
            ...userinput,
            EnteredAmount:event.target.value,
        })*/
    }
    const dateChangeHandler =(event)=>{
        setEnteredDate(event.target.value)
        //other way
        //setUserInput({
            //...userinput,
            //enteredDate:event.target.value,
        //})
    }
    return (
        <div>
         <form>
             <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number'min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2021-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div  className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>   
        </div>
    )
}
