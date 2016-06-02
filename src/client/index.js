import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

store.subscribe(() => {
  const { session, lastAction } = store.getState();
  console.log(session, lastAction);
});

window.sh = store;