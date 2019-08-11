import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

import { LibraryRepo } from '.';
import { Library, LibraryContent } from '../entity';

@EntityRepository(LibraryContent)
class LibraryContentRepository extends Repository<LibraryContent> {
  public findAllByLibraryAndUserId = async (offset: number, limit: number, library: Library) => {
    return this.find({
      relations: ['curationPost'],
      where: { library },
      skip: offset,
      take: limit
    });
  };

  public isContentOwner = async (libraryContentId: string, userId: string) => {
    const libraryRepo = getCustomRepository(LibraryRepo);

    const libraryContent = await this.findOne({
      relations: ['library'],
      where: {
        id: libraryContentId
      }
    });

    if (!libraryContent) {
      throw new Error('Not selected libraryContent');
    }

    const library = await libraryRepo.findOne({
      id: libraryContent.library.id,
      user: { id: userId }
    });

    console.log('userId: ', userId);
    console.log('library: ', library);

    return !!library;
  };
}

export default LibraryContentRepository;
