import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

import { ProfileContext } from '../context';

export const useProfileLogout = () => {
  const profile = useContext(ProfileContext);
  const navigate = useNavigate();
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: () => UserService.logoutUser(),
    onSuccess: () => {
      localStorage.clear();
      profile?.setUser(null);
      navigate('/');
    },
  });

  return controller;
};
