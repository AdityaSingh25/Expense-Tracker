import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  // here we can go for only one state instead of three states
  // and we can use object as initial state
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    //setUserInput(event.target.value);
    setUserInput({
      enteredTitle: event.target.value,
      ...userInput,
    });
  };

  const amountChangeHandler = (event) => {
    //setUserInput(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    //when ever ever we are updating state based on previous state we should use this approach
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredTitle:event.target.value}
    //   //so you should use this approach when ever you are updating state based on previous state
    // });
  };

  const dateChangeHandler = (event) => {
    //setUserInput(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate : event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
