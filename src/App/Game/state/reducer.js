import types from './actionTypes';

const winningSquares = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8],
];
function calculateWin(squares) {
  const winners = winningSquares.find(triplet =>
    squares[triplet[0]] && triplet.reduce((soFar, tripletItem) =>
      soFar && squares[tripletItem] === squares[triplet[0]]
    , true)
  );

  return winners ? squares[winners[0]] : 0;
}

const initialState = {
  state: 'pre',
  squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  winner: 0,
};

function game(state = initialState, action) {
  switch(action.type) {
    case types.startGame: {
      return {
        ...initialState,
        state: 'active',
      }
    }

    case types.squareSelected: {
      const turn = state.squares.filter(item => !!item).length % 2 + 1;

      const squares = [...state.squares];
      squares[action.payload.square] = turn;

      const winner = calculateWin(squares);

      return {
        ...state,
        squares,
        winner,
        state: winner > 0 ? 'post' : 'active',
      }
    }
  }
  return state;
}

export default game;