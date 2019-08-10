import { Context } from 'koa';
import { Service } from 'typedi';

import { AuthContext } from '../middlewares/userAuth.middleware';
import LibraryService from '../service/library.service';

@Service()
class LibraryController {
  constructor(private libraryService: LibraryService) {}

  public test = (context: Context) => {
    context.status = 200;
    context.body = 'Hello';
  };

  public getLibraryContents = async (context: AuthContext) => {
    const { id: userId } = context.token;
    const { offset = 0, limit = 10 } = context.query;

    const libraryContents = await this.libraryService.getLibraryContents(offset, limit, userId);

    context.status = 200;
    context.body = {
      code: 'SUCCESS',
      message: '성공',
      data: {
        libraryContents
      }
    };
  };
}

export default LibraryController;
