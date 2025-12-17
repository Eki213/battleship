import { Player } from "./factories/player.js";

export function CPU() {
  const cpu = Player("CPU");

  const attack = (player) => {
    let attackCoords = getAttackCoords();
    const playerBoard = player.gameboard;
    while (playerBoard.isMiss(attackCoords) || playerBoard.isHit(attackCoords))
      attackCoords = getAttackCoords();
    playerBoard.receiveAttack(attackCoords);
  };

  const getAttackCoords = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return [x, y];
  };

  return Object.assign({}, cpu, { attack });
}
