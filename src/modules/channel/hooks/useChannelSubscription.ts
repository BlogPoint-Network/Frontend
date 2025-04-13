import { ChannelService } from '@api';
import { useQuery } from '@tanstack/react-query';

export function useChannelSubscription() {
  const controller = useQuery({
    queryKey: ['subscriptionChannels'],
    queryFn: () => ChannelService.getSubscription(),
  });
  return controller;
}
