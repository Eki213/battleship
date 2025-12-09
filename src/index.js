import "./style.css";
import { createBoard } from "./dom.js";
import { Player } from "./factories/player.js";
import { renderBoard } from "./dom.js";

const player1 = Player("P1");
const player2 = Player("P2");
let turn = 1;

document.addEventListener("DOMContentLoaded", () => {
  createBoard(player1);
  createBoard(player2);
});

const getCoords = (index) => {
  const x = index % 10;
  const y = Math.floor(index / 10);

  return [x, y];
};

document.addEventListener("click", (e) => {
  const player = selectPlayer(turn);
  const cell = e.target;
  const boardEl = cell.closest(".board");
  if (!boardEl || cell === boardEl || !boardEl.classList.contains(player.type))
    return;

  const gameboard = player.gameboard;
  const coords = getCoords(cell.dataset.index);
  if (gameboard.isHit(coords) || gameboard.isMiss(coords)) return;
  gameboard.receiveAttack(coords);
  renderBoard(player);
  turn++;
});

function selectPlayer(turn) {
  return turn % 2 === 0 ? player1 : player2;
}
