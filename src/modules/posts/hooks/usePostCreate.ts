import { PostService } from '@api';
import { IPost } from '@app-types';
import { useMutation } from '@tanstack/react-query';

export const usePostCreate = () => {
  const controller = useMutation({
    mutationFn: async (newPost: Omit<IPost, 'postId'>) => {
      return await PostService.createPost(
        newPost.channelId,
        newPost.title,
        newPost.content,
        newPost.images,
        newPost.tags,
      );
    },
    onError: error => {
      console.error('Ошибка при создании поста:', error);
      alert('Не удалось создать пост');
    },
  });
  return controller;
};
