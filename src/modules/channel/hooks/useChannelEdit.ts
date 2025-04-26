import { ChannelService } from '@api';
import { IMedia } from '@app-types';
import { useMutation } from '@tanstack/react-query';

interface ChannelEditParams {
  channelId: number;
  name: string;
  categoryId: number;
  description: string;
  imageLogo: IMedia | null;
}

export function useChannelEdit() {
  const controller = useMutation({
    mutationFn: async (modifiedChannel: ChannelEditParams) => {
      return await ChannelService.editChannel(
        modifiedChannel.channelId,
        modifiedChannel.categoryId,
        modifiedChannel.description,
        modifiedChannel.name,
        modifiedChannel.imageLogo,
      );
    },
    onError: error => {
      console.error('Ошибка при изменении:', error);
      alert('Не удалось изменить канал');
    },
  });
  return controller;
}
