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

  public addLibraryContent = async (curationPostId: string, userId: string) => {
    const libraryRepo = getCustomRepository(LibraryRepo);
    const libraryContentRepo = getCustomRepository(LibraryContentRepo);

    const library = await libraryRepo.findOne({ user: { id: userId } });

    const libraryContent = await libraryContentRepo.save({
      library,
      curationPost: { id: curationPostId }
    });

    return libraryContent;
  };

  public isExistedLibraryContentByUser = async (curationPostId: string, userId: string) => {
    const libraryRepo = getCustomRepository(LibraryRepo);
    const libraryContentRepo = getCustomRepository(LibraryContentRepo);

    const library = await libraryRepo.findOne({ user: { id: userId } });

    const libraryContent = await libraryContentRepo.findOne({
      library,
      curationPost: { id: curationPostId }
    });

    if (libraryContent) {
      return true;
    }

    return false;
  };

  public isLibraryContentOwner = async (libraryContentId: string, userId: string) => {
    const libraryContentRepo = getCustomRepository(LibraryContentRepo);
    return libraryContentRepo.isContentOwner(libraryContentId, userId);
  };

  public deleteLibraryContent = async (librarycontentId: string) => {
    const libraryContentRepo = getCustomRepository(LibraryContentRepo);

    return libraryContentRepo.delete({ id: librarycontentId });
  };
}

export default LibraryService;
