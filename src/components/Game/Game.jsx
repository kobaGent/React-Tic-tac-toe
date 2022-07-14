import React from "react";
import Board from "../Board/Board";
import cl from "./Game.module.css";

const Game = () => {
  return (
    <div className={cl.wrapper}>
      <Board />
    </div>
  );
};

export default Game;
