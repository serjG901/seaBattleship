import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { movePlayer1, movePlayer2, selectBoard } from "./boardSlice";
import { getBoardArray } from "./functions";
import { Cell } from "./Cell";

export function PlayerSea({ seaPlayer, ships, destroyShips }) {
  const board = useSelector(selectBoard);
  const dispatch = useDispatch();

  function handleClick(id) {
    if (board.currentPlayer === "player1") {
      dispatch(movePlayer1(id));
    }
    if (board.currentPlayer === "player2") {
      dispatch(movePlayer2(id));
    }
  }

  return (
    <div className="w-1/2 p-2">
      <p>{seaPlayer} have a </p>
      <p>
        <span className="font-bold">{ships[seaPlayer].length}</span>{" "}
        {ships[seaPlayer].length === 1 ? "ship" : "ships"}
      </p>
      {getBoardArray(board.size).map((id) => {
        return (
          <span
            key={id}
            className="rounded-r-none rounded-l-xl"
            style={
              destroyShips[seaPlayer].includes(id)
                ? { background: "#f00" }
                : { background: "none" }
            }
          >
            <Cell
              id={id}
              disabled={
                board.currentPlayer === seaPlayer ||
                board[seaPlayer === "player1" ? "player2" : "player1"].includes(
                  id
                )
              }
              onClick={handleClick}
              xChoice={board[
                seaPlayer === "player1" ? "player2" : "player1"
              ].includes(id)}
            />
            {id % board.size ? null : <br />}
          </span>
        );
      })}
    </div>
  );
}
