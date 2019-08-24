import { AxiosResponse } from 'axios';

import { baseAxios } from './axios';

interface Response {
  code: string;
  message: string;
  data: {
    myUser: {
      id: string;
      email: string;
      name: string | null;
      profileImageURL: string | null;
    };
  };
}

class MeApi {
  public requestMyProfile = async (authToken: string) => {
    try {
      return baseAxios.get<Response>("/me", {
        headers: {
          "growup-user-token": authToken
        }
      });
    } catch ({ response }) {
      return response as AxiosResponse<Response>;
    }
  };
}

export default MeApi;
