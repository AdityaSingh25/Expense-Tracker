import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // here we can go for only one state instead of three states
  // and we can use object as initial state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   enteredTitle: event.target.value,
    //   ...userInput,
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
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
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate : event.target.value,
    // });
  };
  //event.target.value will get you the value entered in input box
  const submitHandler = (event) => {
    event.preventDefault(); //by this page will not reload so the req to the server is not send
    //now we will combine the collected data into an object
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    //now we want that after clicking on the submit button we will clear the form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // Two-way binding is very useful
    // when you're working with forms
    // because it allows you to gather user input,
    // but then also change it.
    // For example, upon form of mission.
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
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
