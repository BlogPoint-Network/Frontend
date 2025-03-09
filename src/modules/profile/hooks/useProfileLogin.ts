import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

import { ProfileContext } from '../../../app/context';

export const useProfileLogin = () => {
  const profile = useContext(ProfileContext);
  const navigate = useNavigate();
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ login, password }: { login: string; password: string }) =>
      UserService.loginUser(login, password),
    onSuccess: data => {
      localStorage.setItem('token', data.data.token);
      profile?.setUser(data.data.user);
      navigate('/profile');
    },
    onError: error => {
      console.log(error);
      navigate('/');
    },
  });

  return controller;
};
