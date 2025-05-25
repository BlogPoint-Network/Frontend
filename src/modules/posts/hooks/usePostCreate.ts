import { useNavigate } from 'react-router-dom';
import { PostService } from '@api';
import { useMutation } from '@tanstack/react-query';

interface CreatePostParams {
  channelId: number;
  content: string;
  tags: number[];
  title: string;
  previewImageId: number;
  postImages: number[];
  postFiles: number[];
}

export function usePostCreate() {
  const navigate = useNavigate();
  const controller = useMutation({
    mutationFn: async (newPost: CreatePostParams) => {
      return await PostService.createPost(
        newPost.channelId,
        newPost.content,
        newPost.tags,
        newPost.postFiles,
        newPost.previewImageId,
        newPost.title,
        newPost.postImages,
      );
    },
    onSuccess: data => {
      navigate(
        `/channel/${data.data.data.channelId + ''}/post/${data.data.data.id + ''}`,
      );
    },
    onError: error => {
      console.error('Ошибка при создании поста:', error.message);
      alert('Не удалось создать пост');
    },
  });
  return controller;
}
