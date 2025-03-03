import { UserService } from '@api';
import { IUser } from '@app-types';
import { useMutation } from '@tanstack/react-query';

export const useProfileDelete = (setUser: (user: IUser | null) => void) => {
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: () => UserService.deleteUser(),
    onSuccess: () => {
      setUser(null);
    },
  });

  return controller;
};
