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
  postUrl: string;
  author: AuthorType;
  categories: CategoryType[];
}

class PostApi {
  public getPosts = async () => {
    return baseAxios.get("/curation-posts", {
      params: {
        offset: 0,
        limit: 5
      }
    });
  };
}

export default PostApi;
