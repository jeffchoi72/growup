import { Service } from 'typedi';
import { getCustomRepository } from 'typeorm';

import User from '../database/entity/User';
import { LibraryContentRepo, LibraryRepo } from '../database/repository';

@Service()
class LibraryService {
  public getLibraryContents = async (offset: number, limit: number, userId: string) => {
    const libraryRepo = getCustomRepository(LibraryRepo);
    const libraryContentRepo = getCustomRepository(LibraryContentRepo);

    const library = await libraryRepo.findOne({ user: { id: userId } });

    const libraryContents = await libraryContentRepo.findAllByLibraryAndUserId(
      offset,
      limit,
      library
    );

    return libraryContents;
  };

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
