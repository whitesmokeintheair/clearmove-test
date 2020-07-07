import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import epics from './epics';
import { composeWithDevTools } from 'redux-devtools-extension';

const observableMiddleware = createEpicMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(observableMiddleware)
  )
);

observableMiddleware.run(epics);