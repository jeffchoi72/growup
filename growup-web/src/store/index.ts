import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const isDev = process.env.NODE_ENV === "development";
const devTools = isDev && composeWithDevTools;
const composeEnhancers: any = devTools || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export default (preloadedState?: any) => {
  const store = createStore(
    reducers as any,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(sagas);

  return store;
};
