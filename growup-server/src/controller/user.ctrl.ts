import { Service } from 'typedi';

import { AuthContext } from '../middlewares/userAuth.middleware';
import UserService from '../service/user.service';

@Service()
class UserController {
  constructor(private userService: UserService) {}

  public getMyProfile = async (context: AuthContext) => {
    try {
      context.status = 200;
      context.body = {
        code: 'SUCCESS',
        message: '성공',
        data: null
      };
    } catch (error) {
      context.status = 500;
      context.body = {
        code: 'SERVER_ERROR',
        message: '서버 에러',
        data: null
      };
    }
  };

  public updateMyProfileImage = async (context: AuthContext) => {
    try {
      context.status = 200;
      context.body = {
        code: 'SUCCESS',
        message: '성공',
        data: null
      };
    } catch (error) {
      context.status = 500;
      context.body = {
        code: 'SERVER_ERROR',
        message: '서버 에러',
        data: null
      };
    }
  };

  public updateMyProfileName = async (context: AuthContext) => {
    try {
      context.status = 200;
      context.body = {
        code: 'SUCCESS',
        message: '성공',
        data: null
      };
    } catch (error) {
      context.status = 500;
      context.body = {
        code: 'SERVER_ERROR',
        message: '서버 에러',
        data: null
      };
    }
  };
}

export default UserController;
