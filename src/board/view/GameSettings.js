import React from "react";
import { Select } from "../../common/Select";
import { PlayConnect } from "../connect/PlayConnect";

export function GameSettings({
  seaSize,
  seaSizeArray,
  setSeaSize,
  numberOfShips,
  numberOfShipsArray,
  setNumberOfShips,
}) {
  return (
    <div className="m-4">
      <Select
        labelText="Sea size"
        defaultValue={seaSize}
        selectArray={seaSizeArray}
        setValue={setSeaSize}
        viewModificator={(size) => `${size} x ${size}`}
      />
      <br />
      <Select
        labelText="Number of ships"
        defaultValue={numberOfShips}
        selectArray={numberOfShipsArray}
        setValue={setNumberOfShips}
        viewModificator={(number) => `${number}`}
      />
      <br />
      <PlayConnect />
    </div>
  );
}
