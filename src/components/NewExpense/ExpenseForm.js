import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeNumberHandler = (event) => {
    setNumber(event.target.value);
  };

  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeNumberHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="new-exoense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
