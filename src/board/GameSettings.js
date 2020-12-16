import React from "react";
import { useDispatch } from "react-redux";
import { play } from "./boardSlice";
import { SelectSize } from "./SelectSize";
import { SelectShips } from "./SelectShips";

export function GameSettings() {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const firstPlayer = Math.random() > 0.5 ? "player1" : "player2";
    dispatch(play(firstPlayer));
  }

  return (
    <div className="m-4">
      <form id="boardSettings" onSubmit={handleSubmit}>
        <SelectSize />
        <br />
        <SelectShips />
        <br />
        <button
          className="
            py-2
            px-4 
            bg-blue-600 
            hover:bg-blue-800 
            text-white 
            transition-all 
            duration-1000
            rounded 
            shadow-md
            hover:shadow-none
            cursor-pointer
            focus:outline-none 
            focus:shadow-outline"
          type="submit"
        >
          PLAY
        </button>
      </form>
    </div>
  );
}
