export function renderBoard(player) {
  const board = player.gameboard;
  const coords = board.getShipPositions();
  const grid = renderGrid(player.type);
  renderShips(grid, coords);
  console.log(coords);
}

function renderGrid(playerType) {
  const grid = document.createElement("div");
  grid.classList.add("board");
  grid.classList.add(playerType);
  document.body.appendChild(grid);

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("button");
    cell.className = "cell";
    cell.setAttribute("type", "button");
    grid.appendChild(cell);
  }

  return grid;
}

function renderShips(grid, ships) {
  for (const key in ships) {
    const coords = key.split(",");
    const index = +coords[0] + 10 * coords[1] + 1;
    const cell = grid.querySelector(`:nth-child(${index})`);
    cell.classList.add("ship");
  }
}
