import { useNavigate } from 'react-router-dom';
import { ChannelService } from '@api';
import { useMutation } from '@tanstack/react-query';

export function useChannelDelete() {
  const navigate = useNavigate();
  const controller = useMutation({
    mutationFn: async (id: string) => {
      return await ChannelService.deleteChannel(id);
    },
    onSuccess: () => {
      console.log('Успешное удаление');
      navigate('/user-channels');
    },
  });
  return controller;
}
