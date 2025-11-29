import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";

export function Player(type) {
  const gameboard = Gameboard();

  if (type === "P1") {
    const ship1 = Ship(3);
    const ship2 = Ship(5);
    const ship3 = Ship(2);

    gameboard.placeShip(ship1, [0, 0], "VERTICAL");
    gameboard.placeShip(ship2, [4, 3], "HORIZONTAL");
    gameboard.placeShip(ship3, [6, 7], "VERTICAL");
  } else {
    const ship1 = Ship(7);
    const ship2 = Ship(1);
    const ship3 = Ship(6);

    gameboard.placeShip(ship1, [1, 1], "VERTICAL");
    gameboard.placeShip(ship2, [5, 4], "HORIZONTAL");
    gameboard.placeShip(ship3, [3, 9], "HORIZONTAL");
  }

  return { gameboard, type };
}
