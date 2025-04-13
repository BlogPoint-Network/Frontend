import { FileService } from '@api/Services/file.service.ts';
import { useMutation } from '@tanstack/react-query';

export function useUploadFile() {
  const controller = useMutation({
    mutationFn: async (file: File | null) => {
      return await FileService.upload(file);
    },
    onSuccess: data => {
      return data;
    },
    onError: error => {
      console.error(error);
    },
  });
  return controller;
}
