import * as Router from 'koa-router';
import Container from 'typedi';

import { UserCtrl } from '../controller';

const router = new Router();
const ctrl = Container.get(UserCtrl);

router.get('/', ctrl.getMyProfile);
router.patch('/profileImage', ctrl.updateMyProfileImage);
router.patch('/name', ctrl.updateMyProfileName);

export default router;
