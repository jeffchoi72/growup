import { Context } from 'koa';

import token from '../library/token';

export interface AuthContext extends Context {
  token?: {
    id: string;
    iat: Date;
    exp: Date;
    iss: string;
    sub: string;
  };
}

const userAuthMiddleware = async (context: Context, next: () => Promise<any>) => {
  try {
    const authToken: string = context.headers['growup-user-token'];

    const decodeToken: any = await token.AuthToken.verifyAuthToken(authToken);

    if (decodeToken.sub !== 'auth-token') throw 'Not a auth token';
    context.token = decodeToken;

    await next();
  } catch (error) {
    context.status = 403;
    context.body = {
      code: 'FORBIDDEN',
      message: '인증 실패',
      data: null
    };
  }
};

export default userAuthMiddleware;
