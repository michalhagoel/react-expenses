import './ExpenseForm.css'

import React, {useState} from 'react'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title,
            amount,
            date: new Date(date),
        };

        if (props.addNewExpense) {
            props.addNewExpense(expenseData);
        }

        setAmount('');
        setDate('');
        setTitle('');
    }

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div>
                    <label>Title</label>
                    <input
                        type='text'
                        value={title} 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        step='2024-06-01'
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>


            <button type='submit'>Add Expense</button>
        </form>
    );
}

export default ExpenseForm;