import { PostService } from '@api';
import { useMutation } from '@tanstack/react-query';

interface DeletePostParams {
  postId: string;
  channelId: string;
}

export const usePostDelete = () => {
  const controller = useMutation({
    mutationFn: async ({ channelId, postId }: DeletePostParams) => {
      return await PostService.deletePost(String(channelId), String(postId));
    },
    onSuccess: () => {
      console.log('Успешное удаление поста');
    },
    onError: error => {
      console.error('Ошибка при удалении поста:', error);
      alert('Не удалось удалить пост');
    },
  });
  return controller;
};
