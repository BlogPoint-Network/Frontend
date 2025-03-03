import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

export const useProfileEditPsw = (
  oldPassword: string,
  newPassword: string,
) => {
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: () => UserService.editProfilePassword(oldPassword, newPassword),
  });

  return controller;
};
