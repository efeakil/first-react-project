import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpence = (props) => {
    const onSaveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.addExpense(expenseData);
    }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onSaveExpenseHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpence;
