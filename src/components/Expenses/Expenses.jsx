import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpenseItem.css";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState("2019")

    const filterChangeHandler = (year) => {
        setFilterYear(year);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter  
                    filterYear={filterYear} 
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;