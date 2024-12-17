export const usePost = () => {
  const createPost = async (
    channelId: string,
    title: string,
    content: string | undefined,
    author: string,
    // images: Array<string[]> | null,
  ) => {
    try {
      console.log([channelId, title, content, author]);
      // await AuthService.createPostAuth(
      //   channelId,
      //   title,
      //   content,
      //   author,
      //   images,
      // );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createPost,
  };
};
