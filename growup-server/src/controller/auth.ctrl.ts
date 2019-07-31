import { Context } from 'koa';
import { Service } from 'typedi';
import * as yup from 'yup';

import { AuthService } from '../service';

@Service()
class AuthController {
  constructor(private authService: AuthService) {}

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
      context.body = {
        status: 400,
        message: '요청 데이터가 올바르지 않습니다',
        data: null
      };
      return;
    }

    const { email, password } = context.request.body;

    const userAuth = await this.authService.getUserAuth(email, password);

    if (!userAuth) {
      context.body = {
        status: 401,
        message: '해당 이메일과 비밀번호로 계정이 조회되지 않습니다',
        data: null
      };

      return;
    }

    context.body = {
      status: 200,
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
        status: 400,
        message: '요청 데이터가 올바르지 않습니다',
        data: null
      };
      return;
    }

    const { email, password } = context.request.body;

    const existedEmail = await this.authService.isExistedEmail(email);

    if (existedEmail) {
      context.body = {
        status: 409,
        message: '해당 이메일로 계정이 존재합니다',
        data: null
      };
      return;
    }

    const user = await this.authService.addUser(email, password);

    delete user.password;

    const authToken = await this.authService.getAuthToken(user);

    context.body = {
      status: 200,
      message: '성공',
      data: {
        user,
        authToken
      }
    };
  };
}

export default AuthController;
