import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "./boardSlice";

export function Winner({ children }) {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Winner the game - {children}</p>
      <button
        className="
          p-2 
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
        onClick={() => {
          dispatch(reset());
        }}
      >
        Play again
      </button>
    </div>
  );
}
