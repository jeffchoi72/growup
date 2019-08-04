import { EntityRepository, Repository } from 'typeorm';

import { Author } from '../entity';

@EntityRepository(Author)
class AuthorRepository extends Repository<Author> {}

export default AuthorRepository;
