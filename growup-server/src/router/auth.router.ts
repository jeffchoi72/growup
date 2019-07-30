import * as Router from 'koa-router';
import Container from 'typedi';

import { AuthCtrl } from '../controller';


const router = new Router();
const ctrl = Container.get(AuthCtrl);

router.post('/signin/email', ctrl.emailSignIn);
router.post('/signup/email', ctrl.emailSignUp);

export default router;
