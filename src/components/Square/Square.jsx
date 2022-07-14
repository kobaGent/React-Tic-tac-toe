import React from "react";
import cl from "./Square.module.css";

const Square = ({ value, handleClick, index }) => {
  return (
    <button className={cl.square} onClick={() => handleClick(index)}>
      {value}
    </button>
  );
};

export default Square;
