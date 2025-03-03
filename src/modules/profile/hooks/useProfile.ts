import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';


export const useProfile = () => {
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: () => UserService.infoUser(),
    onSuccess: data => {
      console.log(data.data);
    },
  });
  return controller;
};
