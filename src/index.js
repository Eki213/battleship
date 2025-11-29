import "./style.css";
import { renderBoard } from "./dom.js";
import { Gameboard } from "./factories/gameboard.js";
import { Player } from "./factories/player.js";
import { Ship } from "./factories/ship.js";

const player1 = Player("P1");
const player2 = Player("CPU");

document.addEventListener("DOMContentLoaded", () => {
  renderBoard(player1);
  renderBoard(player2);
});
