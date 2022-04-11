import React, { useState } from "react";
import "./ExpenseForm.css"


const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState(0.01)
    const [enteredDate, setEnteredDate] = useState(Date.now())

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        console.log(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        console.log(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        console.log(e.target.value);
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;