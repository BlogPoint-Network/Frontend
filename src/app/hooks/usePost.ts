import { AuthService } from '@api';

export const usePost = () => {
  const createPost = async (
    channelId: string,
    title: string,
    content: string,
  ) => {
    try {
      await AuthService.createPostAuth(channelId, title, content);
    } catch (error) {
      console.log(error);
    }
  };

  const getPosts = async (channelId: number, page: number) => {
    try {
      const response = await AuthService.getPosts(channelId, page);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async (postId: number) => {
    try {
      const response = await AuthService.getPost(postId);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createPost,
    getPosts,
    getPost,
  };
};
