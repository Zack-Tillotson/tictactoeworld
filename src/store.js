import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'

import game from './App/Game/state/reducer';

const rootReducer = combineReducers({
  game,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareAry = [];

const sagaMiddleware = createSagaMiddleware();
middlewareAry.push(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, composeEnhancers(...middlewareAry));
// sagaMiddleware.run(boatSaga);

export default store;