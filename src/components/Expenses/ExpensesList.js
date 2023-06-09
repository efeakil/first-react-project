import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.list.length === 0) {
    return <h2 className="expense-list__fallback">Found no expense.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.list.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
