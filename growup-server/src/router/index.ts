import { Context } from 'koa';
import * as Router from 'koa-router';
import Container from 'typedi';

import { CurationPostCtrl } from '../controller';

const rootRouter: Router = new Router();
const curationPostCtrl = Container.get(CurationPostCtrl);

rootRouter.get('/test', curationPostCtrl.getPosts);

rootRouter.all('*', (ctx: Context) => {
  ctx.status = 404;
  ctx.body = '존재하지 않는 API 입니다';
});

export default rootRouter;
