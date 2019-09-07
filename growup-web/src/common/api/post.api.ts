import { baseAxios } from './axios';

export interface AuthorType {
  id: string;
  name: string;
  iconUrl: string;
}

export interface CategoryType {
  id: string;
  name: string;
}

export interface CurationPostType {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  postURL: string;
  author: AuthorType;
  categories: CategoryType[];
}

export interface Author {
  id: string;
  name: string;
  iconUrl: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  postURL: string;
  author: Author;
  categories: CategoryType[];
}

export interface PostListResponse {
  code: string;
  message: string;
  data: {
    posts: Post[];
  };
}

export interface GET_POSTS_PARAMS {
  limit?: number;
  offset?: number;
}

class PostApi {
  public getPosts = async ({ limit, offset }: GET_POSTS_PARAMS) => {
    return baseAxios.get("/curation-posts", {
      params: {
        offset,
        limit
      }
    });
  };
}

export default PostApi;
