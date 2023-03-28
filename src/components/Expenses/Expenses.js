import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const dropdownHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onDropdownSelect={dropdownHandler}
        ></ExpensesFilter>
        <ExpensesList list={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
