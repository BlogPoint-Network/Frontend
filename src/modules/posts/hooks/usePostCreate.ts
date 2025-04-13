import { PostService } from '@api';
import { useMutation } from '@tanstack/react-query';
import { IContentImage, IMedia, ITag } from '@app-types';

interface CreatePostParams {
  channelId: string;
  previewImage: IMedia;
  title: string;
  content: string;
  contentImages: IContentImage[];
  tags: ITag[];
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
      console.error('Ошибка при создании поста:', error);
      alert('Не удалось создать пост');
    },
  });
  return controller;
}
