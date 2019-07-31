import { Service } from 'typedi';

import User from '../database/entity/User';
import { generateAuthToken } from '../library/token/auth.token';
import UserService from './user.service';

@Service()
class AuthService {
  constructor(private userService: UserService) {}

  public async getAuthToken(user: User) {
    const { id, email } = user;

    const payload = {
      id,
      email
    };

    return generateAuthToken(payload);
  }

  public async getUserAuth(email: string, password: string) {
    const user = await this.userService.getUserByEmailAndPassword(email, password);

    if (!user) {
      return null;
    }

    delete user.password;

    const authToken = await this.getAuthToken(user);

    return {
      user,
      authToken
    };
  }
}

export default AuthService;
