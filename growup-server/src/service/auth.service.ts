import { Service } from 'typedi';
import { getCustomRepository } from 'typeorm';

import User from '../database/entity/User';
import UserRepository from '../database/repository/User.repo';
import { encryptPassword } from '../library/encrypt';
import { generateAuthToken } from '../library/token/auth.token';

@Service()
class AuthService {
  public async isExistedEmail(email: string) {
    const userRepo = getCustomRepository(UserRepository);

    const user = userRepo.findOne({ where: { email } });

    if (user) {
      return true;
    }

    return false;
  }

  public async addUser(email: string, password: string) {
    const userRepo = getCustomRepository(UserRepository);

    const user: Partial<User> = {
      email,
      password: encryptPassword(password)
    };

    return userRepo.addUser(user);
  }

  public async getAuthToken(user: User) {
    const { id, email } = user;

    const payload = {
      id,
      email
    };

    return generateAuthToken(payload);
  }
}

export default AuthService;
