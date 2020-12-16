import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBoard } from "../boardSlice";
import { seaSize, numberOfShips } from "../boardSlice";
import { GameSettings } from "../view/GameSettings";
import { getShipsArray } from "../getArrayFunctions";

export function GameSettingsConnect() {
  const board = useSelector(selectBoard);
  const dispatch = useDispatch();

  const numberOfShipsArray = getShipsArray(
    board.seaSize,
    Math.round((board.seaSize * board.seaSize) / 2)
  );

  function setSeaSize(value) {
    dispatch(seaSize(value));
  }

  function setNumberOfShips(value) {
    dispatch(numberOfShips(value));
  }

  return (
    <GameSettings
      seaSize={board.seaSize}
      seaSizeArray={board.selectSeaSize}
      setSeaSize={setSeaSize}
      numberOfShips={board.numberOfShips}
      numberOfShipsArray={numberOfShipsArray}
      setNumberOfShips={setNumberOfShips}
    />
  );
}
