import { EntityRepository, Repository } from 'typeorm';

import { CurationPost } from '../entity';

export interface CurationPostFilter {
  author?: string;
}

@EntityRepository(CurationPost)
class CurationPostRepository extends Repository<CurationPost> {
  public findAll = async (offset: number, limit: number, filter?: CurationPostFilter) => {
    const posts = await this.find({
      relations: ['author', 'categories'],
      where: { ...filter },
      skip: offset,
      take: limit
    });

    return posts;
  };
}

export default CurationPostRepository;
