import { EntityRepository, Repository } from 'typeorm';

import { Library } from '../entity';

@EntityRepository(Library)
class LibraryRepository extends Repository<Library> {}

export default LibraryRepository;
