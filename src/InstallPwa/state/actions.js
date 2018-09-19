import types from './actionTypes';

function readyToInstall(installable = true) {
  return {type: types.readyToInstall, payload: {installable}};
}

function installCompleted(result) {
  return {type: types.installCompleted, payload: {result}};
}

function installDetected() {
  return {type: types.installDetected};
}

export default {
  readyToInstall,
  installCompleted,
  installDetected,
}