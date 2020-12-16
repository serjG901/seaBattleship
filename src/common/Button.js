import React from "react";

export function Button({ text, onClick }) {
  const style = `
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
    focus:shadow-outline
    `;

  return (
    <button onClick={onClick} className={style}>
      {text}
    </button>
  );
}
