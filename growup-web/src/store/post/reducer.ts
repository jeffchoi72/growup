import { Post } from 'common/api/post.api';
import produce from 'immer';
import { Action, handleActions } from 'redux-actions';

import { FetchFailPostListPayload, FetchSuccessPostListPayload } from './actions';
import { FETCH_FAIL_POST_LIST, FETCH_POST_LIST, FETCH_SUCCESS_POST_LIST } from './constants';

export enum Status {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL"
}

export interface PostListState {
  status: Status;
  message: string | null;
  posts: Post[];
}

const initialState: PostListState = {
  status: Status.PENDING,
  message: null,
  posts: []
};

const reducer = handleActions(
  {
    [FETCH_POST_LIST]: (state: PostListState) => {
      return produce(state, draft => {
        draft.status = Status.PENDING;
      });
    },
    [FETCH_SUCCESS_POST_LIST]: (
      state: PostListState,
      actions: Action<FetchSuccessPostListPayload>
    ) => {
      const {
        payload: { message, posts }
      } = actions;

      return produce(state, draft => {
        draft.status = Status.SUCCESS;
        draft.message = message;
        draft.posts = draft.posts.concat(posts);
      });
    },
    [FETCH_FAIL_POST_LIST]: (
      state: PostListState,
      actions: Action<FetchFailPostListPayload>
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
