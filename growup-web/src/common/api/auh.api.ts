import { AxiosResponse } from 'axios';

import { baseAxios } from './axios';

interface AuthResponse {
  code: string;
  message: string;
  data: {
    user: any;
    authToken: string;
  } | null;
}

export interface AuthSignInParameter {
  email: string;
  password: string;
}

export interface AuthSignUpParameter {
  email: string;
  password: string;
}

class AuthApi {
  public requestSignIn = async (params: AuthSignInParameter) => {
    try {
      const response = await baseAxios.post<AuthResponse>(
        "/auth/signin/email",
        params
      );
      return response;
    } catch ({ response }) {
      return response as AxiosResponse<AuthResponse>;
    }
  };

  public requestSignUp = async (params: AuthSignUpParameter) => {
    try {
      const response = await baseAxios.post<AuthResponse>(
        "/auth/signup/email",
        params
      );
      return response;
    } catch ({ response }) {
      return response as AxiosResponse<AuthResponse>;
    }
  };
}

export default AuthApi;
