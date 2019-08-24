import { combineReducers } from 'redux';

import { sessionReducer } from './session';

const reducers = combineReducers({
  session: sessionReducer
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;
