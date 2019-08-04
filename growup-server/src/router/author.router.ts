import * as Router from 'koa-router';
import Container from 'typedi';

import { AuthorCtrl } from '../controller';

const router = new Router();
const ctrl = Container.get(AuthorCtrl);

router.get('/:authorId', ctrl.getAuthor);

export default router;
