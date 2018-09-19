import types from './actionTypes';

const initialState = {
  installable: false,
  installing: false,
  installed: false,
};

function pwa(state = initialState, action) {
  switch(action.type) {
    case types.readyToInstall: {
      return {
        ...state,
        installable: action.payload.installable,
      }
    }
    case types.installCompleted: {
      return {
        ...state,
        installable: false,
        installing: action.payload.result === 'accepted',
      }
    }
    case types.installDetected: {
      return {
        ...state,
        installable: false,
        installing: false,
        installed: true,
      }
    }
  }
  return state;
}

export default pwa;