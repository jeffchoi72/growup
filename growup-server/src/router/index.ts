import { Context } from 'koa';
import * as Router from 'koa-router';

import authRouter from './auth.router';
import authorRouter from './author.router';
import curationPostRouter from './curationPost.router';

const rootRouter: Router = new Router();

rootRouter.use('/auth', authRouter.routes());
rootRouter.use('/curation-posts', curationPostRouter.routes());
rootRouter.use('/authors', authorRouter.routes());

rootRouter.all('*', (ctx: Context) => {
  ctx.status = 404;
  ctx.body = '존재하지 않는 API 입니다';
});

export default rootRouter;
