import { Action, createAction } from 'redux-actions';

import { MyProfile } from '../../common/api/me.api';
import { FETCH_FAIL_SESSION, FETCH_SESSION, FETCH_SUCESS_SESSION } from './constants';

/**
  세션 정의: 로그인된 사용자의 정보가 담긴다.

  클라이언트가 나에 프로필 정보를 요청한다. ( FETCH )
  클라이언트가 나에 프로필 정보를 응답받아 업데이트한다. ( SUCCESS ),
  클라이언트가 나에 프로필 정보 요청에 실패를 읃답 받았다. ( FAIL ),
 */

export type FetchSession = Action<FetchSessionPayload>;

export interface FetchSessionPayload {
  authTokenId: string;
}

export interface FetchSuccessSessionPayload {
  message: string;
  myProfile: MyProfile;
  authTokenId: string;
}

export interface FetchFailSessionPayload {
  message: string;
}

export const fetchSession = createAction<FetchSessionPayload>(FETCH_SESSION);

export const fetchSuccessSession = createAction<FetchSuccessSessionPayload>(
  FETCH_SUCESS_SESSION
);

export const fetchFailSession = createAction<FetchFailSessionPayload>(
  FETCH_FAIL_SESSION
);
