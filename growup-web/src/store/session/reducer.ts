import { produce } from 'immer';
import { Action, handleActions } from 'redux-actions';

import { MyProfile } from '../../common/api/me.api';
import { FetchFailSessionPayload, FetchSuccessSessionPayload } from './actions';
import { FETCH_FAIL_SESSION, FETCH_SESSION, FETCH_SUCESS_SESSION } from './constants';

export enum Status {
  INIT = "INIT",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL"
}

export interface SessionState {
  status: Status;
  message: string | null;
  authTokenId: string | null;
  myProfile: MyProfile | null;
  createdDate: Date | null;
  updatedDate: Date | null;
}

const initialState: SessionState = {
  status: Status.INIT,
  message: null,
  authTokenId: null,
  myProfile: null,
  createdDate: null,
  updatedDate: null
};

const reducer = handleActions(
  {
    [FETCH_SESSION]: (state: SessionState) => {
      return produce(state, draft => {
        draft.status = Status.PENDING;
      });
    },
    [FETCH_SUCESS_SESSION]: (
      state: SessionState,
      actions: Action<FetchSuccessSessionPayload>
    ) => {
      const {
        payload: { myProfile, authTokenId }
      } = actions;

      return produce(state, draft => {
        draft.status = Status.SUCCESS;
        draft.myProfile = myProfile;
        draft.authTokenId = authTokenId;
      });
    },
    [FETCH_FAIL_SESSION]: (
      state: SessionState,
      actions: Action<FetchFailSessionPayload>
    ) => {
      const {
        payload: { message }
      } = actions;

      return produce(state, draft => {
        draft.status = Status.FAIL;
        draft.message = message;
      });
    }
  },
  initialState
);

export default reducer;
