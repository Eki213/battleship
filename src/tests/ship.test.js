import { Ship } from "../factories/ship.js";

test("test isSunk()", () => {
  const ship = Ship(2);

  expect(ship.isSunk()).toBe(false);
  ship.hit();
  
  expect(ship.isSunk()).toBe(false);
  ship.hit();

  expect(ship.isSunk()).toBe(true);
});
