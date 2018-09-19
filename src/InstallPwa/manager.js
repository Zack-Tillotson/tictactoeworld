import store from '../store';
import types from './state/actionTypes';
import actions from './state/actions';

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  store.dispatch(actions.readyToInstall());
});

window.addEventListener('appinstalled', e => {
  store.dispatch(actions.installDetected());
})

function installPwa() {
  if(!deferredPrompt) {
    return;
  }

  store.dispatch(actions.readyToInstall(false));

  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then(choiceResult => {
      store.dispatch(actions.installCompleted(choiceResult.outcome));
      deferredPrompt = null;
    });
}

export default installPwa;