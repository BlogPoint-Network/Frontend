import { UserService } from '@api';
import { useQuery } from '@tanstack/react-query';

export const useProfile = () => {
  const controller = useQuery({
    queryKey: ['user'],
    queryFn: () => UserService.infoUser(),
  });
  return controller;
};
