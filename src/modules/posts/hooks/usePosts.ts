import { PostService } from '@api';
import { useQuery } from '@tanstack/react-query';

export const usePosts = (channelId: number, page: number) => {
  const controller = useQuery({
    queryKey: ['posts'],
    queryFn: () => PostService.getPosts(channelId, page),
  });
  return controller;
};
