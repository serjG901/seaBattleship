import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { movePlayer1, movePlayer2, selectBoard } from "../boardSlice";
import { Sea } from "../view/Sea";

export function SeaConnect({ seaOwner }) {
  const board = useSelector(selectBoard);
  const dispatch = useDispatch();

  function handleTarget(id) {
    if (board.currentPlayer === "player1") {
      dispatch(movePlayer1(id));
    }
    if (board.currentPlayer === "player2") {
      dispatch(movePlayer2(id));
    }
  }

  return (
    <Sea
      seaSize={board.seaSize}
      currentPlayer={board.currentPlayer}
      player={board[seaOwner]}
      oponent={board[seaOwner === "player1" ? "player2" : "player1"]}
      onTarget={handleTarget}
    />
  );
}
