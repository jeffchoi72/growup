import { EntityRepository, Repository } from 'typeorm';

import User from '../entity/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async addUser(user: Partial<User>) {
    const newUser = await this.save({
      ...user
    });

    return newUser;
  }
}

export default UserRepository;
