import { Service } from 'typedi';
import { getCustomRepository } from 'typeorm';

import User from '../database/entity/User';
import { LibraryRepo } from '../database/repository';

@Service()
class LibraryService {
  public addLibrary = async (user: User) => {
    const libraryRepo = getCustomRepository(LibraryRepo);

    const library = await libraryRepo.save({
      title: '서재',
      description: '서재',
      user
    });

    return library;
  };
}

export default LibraryService;
