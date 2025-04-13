import { PostService } from '@api';
import { useQuery } from '@tanstack/react-query';

export function usePostById(channelId: number, postId: number) {
  const controller = useQuery({
    queryKey: ['post', channelId, postId],
    queryFn: () => PostService.getPostById(channelId, postId),
  });
  return controller;
}
