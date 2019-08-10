import { Context } from 'koa';
import { Service } from 'typedi';

@Service()
class LibraryController {
  public test = (context: Context) => {
    context.status = 200;
    context.body = 'Hello';
  };

  public getLibraries = async (context: Context) => {
    context.status = 200;
    context.body = {
      code: 'SUCCESS',
      message: '성공',
      data: null
    };
  };
}

export default LibraryController;
