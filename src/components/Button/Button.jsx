import React from "react";
import css from "./Button.module.css";

function Button({ onClick, children, style, className }) {
  return (
    <button onClick={onClick} className={css.button}>
      {children}
    </button>
  );
}

export default Button;
