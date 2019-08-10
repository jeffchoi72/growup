import { Context } from 'koa';
import { Service } from 'typedi';
import * as yup from 'yup';

import { AuthService } from '../service';
import LibraryService from '../service/library.service';
import UserService from '../service/user.service';

@Service()
class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private libraryService: LibraryService
  ) {}

  public emailSignIn = async (context: Context) => {
    const schema = yup.object().shape({
      email: yup
        .string()
        .email()
        .required(),
      password: yup
        .string()
        .min(8)
        .required()
    });

    const isValid = await schema.isValid(context.request.body);

    if (!isValid) {
      context.status = 400;
      context.body = {
        code: 'INVALID_REQUEST_DATA',
        message: '요청 데이터가 올바르지 않습니다',
        data: null
      };
      return;
    }

    const { email, password } = context.request.body;

    const userAuth = await this.authService.getUserAuth(email, password);

    if (!userAuth) {
      context.status = 404;
      context.body = {
        code: 'NOT_FOUND',
        message: '해당 이메일과 비밀번호로 계정이 조회되지 않습니다',
        data: null
      };

      return;
    }

    context.status = 200;
    context.body = {
      code: 'SUCCESS',
      message: '성공',
      data: userAuth
    };
  };

  public emailSignUp = async (context: Context) => {
    const schema = yup.object().shape({
      email: yup
        .string()
        .email()
        .required(),
      password: yup
        .string()
        .min(8)
        .required()
    });

    const isValid = await schema.isValid(context.request.body);

    if (!isValid) {
      context.body = {
        code: 'INVALID_REQUEST_DATA',
        message: '요청 데이터가 올바르지 않습니다',
        data: null
      };
      return;
    }

    const { email, password } = context.request.body;

    const existedEmail = await this.userService.isExistedEmail(email);
    console.log('existedEmail: ', existedEmail);

    if (existedEmail) {
      context.status = 409;
      context.body = {
        code: 'EXISTS_EMAIL',
        message: '해당 이메일로 계정이 존재합니다',
        data: null
      };
      return;
    }

    const user = await this.userService.addUser(email, password);
    await this.libraryService.addLibrary(user);

    delete user.password;

    const authToken = await this.authService.getAuthToken(user);

    context.status = 200;
    context.body = {
      code: 'SUCCESS',
      message: '성공',
      data: {
        user,
        authToken
      }
    };
  };
}

export default AuthController;
