import AuthApi from './auh.api';
import MeApi from './me.api';
import PostApi from './post.api';

const postApi = new PostApi();
const authApi = new AuthApi();
const meApi = new MeApi();

export { postApi, authApi, meApi };
