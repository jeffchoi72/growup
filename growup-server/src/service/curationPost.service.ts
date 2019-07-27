import { Service } from 'typedi';
import { DeepPartial, getCustomRepository } from 'typeorm';

import { Author, Category } from '../database/entity';
import { CurationPostRepo } from '../database/repository';

interface CurationPost {
  postURL?: string;
  thumbnail?: string;
  title?: string;
  content?: string;
  categories?: DeepPartial<Category>[];
  author?: DeepPartial<Author>;
}

@Service()
class CurationPostService {
  async getPosts(offset: number, limit: number) {
    const curationPostRepo = getCustomRepository(CurationPostRepo);

    const posts = await curationPostRepo.findAll(offset, limit);

    return posts;
  }

  async addPosts(posts: CurationPost[]) {
    const curationPostRepo = getCustomRepository(CurationPostRepo);

    const addedPosts = await Promise.all(
      posts.map(async post => {
        console.log(`${post.title} 데이터 저장`);
        return curationPostRepo.save(post);
      })
    );

    return addedPosts;
  }
}

export default CurationPostService;
