import { produce } from 'immer';
import { handleActions } from 'redux-actions';

import { FETCH_SESSION } from './constants';

export interface MyProfile {
  id: string;
  email: string;
  name: string;
}

export interface SessionState {
  loading: boolean;
  authTokenId: string | null;
  myProfile: MyProfile | null;
}

const defaultState: SessionState = {
  loading: false,
  authTokenId: null,
  myProfile: null
};

const reducer = handleActions(
  {
    [FETCH_SESSION]: (state: SessionState) => {
      return produce(state, draft => {
        draft.loading = true;
      });
    }
  },
  defaultState
);

export default reducer;
