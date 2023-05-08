import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
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
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />

      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
