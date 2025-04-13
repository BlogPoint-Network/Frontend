import { UserService } from '@api';
import { IUser } from '@app-types/IUser';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useProfile = () => {
  return useQuery<IUser, Error>({
    queryKey: ['user'],
    queryFn: async () => {
      const response: AxiosResponse<IUser> = await UserService.infoUser();
      return response.data; // Возвращаем только user, без AxiosResponse
    },
  });
}
