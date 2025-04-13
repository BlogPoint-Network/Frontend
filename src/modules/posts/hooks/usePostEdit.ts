import { PostService } from '@api';
import { IImage, ITag } from '@app-types';
import { useMutation } from '@tanstack/react-query';

interface EditPostParams {
  channelId: string;
  previewImage: string;
  title: string;
  content: string;
  images: IImage[];
  tagList: ITag[];
}

export function usePostEdit() {
  const controller = useMutation({
    mutationFn: async (modifiedPost: EditPostParams) => {
      return await PostService.editPost(
        modifiedPost.channelId,
        modifiedPost.previewImage,
        modifiedPost.title,
        modifiedPost.content,
        modifiedPost.images,
        modifiedPost.tagList,
      );
    },
    onError: error => {
      console.error('Ошибка при создании поста:', error);
      alert('Не удалось создать пост');
    },
  });
  return controller;
}
