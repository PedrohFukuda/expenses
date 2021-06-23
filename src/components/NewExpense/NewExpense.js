import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showContent, setShowContent] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleShowContent = () => {
    setShowContent((previousShowContent) => !previousShowContent);
  };

  const addExpenseClickHandler = (e) => {
    toggleShowContent();
  };
  if (!showContent) {
    return (
      <div className="new-expense">
        <button onClick={addExpenseClickHandler} type="toggle">
          Add new expense
        </button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onToggleShowContent={toggleShowContent}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
