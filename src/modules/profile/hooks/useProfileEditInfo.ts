import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

export const useProfileEditInfo = (email: string, login: string) => {
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: () => UserService.editProfileInfo(email, login),
  });

  return controller;
};
