import { EntityRepository, Repository } from 'typeorm';

import { CurationPost } from '../entity';

@EntityRepository(CurationPost)
class CurationPostRepository extends Repository<CurationPost> {
  findAll = async (offset: number, limit: number) => {
    const posts = await this.find({
      relations: ['author', 'categories'],
      skip: offset,
      take: limit
    });

    return posts;
  };
}

export default CurationPostRepository;
