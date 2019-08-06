import { EntityRepository, Repository } from 'typeorm';

import { LibraryContent } from '../entity';

@EntityRepository(LibraryContent)
class LibraryContentRepository extends Repository<LibraryContent> {}

export default LibraryContentRepository;
