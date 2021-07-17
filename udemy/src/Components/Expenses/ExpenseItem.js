import React,{useState} from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
export default function ExpenseItem(props) {
    const [title,setTitle]= useState(props.title);
    const clickHandler =()=>{
        setTitle("Upadted!!");
        console.log("updted")
    }
    return (
    <Card className='expense-item'>
     <ExpenseDate date={props.date}/>           
    <div className='expense-item__description'><h2>{title}</h2></div>
    <div className='expense-item__price'>${props.amount}</div> 
    <button onClick={clickHandler}>click me</button>
    </Card>
    )
}
