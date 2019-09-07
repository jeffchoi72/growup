import { AxiosResponse } from 'axios';
import { postApi } from 'common/api';
import { PostListResponse } from 'common/api/post.api';
import { Action } from 'redux-actions';
import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchFailPostList, FetchPostListPayload, fetchSuccessPostList } from './actions';
import { FETCH_POST_LIST } from './constants';

function* fetchPostList({
  payload
}: Action<FetchPostListPayload>): SagaIterator {
  const { limit, offset } = payload;
  const response: AxiosResponse<PostListResponse> = yield call(
    postApi.getPosts,
    { limit, offset }
  );

  const {
    message,
    data: { posts }
  } = response.data;

  switch (response.status) {
    case 200:
      yield put(
        fetchSuccessPostList({
          message,
          posts
        })
      );
      break;
    default:
      yield put(fetchFailPostList({ message: response.data.message }));
      break;
  }
}

export function* watchFetchPostList() {
  yield takeEvery(FETCH_POST_LIST, fetchPostList);
}
