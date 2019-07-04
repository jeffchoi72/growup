import { Service } from 'typedi';
import { getCustomRepository } from 'typeorm';

import { CurationPostRepo } from '../database/repository';

@Service()
class CurationPostService {
  async getPosts(offset: number, limit: number) {
    const curationPostRepo = getCustomRepository(CurationPostRepo);

    const posts = await curationPostRepo.findAll(offset, limit);

    return posts;
  }
}

export default CurationPostService;
