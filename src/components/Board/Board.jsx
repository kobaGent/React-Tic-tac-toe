import React, { useEffect, useState } from "react";
import Square from "../Square/Square";
import cl from "./Board.module.css";

const Board = () => {
  // Отрисовка всех кнопок
  const [board, setBoard] = useState(Array(9).fill(""));
  // Кто из игроков ходит
  const [turn, setTurn] = useState("X");

  const [winner, setWinner] = useState("");

  useEffect(() => {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winningPositionsIndex = 0;
    let newWinner = "";

    while (winningPositionsIndex < winningPositions.length && !newWinner) {
      const boardPositionToCheck = winningPositions[winningPositionsIndex];
      const boardValuesToCheck = boardPositionToCheck.map(
        (index) => board[index]
      );
      const checkingValue = boardValuesToCheck[0];
      const isFinished = boardValuesToCheck.every(
        (value) => value === checkingValue && checkingValue
      );
      newWinner = isFinished ? checkingValue : null;
      winningPositionsIndex++;
    }
    if (newWinner) {
      setWinner(newWinner === "X" ? "Игрок 1" : "Игрок 2");
    }
  }, [board]);

  // Click по ячейке
  const handleClick = (index) => {
    console.log(index);
    // Проверка index   и || board[index] если есть X нельзя перезаписать на 0
    if (index < 0 || index > 9 || board[index] || winner) return;
    // Заменяем пустой массив значением
    const newBoard = [...board];
    newBoard.splice(index, 1, turn);
    setBoard(newBoard);
    // Условие замены X на 0
    const newTurn = turn === "X" ? "0" : "X";
    setTurn(newTurn);
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(""));
    setWinner("");
  };

  return (
    <div className={cl.container}>
      <h1>Крестики-нолики</h1>
      {winner && (
        <h2>
          Победитель: {winner} ({turn === "X" ? "0" : "X"})
        </h2>
      )}
      <div className={cl.board}>
        {board.map((elem, index) => (
          <Square
            key={index}
            value={elem}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
      <button className={cl.restart} onClick={handleRestart}>
        Начать заново
      </button>
    </div>
  );
};

export default Board;
