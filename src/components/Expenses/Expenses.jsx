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
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
            </Card>
        </div>
    )
}

export default Expenses;