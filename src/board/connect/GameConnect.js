import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBoard, shipsPlayer1, shipsPlayer2 } from "../boardSlice";
import { getShipsPlayer } from "../getArrayFunctions";
import { Game } from "../view/Game";

export function GameConnect() {
  const board = useSelector(selectBoard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shipsPlayer1(getShipsPlayer(board.numberOfShips, board.seaSize)));
    dispatch(shipsPlayer2(getShipsPlayer(board.numberOfShips, board.seaSize)));
  }, [dispatch, board.numberOfShips, board.seaSize]);

  return <Game currentPlayer={board.currentPlayer} winner={board.winner} />;
}
