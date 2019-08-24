import { SagaIterator } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';

import { meApi } from '../../common/api';
import { FetchSession } from './actions';
import { FETCH_SESSION } from './constants';

function* fetchSession({ payload }: FetchSession): SagaIterator {
  console.log("Hello Sagas!");

  const response = yield call(meApi.requestMyProfile, payload.authTokenId);

  console.log("response: ", response);
}

export function* watchFetchSession() {
  yield takeEvery(FETCH_SESSION, fetchSession);
}
