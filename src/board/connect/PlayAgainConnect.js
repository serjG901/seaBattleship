import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../boardSlice";
import { Button } from "../../common/Button";

export function PlayAgainConnect() {
  const dispatch = useDispatch();

  function handleReset() {
    dispatch(reset());
  }

  return <Button text="PLAY AGAIN" onClick={handleReset} />;
}
