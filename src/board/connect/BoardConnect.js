import React from "react";
import { useSelector } from "react-redux";
import { selectBoard } from "../boardSlice";
import { Board } from "../view/Board";

export function BoardConnect() {
  const board = useSelector(selectBoard);
  return <Board play={board.play} />;
}
