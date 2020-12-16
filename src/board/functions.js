export function getBoardArray(size) {
  let boardArray = [];
  for (let i = 1; i <= size * size; i++) {
    boardArray = [...boardArray, i];
  }
  return boardArray;
}

function getRandomShip(size) {
  const ship = Math.round(size * size * Math.random());
  return ship !== 0 ? ship : 1;
}

export function getShipsPlayer(ships, size) {
  let score = [];
  for (let i = 1; i <= ships; i++) {
    let ship = getRandomShip(size);
    while (score.includes(ship)) {
      ship = getRandomShip(size);
    }
    score = [...score, ship];
  }
  return score;
}

export function getShipsArray(min, max) {
  let shipsArray = [];
  for (let i = min; i <= max; i++) {
    shipsArray = [...shipsArray, i];
  }
  return shipsArray;
}
