import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

export function useRequestPasswordReset() {
  const controller = useMutation({
    mutationFn: () => UserService.requestDeletionVerification(),
  });
  return controller;
}
