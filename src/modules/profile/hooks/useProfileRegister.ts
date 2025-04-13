import { useNavigate } from 'react-router-dom';
import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

export const useProfileRegister = () => {
  const navigate = useNavigate();
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: ({
      login,
      email,
      password,
    }: {
      email: string;
      login: string;
      password: string;
    }) => UserService.registerUser(email, login, password),
    onSuccess: () => {
      navigate('/login');
    },
    onError: error => {
      console.log(error);
    },
  });

  return controller;
};
