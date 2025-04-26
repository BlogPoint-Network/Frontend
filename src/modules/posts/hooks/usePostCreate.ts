import { PostService } from '@api';
import { useMutation } from '@tanstack/react-query';
import { IContentImage, IMedia } from '@app-types';

interface CreatePostParams {
  channelId: string;
  content: string;
  tags: number[];
  title: string;
  previewImage: IMedia;
  contentImages: IContentImage[];
  mediaFiles: IMedia[];
}

export function usePostCreate() {
  const controller = useMutation({
    mutationFn: async (newPost: CreatePostParams) => {
      return await PostService.createPost(
        newPost.channelId,
        newPost.previewImage,
        newPost.title,
        newPost.content,
        newPost.contentImages,
        newPost.tags,
        newPost.mediaFiles,
      );
    },
    onError: error => {
      console.error('Ошибка при создании поста:', error.message);
      alert('Не удалось создать пост');
    },
  });
  return controller;
}
