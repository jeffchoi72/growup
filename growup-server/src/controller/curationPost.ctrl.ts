import { Context } from 'koa';
import { Service } from 'typedi';

import { CurationPostService } from '../service';

@Service()
class CurationPostController {
  constructor(private curationPostService: CurationPostService) {}

  getPosts = async (context: Context) => {
    try {
      const { offset = 0, limit = 10 } = context.query;

      const posts = await this.curationPostService.getPosts(offset, limit);

      context.status = 200;
      context.body = {
        code: 'SUCCESS',
        message: '성공',
        data: {
          posts
        }
      };
    } catch (error) {
      context.status = 500;
      context.body = {
        code: 'SERVER_ERROR',
        message: '서버 에러',
        data: null
      };
    }
  };

  savePost = async (context: Context) => {
    try {
      const { posts } = context.request.body;

      const addedPosts = await this.curationPostService.addPosts(posts);

      context.status = 200;
      context.body = {
        code: 'SUCCESS',
        message: '성공',
        data: addedPosts
      };
    } catch (error) {
      context.status = 500;
      context.body = {
        code: 'SERVER_ERROR',
        message: '서버 에러',
        data: null
      };
    }
  };
}

export default CurationPostController;
