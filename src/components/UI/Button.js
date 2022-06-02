import React from "react";
import classes from "./Button.css";

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;
