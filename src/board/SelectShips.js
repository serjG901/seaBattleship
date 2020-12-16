import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBoard } from "./boardSlice";
import { ships } from "./boardSlice";
import { getShipsArray } from "./functions";

export function SelectShips() {
  const board = useSelector(selectBoard);
  const dispatch = useDispatch();
  const minShips = board.size;
  const maxShips = Math.round((board.size * board.size) / 2);

  const shipsArray = getShipsArray(minShips, maxShips);

  function handleChange(event) {
    dispatch(ships(Number(event.target.value)));
  }

  return (
    <div>
      <label htmlFor="ships">Number of ships</label>
      <br />
      <select defaultValue={board.ships} id="ships" onChange={handleChange}>
        {shipsArray.map((ship) => {
          return (
            <option key={ship} value={ship}>
              {ship}
            </option>
          );
        })}
      </select>
    </div>
  );
}
