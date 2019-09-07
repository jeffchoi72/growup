import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { postSaga } from './post';
import { sessionSaga } from './session';

export default function* rootSaga(): SagaIterator {
  yield all([
    fork(sessionSaga.watchFetchSession),
    fork(postSaga.watchFetchPostList)
  ]);
}
