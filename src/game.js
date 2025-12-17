import { Player } from "./factories/player.js";
import { CPU } from "./cpu.js";

export function Game(againstCPU = false) {
  const player1 = Player("P1");
  let player2 = againstCPU ? CPU() : Player("P2");
  let turn = 1;
  let winner = null;

  const getWinner = () => winner;

  function checkWinner() {
    if (player1.gameboard.allSunk()) winner = player2;
    if (player2.gameboard.allSunk()) winner = player1;
  }

  function playTurn(coords) {
    const enemy = getEnemy();
    enemy.gameboard.receiveAttack(coords);
    nextTurn();
    checkWinner();

    if (againstCPU && !getWinner()) {
      player2.attack(player1);
      nextTurn();
      checkWinner();
    }
  }

  const isValid = (coords) => {
    const enemyBoard = getEnemy().gameboard;
    return !enemyBoard.isHit(coords) && !enemyBoard.isMiss(coords);
  };

  const nextTurn = () => turn++;

  const getEnemy = () => (turn % 2 === 0 ? player1 : player2);

  const getPlayers = () => [player1, player2];

  return { getWinner, isValid, playTurn, getPlayers, getEnemy };
}
