import { PostService } from '@api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export function usePostDelete(channelId: number) {
  const navigate = useNavigate();
  const controller = useMutation({
    mutationFn: async (postId: number) => {
      return await PostService.deletePost(postId);
    },
    onSuccess: () => {
      navigate(`/channel/${channelId}`);
      console.log('Успешное удаление поста');
    },
    onError: error => {
      console.error('Ошибка при удалении поста:', error);
      alert('Не удалось удалить пост');
    },
  });
  return controller;
}
