import { PostService } from '@api';
import { IMedia } from '@app-types';
import { useMutation } from '@tanstack/react-query';

interface EditPostParams {
  postId: number;
  previewImage: IMedia;
  channelLogo: IMedia;
  title: string;
  content: string;
  contentImages: IMedia[];
  tags: number[];
  mediaFiles: IMedia[];
}

export function usePostEdit() {
  const controller = useMutation({
    mutationFn: async (modifiedPost: EditPostParams) => {
      return await PostService.editPost(
        modifiedPost.postId,
        modifiedPost.previewImage,
        modifiedPost.channelLogo,
        modifiedPost.title,
        modifiedPost.content,
        modifiedPost.contentImages,
        modifiedPost.tags,
        modifiedPost.mediaFiles,
      );
    },
    onError: error => {
      console.error('Ошибка при создании поста:', error);
      alert('Не удалось создать пост');
    },
  });
  return controller;
}
