import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

export const useProfileEditImg = () => {
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: (img: File) => UserService.editProfileImg(img),
  });

  return controller;
};
