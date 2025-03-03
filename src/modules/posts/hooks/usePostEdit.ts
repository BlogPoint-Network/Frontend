import { PostService } from '@api';
import { IPost } from '@app-types';
import { useMutation } from '@tanstack/react-query';

export const usePostEdit = (onSuccess?: () => void) => {
  const controller = useMutation({
    mutationFn: async (modifiedPost: Omit<IPost, 'postId'>) => {
      return await PostService.editPost(
        modifiedPost.channelId,
        modifiedPost.title,
        modifiedPost.content,
        modifiedPost.images,
        modifiedPost.tags,
      );
    },
    onSuccess: () => {
      if (onSuccess) onSuccess();
    },
    onError: error => {
      console.error('Ошибка при создании поста:', error);
      alert('Не удалось создать пост');
    },
  });
  return controller;
};
