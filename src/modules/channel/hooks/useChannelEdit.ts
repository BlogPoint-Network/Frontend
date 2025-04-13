import { ChannelService } from '@api';
import { useMutation } from '@tanstack/react-query';

interface ChannelEditParams {
  id: string;
  name: string;
  category: string;
  description: string;
  imageLogo: string | null;
  imageBanner: string | null;
}

export function useChannelEdit() {
  const controller = useMutation({
    mutationFn: async (modifiedChannel: ChannelEditParams) => {
      return await ChannelService.editChannel(
        modifiedChannel.id,
        modifiedChannel.name,
        modifiedChannel.category,
        modifiedChannel.description,
        modifiedChannel.imageLogo,
        modifiedChannel.imageBanner,
      );
    },
    onError: error => {
      console.error('Ошибка при изменении:', error);
      alert('Не удалось изменить канал');
    },
  });
  return controller;
}
