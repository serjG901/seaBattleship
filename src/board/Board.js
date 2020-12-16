import React from "react";
import { useSelector } from "react-redux";
import { selectBoard } from "./boardSlice";
import { Game } from "./Game";
import { GameName } from "./GameName";
import { GameSettings } from "./GameSettings";

export function Board() {
  const board = useSelector(selectBoard);
  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center text-center">
      <GameName />
      {board.play ? <Game /> : <GameSettings />}
    </div>
  );
}
