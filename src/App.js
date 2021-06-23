import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { id: "e1", title: "car insurance", amount: 10, date: new Date() },
  { id: "e2", title: "Food", amount: 10, date: new Date() },
  { id: "e3", title: "Bills", amount: 10, date: new Date() },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
