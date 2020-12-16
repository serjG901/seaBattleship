import React from "react";

export function Cell({ id, disabled, onTarget, xChoice }) {
  const enabledStyle = `
    w-8 
    text-black 
    cursor-pointer 
    rounded-xl
    bg-blue-100 
    hover:bg-red-100 
    `;
  const disabledStyle = `
    w-8 
    text-gray-200 
    cursor-not-allowed 
    `;

  return (
    <button
      className={disabled ? disabledStyle : enabledStyle}
      type="button"
      onClick={() => onTarget(id)}
      disabled={disabled}
    >
      {xChoice ? "x" : id}
    </button>
  );
}
