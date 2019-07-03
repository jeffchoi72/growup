import { Context } from 'koa';
import { Service } from 'typedi';

@Service()
class CurationPostController {
  async getPosts(context: Context) {
    // 페이지네이션이 가능해야함
    // 나머지는 서비스 에서

    context.status = 200;
    context.body = {
      code: 'SUCCESS',
      message: '성공',
      data: null
    };
  }
}

export default CurationPostController;
