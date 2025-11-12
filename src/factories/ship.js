export function Ship(length) {
  let hits = 0;

  const hit = () => hits++;
  const isSunk = () => hits === length;
  const getLength = () => length;

  return { isSunk, hit, getLength };
}
