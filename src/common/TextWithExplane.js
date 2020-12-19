import React from "react";

export function TextWithExplane({ explane, union, text }) {
  return (
    <div className="italic font-bold">
      {explane} {union} <span className="text-red-500">{text}</span>
    </div>
  );
}
