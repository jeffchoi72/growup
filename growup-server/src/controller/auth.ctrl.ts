import { Context } from 'koa';
import { Service } from 'typedi';
import * as yup from 'yup';

import { AuthService } from '../service';

@Service()
class AuthController {
  constructor(private authService: AuthService) {}

  public emailSignIn = (context: Context) => {
    // email sign in api
    // 이메일이랑 비밀번호 받는다.
    // request body를 검증한다.
    // email과 password로 계정이 조회되는지 확인한다.
    // 토큰을 발급한다.

    context.body = {
      status: 200,
      message: '성공'
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
