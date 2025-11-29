export function Gameboard() {
  const shipInfo = {};
  const missCoords = [];
  const ships = [];
  const attackCoords = [];

  const placeShip = (ship, coords, orientation) => {
    const axis = orientation === "VERTICAL" ? 1 : 0;
    const pos = coords;
    ships.push(ship);

    for (let i = 0; i < ship.getLength(); i++) {
      shipInfo[pos.toString()] = ship;
      pos[axis]++;
    }
  };

  const receiveAttack = (coords) => {
    const ship = shipInfo[coords.toString()];
    const pos = coords.toString();

    if (!ship) {
      missCoords.push(pos);
      return;
    }

    if (!attackCoords.includes(pos)) {
      ship.hit();
      attackCoords.push(pos);
    }
  };

  const allSunk = () => ships.every((ship) => ship.isSunk());

  const getShipPositions = () => ({ ...shipInfo });

  return { receiveAttack, placeShip, allSunk, getShipPositions };
}
