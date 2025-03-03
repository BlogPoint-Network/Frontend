import { PostService } from '@api';
import { useMutation } from '@tanstack/react-query';

interface DeletePostParams {
  postId: string;
  channelId: string;
}

export const usePostDelete = (onSuccess?: () => void) => {
  const controller = useMutation({
    mutationFn: async ({ postId, channelId }: DeletePostParams) => {
      return await PostService.deletePost(postId, channelId);
    },
    onSuccess: () => {
      if (onSuccess) onSuccess();
    },
    onError: error => {
      console.error('Ошибка при удалении поста:', error);
      alert('Не удалось удалить пост');
    },
  });
  return controller;
};
