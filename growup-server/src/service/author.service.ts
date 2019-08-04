import { Service } from 'typedi';
import { getCustomRepository } from 'typeorm';

import { AuthorRepo } from '../database/repository';

@Service()
class AuthorService {
  public getAuthor = async (authorId: string) => {
    const authorRepo = getCustomRepository(AuthorRepo);

    return authorRepo.findOne({ where: { id: authorId } });
  };
}

export default AuthorService;
