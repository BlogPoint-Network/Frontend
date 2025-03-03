import { UserService } from '@api';
import { IUser } from '@app-types';
import { useMutation } from '@tanstack/react-query';

export const useProfileLogout = (setUser: (user: IUser | null) => void) => {
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: () => UserService.logoutUser(),
    onSuccess: () => {
      setUser(null);
    },
  });

  return controller;
};
