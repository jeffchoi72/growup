import { EntityRepository, Repository } from 'typeorm';

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
}

export default LibraryContentRepository;
