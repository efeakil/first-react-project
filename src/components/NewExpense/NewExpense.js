import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpence = (props) => {
  const onSaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
    setAdding(false);
  };

  const [isAdding, setAdding] = useState(false);

  const addNewExpenseHandler = () => {
    setAdding(true);
  };

  const cancelHandler = () => {
    setAdding(false);
  }

  return (
    <div className="new-expense">
      {!isAdding && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
      {isAdding && <ExpenseForm onSaveExpense={onSaveExpenseHandler} cancel={cancelHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpence;
