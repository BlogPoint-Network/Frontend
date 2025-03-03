import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

export const useProfileEditImg = (img: File) => {
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: () => UserService.editProfileImg(img),
  });

  return controller;
};
