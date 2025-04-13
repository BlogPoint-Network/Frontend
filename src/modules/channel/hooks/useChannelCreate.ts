import { ChannelService } from '@api';
import { useMutation } from '@tanstack/react-query';

interface CreateChannelParams {
  name: string;
  category: string;
  description: string;
  ownerId: string;
  imageLogo: string | null;
  imageBanner: string | null;
}

export function useChannelCreate() {
  const controller = useMutation({
    mutationFn: async (newChannel: CreateChannelParams) => {
      return await ChannelService.createChannel(
        newChannel.name,
        newChannel.category,
        newChannel.ownerId,
        newChannel.ownerId,
        newChannel.imageLogo,
        newChannel.imageBanner,
      );
    },
    onError: error => {
      console.error('Ошибка при создании канала', error);
      alert('Не удалось создать канал');
    },
  });
  return controller;
}
