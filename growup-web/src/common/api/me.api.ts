import { AxiosResponse } from 'axios';

import { baseAxios } from './axios';

export interface MyProfile {
  id: string;
  email: string;
  name: string | null;
  profileImageURL: string | null;
}

export interface MeResponse {
  code: string;
  message: string;
  data: {
    myUser: MyProfile;
  };
}

class MeApi {
  public requestMyProfile = async (authToken: string) => {
    try {
      return baseAxios.get<MeResponse>("/me", {
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
