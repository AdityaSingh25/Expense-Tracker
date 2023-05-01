import "./ExpenseItem.css";
import React , {useState} from "react";// use state is a function provided by the react library
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //let title = props.title;
  const [title , setTitle] = useState(props.title);
  console.log('ExpenseItem executed by react');
  //destructuring because it will(useState()) return an array ... 1st value will be the variable and second value will be the function which will be responsible to change that variable
  const clickHandler = () => {
    setTitle('Updated!!');// calling this function does not just assign a new value to some variable, its managed by react somewhere in memory and when we call this state updating function this special variable will not just receive a new value but the component function in which you called yhis state updating function (setTitle) will be executed again    
    //console.log("Hello");
    //by calling this function  you are telling react that you want to assign a new value to this state and that then also tell react that the component in which this state was registered  with use state should be re-evaluated
    // and when this happens it will draw any changes which its detects compared to the last time it evaluated onto the screen 

    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
