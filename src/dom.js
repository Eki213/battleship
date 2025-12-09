export function createBoard(player) {
  createGrid(player.type);
  renderBoard(player);
}

function createGrid(playerType) {
  const grid = document.createElement("div");
  grid.classList.add("board");
  grid.classList.add(playerType);
  document.body.appendChild(grid);

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("button");
    cell.className = "cell";
    cell.setAttribute("type", "button");
    cell.dataset.index = i;
    grid.appendChild(cell);
  }
}

const getIndex = (x, y) => +x + 10 * y + 1;

export function renderBoard(player) {
  const board = player.gameboard;
  const positions = board.getShipPositions();
  const grid = document.querySelector(`.board.${player.type}`);

  for (const pos in positions) {
    const cell = getCell(grid, pos);
    cell.classList.add("ship");
    if (board.isHit(pos)) cell.classList.add("hit");
  }

  const missCoords = board.getMissCoords();

  for (let coords of missCoords) {
    const cell = getCell(grid, coords);
    cell.classList.add("miss");
  }
}

const getCell = (grid, coords) => {
  const coordsArr = coords.split(",");
  const index = getIndex(...coordsArr);
  const cell = grid.querySelector(`:nth-child(${index})`);

  return cell;
};
