import "./style.css";
import { createBoard } from "./dom.js";
import { renderBoard } from "./dom.js";
import { Game } from "./game.js";

const againstCPU = true;
const game = Game(againstCPU);
const players = game.getPlayers();

document.addEventListener("DOMContentLoaded", () => {
  createBoard(players[0]);
  createBoard(players[1]);
});

const getCoords = (index) => {
  const x = index % 10;
  const y = Math.floor(index / 10);

  return [x, y];
};

document.addEventListener("click", (e) => {
  const cell = e.target;
  const boardEl = cell.closest(".board");
  const enemy = game.getEnemy();

  if (
    game.getWinner() ||
    !boardEl ||
    cell === boardEl ||
    !boardEl.classList.contains(enemy.type)
  )
    return;

  const coords = getCoords(cell.dataset.index);
  if (!game.isValid(coords)) return;
  game.playTurn(coords);
  renderBoard(enemy);
  if (againstCPU) renderBoard(players[0]);

  const winner = game.getWinner();
  if (winner) endGameHandler(winner);
});

function endGameHandler(winner) {
  const announcementsEl = document.querySelector(".announcements");
  announcementsEl.textContent = `The winner is ${winner.type}!`;
}
