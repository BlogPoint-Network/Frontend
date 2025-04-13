import { ChannelService } from '@api';
import { useQuery } from '@tanstack/react-query';

export function useChannelUsers() {
  const controller = useQuery({
    queryKey: ['userChannels'],
    queryFn: () => ChannelService.getUserChannels(),
  });
  return controller;
}
