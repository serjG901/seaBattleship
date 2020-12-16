import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectBoard } from "./boardSlice";
import { getShipsPlayer } from "./functions";
import { Winner } from "./Winner";
import { PlayerSea } from "./PlayerSea";

export function Game() {
  const board = useSelector(selectBoard);
  const [ships, setShips] = useState({
    player1: getShipsPlayer(board.ships, board.size),
    player2: getShipsPlayer(board.ships, board.size)
  });
  const [destroyShips, setDestroyShips] = useState({
    player1: [],
    player2: []
  });
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (ships.player1.length === 0) setWinner("player2");
    if (ships.player2.length === 0) setWinner("player1");
  }, [ships]);

  useEffect(() => {
    const newShips = ships.player2.filter((ship) => {
      if (board.player1.includes(ship))
        setDestroyShips((state) => {
          return {
            ...state,
            player2: [...state.player2, ship]
          };
        });
      return !board.player1.includes(ship);
    });
    ships.player2.length > newShips.length &&
      setShips((state) => {
        return { ...state, player2: newShips };
      });
  }, [board.player1, ships.player2]);

  useEffect(() => {
    const newShips = ships.player1.filter((ship) => {
      if (board.player2.includes(ship))
        setDestroyShips((state) => {
          return {
            ...state,
            player1: [...state.player1, ship]
          };
        });
      return !board.player2.includes(ship);
    });
    ships.player1.length > newShips.length &&
      setShips((state) => {
        return { ...state, player1: newShips };
      });
  }, [board.player2, ships.player1]);

  return winner ? (
    <Winner>{winner}</Winner>
  ) : (
    <div className="flex flex-col">
      <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
        Next move - {board.currentPlayer}
      </p>
      <div className="flex justify-center">
        <PlayerSea
          seaPlayer={"player1"}
          ships={ships}
          destroyShips={destroyShips}
        />
        <PlayerSea
          seaPlayer={"player2"}
          ships={ships}
          destroyShips={destroyShips}
        />
      </div>
    </div>
  );
}
