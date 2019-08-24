import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import { meApi } from '../../common/api';
import { MeResponse } from '../../common/api/me.api';
import { fetchFailSession, FetchSession, fetchSuccessSession } from './actions';
import { FETCH_SESSION } from './constants';

function* fetchSession({ payload }: FetchSession): SagaIterator {
  const authTokenId = payload.authTokenId;

  const response: AxiosResponse<MeResponse> = yield call(
    meApi.requestMyProfile,
    authTokenId
  );

  const {
    message,
    data: { myUser }
  } = response.data;

  switch (response.status) {
    case 200:
      yield put(
        fetchSuccessSession({
          message,
          authTokenId,
          myProfile: myUser
        })
      );
      break;
    default:
      yield put(fetchFailSession({ message: response.data.message }));
      break;
  }
}

export function* watchFetchSession() {
  yield takeEvery(FETCH_SESSION, fetchSession);
}
