import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBoard } from "./boardSlice";
import { size } from "./boardSlice";

export function SelectSize() {
  const board = useSelector(selectBoard);
  const dispatch = useDispatch();

  const sizeArray = board.selectSize;

  function handleChange(event) {
    dispatch(size(Number(event.target.value)));
  }

  return (
    <div>
      <label htmlFor="size">Sea size</label>
      <br />
      <select defaultValue={board.size} id="size" onChange={handleChange}>
        {sizeArray.map((value) => {
          return (
            <option key={value} value={value}>
              {value} x {value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
