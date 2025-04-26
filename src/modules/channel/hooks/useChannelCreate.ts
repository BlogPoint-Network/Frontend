import { useNavigate } from 'react-router-dom';
import { ChannelService } from '@api';
import { IMedia } from '@app-types';
import { useMutation } from '@tanstack/react-query';

interface CreateChannelParams {
  name: string;
  description: string;
  category: number;
  imageLogo: IMedia;
}

export function useChannelCreate() {
  const navigate = useNavigate();
  const controller = useMutation({
    mutationFn: async (newChannel: CreateChannelParams) => {
      return await ChannelService.createChannel(
        newChannel.name,
        newChannel.category,
        newChannel.description,
        newChannel.imageLogo,
      );
    },
    onSuccess: data => {
      navigate(`/channel/${data.data.data.id}`);
    },
    onError: error => {
      console.error('Ошибка при создании канала', error);
      alert('Не удалось создать канал');
    },
  });
  return controller;
}
