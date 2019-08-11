import { Service } from 'typedi';
import { getCustomRepository } from 'typeorm';

import User from '../database/entity/User';
import { UserRepo } from '../database/repository';
import { encryptPassword } from '../library/encrypt';

@Service()
class UserService {
  public getUserById = async (userId: string) => {
    const userRepo = getCustomRepository(UserRepo);

    return userRepo.findOne({ where: { id: userId } });
  };

  public async isExistedEmail(email: string) {
    const userRepo = getCustomRepository(UserRepo);

    const user = await userRepo.findOne({ where: { email } });

    if (user) {
      return true;
    }

    return false;
  }

  public async getUserByEmailAndPassword(email: string, password: string) {
    const userRepo = getCustomRepository(UserRepo);

    return userRepo.findOne({ email, password: encryptPassword(password) });
  }

  public async addUser(email: string, password: string) {
    const userRepo = getCustomRepository(UserRepo);

    const user: Partial<User> = {
      email,
      password: encryptPassword(password)
    };

    return userRepo.addUser(user);
  }
}

export default UserService;
