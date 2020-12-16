export function getBoardArray(seaSize) {
  const boardArray = Array.from({ length: seaSize * seaSize }, (v, k) => k + 1);
  return boardArray;
}

function getRandomShip(seaSize) {
  const ship = Math.round(seaSize * seaSize * Math.random());
  return ship !== 0 ? ship : 1;
}

export function getShipsPlayer(numberOfShips, seaSize) {
  let ships = [];
  for (let i = 1; i <= numberOfShips; i++) {
    let ship;
    do {
      ship = getRandomShip(seaSize);
    } while (ships.includes(ship));
    ships = [...ships, ship];
  }
  return ships;
}

export function getShipsArray(min, max) {
  const shipsArray = Array.from({ length: max - min + 1 }, (v, k) => k + min);
  return shipsArray;
}
