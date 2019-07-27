import { baseAxios } from './axios';

export const addPost = async (posts: any) => {
  try {
    const response = await baseAxios.post("/curation-posts", {
      posts
    });
    console.log("response: ", response);

    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
