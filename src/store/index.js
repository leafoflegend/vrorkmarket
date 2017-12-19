import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Iterable } from 'immutable';
import rootReducer from './reducers';

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) {
    return state.toJS();
  }
  return state;
};

let myMiddleware = [
  thunkMiddleware,
  createLogger({ collapsed: true, stateTransformer }),
];

if (process.env.NODE_ENV === 'production') {
  myMiddleware = [thunkMiddleware];
}

export default createStore(
  rootReducer,
  applyMiddleware(
    ...myMiddleware
  )
);
