import { Service } from 'typedi';

import { AuthContext } from '../middlewares/userAuth.middleware';
import UserService from '../service/user.service';

@Service()
class UserController {
  constructor(private userService: UserService) {}

  public getMyProfile = async (context: AuthContext) => {
    try {
      const { id: userId } = context.token;

      const myUser = await this.userService.getUserById(userId);

      if (!myUser) {
        context.status = 404;
        context.body = {
          code: 'NOT_FOUND_USER',
          message: '사용자를 찾을 수 없습니다',
          data: null
        };
        return;
      }

      delete myUser.password;

      context.status = 200;
      context.body = {
        code: 'SUCCESS',
        message: '성공',
        data: {
          myUser
        }
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
      const { id: userId } = context.token;
      const { profileImageURL } = context.request.body;

      const myUser = await this.userService.getUserById(userId);

      if (!myUser) {
        context.status = 404;
        context.body = {
          code: 'NOT_FOUND_USER',
          message: '사용자를 찾을 수 없습니다',
          data: null
        };
        return;
      }

      delete myUser.password;

      await this.userService.updateUserProfile({ profileImageURL }, userId);

      myUser.profileImageURL = profileImageURL;

      context.status = 200;
      context.body = {
        code: 'SUCCESS',
        message: '성공',
        data: {
          myUser
        }
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
      const { id: userId } = context.token;
      const { name } = context.request.body;

      const myUser = await this.userService.getUserById(userId);

      if (!myUser) {
        context.status = 404;
        context.body = {
          code: 'NOT_FOUND_USER',
          message: '사용자를 찾을 수 없습니다',
          data: null
        };
        return;
      }

      delete myUser.password;

      await this.userService.updateUserProfile({ name }, userId);

      myUser.name = name;

      context.status = 200;
      context.body = {
        code: 'SUCCESS',
        message: '성공',
        data: {
          myUser
        }
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
