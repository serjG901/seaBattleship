import React from "react";

export function TextWithExplane({ explane, union, text }) {
  return (
    <div className="italic font-bold">
      {explane} {union} {text}
    </div>
  );
}
