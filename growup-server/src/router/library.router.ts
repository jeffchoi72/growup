import * as Router from 'koa-router';
import Container from 'typedi';

import { LibraryCtrl } from '../controller';

const router = new Router();
const ctrl = Container.get(LibraryCtrl);

router.get('/me/contents', ctrl.getLibraryContents);
router.post('/me/contents', ctrl.addLibraryContent);
router.delete('/me/contents/:contentId', ctrl.test);

export default router;
