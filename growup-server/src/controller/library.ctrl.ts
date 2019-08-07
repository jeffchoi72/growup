import { Context } from 'koa';
import { Service } from 'typedi';

@Service()
class LibraryController {
  public test = (context: Context) => {
    context.status = 200;
    context.body = 'Hello';
  };
}

export default LibraryController;
