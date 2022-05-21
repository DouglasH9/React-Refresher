import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {

    const [addNew, setAddNew] = useState(false);

    const handleAddNew = () => {
        setAddNew(!addNew);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            {addNew ? 
                <ExpenseForm handleAddNew={handleAddNew} onSaveExpenseData={saveExpenseDataHandler} /> :
                <button onClick={handleAddNew}>Add new expense</button>
            }
        </div>
    );
}

export default NewExpense;