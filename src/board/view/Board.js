import React from "react";
import { GameConnect } from "../connect/GameConnect";
import { GameName } from "./GameName";
import { GameSettingsConnect } from "../connect/GameSettingsConnect";
import { Rulles } from "./Rulles";

export function Board({ play }) {
  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center text-center">
      <GameName />
      {play ? <GameConnect /> : <GameSettingsConnect />}
      <br />
      <Rulles />
    </div>
  );
}
