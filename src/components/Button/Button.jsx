import React from "react";
import css from "./Button.module.css";

function Button({ onClick, children, type }) {
  return (
    <button onClick={onClick} className={css.button} type={type}>
      {children}
    </button>
  );
}

export default Button;
