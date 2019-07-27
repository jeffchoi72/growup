import * as Router from 'koa-router';
import Container from 'typedi';

import { CurationPostCtrl } from '../controller';

const router = new Router();
const ctrl = Container.get(CurationPostCtrl);

router.get('/', ctrl.getPosts);
router.post('/', ctrl.savePost);

export default router;
