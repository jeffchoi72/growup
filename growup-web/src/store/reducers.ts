import { combineReducers } from 'redux';

import { postReducer } from './post';
import { sessionReducer } from './session';

const reducers = combineReducers({
  session: sessionReducer,
  post: postReducer
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;
