import React from "react";
import { useDispatch } from "react-redux";
import { play } from "../boardSlice";
import { Button } from "../../common/Button";

export function PlayConnect() {
  const dispatch = useDispatch();

  function handlePlay() {
    const firstPlayer = Math.random() > 0.5 ? "player1" : "player2";
    dispatch(play(firstPlayer));
  }

  return <Button text="PLAY" onClick={handlePlay} />;
}
