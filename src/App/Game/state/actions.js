import types from './actionTypes';

function startGame() {
  return {type: types.startGame};
}

function squareSelected(square) {
  return {type: types.squareSelected, payload: {square}};
}

export default {
  startGame,
  squareSelected,
}