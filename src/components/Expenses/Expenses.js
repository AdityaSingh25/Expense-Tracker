import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpensesChart"


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  //state really is seperated on a per component instance basis
  //we call expenseItem 4 times therefore four instaces of state will be created

  // ExpenseItem here is being used four times, right? And Expenses.js we
  // have four ExpenseItems. Now, every item receives its own separate State
  // which is detached from the other States. We have one ExpenseItem
  // definition here, but then this function is basically called four times
  // when we create four ExpenseItems. And every time it's called, a new
  // separate State is created of course in the same way but managed
  // independently by React. So if we change the title in the first ExpenseItem
  // the other ones are not affected because they have their own State. That's
  // really important. It's on a per component instance basis. So we have
  // separate States, even if we create a component more than once. And that's
  // of course crucial because it would be a rather undesired behavior if we
  // change something in one item and all the other items are updated as well.
  // So that's a good thing to have. Now, in addition, whenever State changes
  // because we click a button in this case it's only this component function
  // and only that specific instance where this component is being used where
  // React will re-evaluate it.
  console.log();
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
      {/* {filteredExpenses.length === 0 ?<p style={{color:"white"}}>No Expense Found</p> : filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
      {/* using this & trick here,where the part after & is rendered if the part before & returns true. */}
      {/* {filteredExpenses.length === 0 && (
        <p style={{ color: "white" }}>No expense found</p>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.key}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

    </Card>
  );
}

export default Expenses;


// one more approach for this is above the return 
//we can write
// let expensesContent = <p> No expenses found </p>
//if (filteredExpenses.length > 0){
      // expensesContent = filteredExpenses.map((expense)=>{
      //   <ExpenseItem
      //       key={expense.key}
      //       title={expense.title}
      //       amount={expense.amount}
      //       date={expense.date}
      //     />
      // });
//}

// and now inside return we can simply call {expensesContent}

//this looks much cleaner