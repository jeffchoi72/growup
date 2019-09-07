import { Post } from 'common/api/post.api';
import { createAction } from 'redux-actions';

import { FETCH_FAIL_POST_LIST, FETCH_POST_LIST, FETCH_SUCCESS_POST_LIST } from './constants';

export interface FetchPostListPayload {
  offset?: number;
  limit?: number;
}

export interface FetchSuccessPostListPayload {
  message: string;
  posts: Post[];
}

export interface FetchFailPostListPayload {
  message: string;
}

export const fetchPostList = createAction<FetchPostListPayload>(
  FETCH_POST_LIST
);

export const fetchSuccessPostList = createAction<FetchSuccessPostListPayload>(
  FETCH_SUCCESS_POST_LIST
);

export const fetchFailPostList = createAction<FetchFailPostListPayload>(
  FETCH_FAIL_POST_LIST
);
