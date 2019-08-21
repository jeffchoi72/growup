import AuthApi from './auh.api';
import PostApi from './post.api';

const postApi = new PostApi();
const authApi = new AuthApi();

export { postApi, authApi };
