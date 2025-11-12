import { Gameboard } from "../factories/gameboard.js";
import { Ship } from "../factories/ship.js";

test("test receiveAttack()", () => {
  const gameboard = Gameboard();
  const ship1 = Ship(3);
  const ship2 = Ship(5);
  const ship3 = Ship(2);

  gameboard.placeShip(ship1, [0, 0], "VERTICAL");
  gameboard.placeShip(ship2, [4, 3], "HORIZONTAL");
  gameboard.placeShip(ship3, [6, 7], "VERTICAL");
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([0, 1]);
  expect(ship1.isSunk()).toBe(false);
  gameboard.receiveAttack([0, 2]);
  expect(ship1.isSunk()).toBe(true);
  expect(ship2.isSunk()).toBe(false);

  expect(gameboard.allSunk()).toBe(false);

  gameboard.receiveAttack([4, 3]);
  gameboard.receiveAttack([5, 3]);
  expect(ship2.isSunk()).toBe(false);
  gameboard.receiveAttack([6, 3]);
  gameboard.receiveAttack([7, 3]);
  gameboard.receiveAttack([5, 3]);
  expect(ship2.isSunk()).toBe(false);
  gameboard.receiveAttack([8, 3]);
  expect(ship2.isSunk()).toBe(true);

  expect(gameboard.allSunk()).toBe(false);

  gameboard.receiveAttack([6, 7]);
  gameboard.receiveAttack([6, 10]);
  expect(ship3.isSunk()).toBe(false);
  gameboard.receiveAttack([6, 8]);
  expect(ship3.isSunk()).toBe(true);

  expect(gameboard.allSunk()).toBe(true);
});
