import { Context } from 'koa';
import { Service } from 'typedi';

import AuthorService from '../service/author.service';

@Service()
class AuthorController {
  constructor(private authorService: AuthorService) {}

  public getAuthor = async (context: Context) => {
    try {
      const { authorId } = context.params;

      const author = await this.authorService.getAuthor(authorId);

      if (!author) {
        context.status = 404;
        context.body = {
          code: 'NOT_FOUND',
          message: '작성자가 조회되지 않습니다',
          data: null
        };

        return;
      }

      context.status = 200;
      context.body = {
        code: 'SUCCESS',
        message: '성공',
        data: {
          author
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
}

export default AuthorController;
