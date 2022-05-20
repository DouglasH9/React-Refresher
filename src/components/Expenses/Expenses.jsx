import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
import "./Expenses.css";


const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState("2019")

    const filterChangeHandler = (year) => {
        setFilterYear(year);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter filterYear={filterYear} onChangeFilter={filterChangeHandler}/>
                {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
            </Card>
        </div>
    )
}

export default Expenses;