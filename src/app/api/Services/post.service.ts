import { api } from '@api/instance.ts';
import { IContentImage, IMedia, IPost, ITag } from '@app-types';
import { AxiosResponse } from 'axios';

export class PostService {
  static async createPost(
    channelId: string,
    previewImage: IMedia,
    title: string,
    content: string,
    contentImages: IContentImage[],
    tags: ITag[],
    mediaFiles: IMedia[],
  ): Promise<AxiosResponse<{ post: IPost }>> {
    return api.post('/createpost', {
      channelId,
      previewImage,
      title,
      content,
      contentImages,
      tags,
      mediaFiles,
      token: localStorage.getItem('token'),
    });
  }

  static async editPost(
    channelId: string,
    previewImage: IMedia,
    title: string,
    content: string,
    contentImages: IContentImage[],
    tags: ITag[],
    mediaFiles: IMedia[],
  ): Promise<AxiosResponse<{ post: IPost }>> {
    return api.patch('/editpost', {
      channelId,
      previewImage,
      title,
      content,
      contentImages,
      tags,
      mediaFiles,
    });
  }

  static async deletePost(
    channelId: string,
    postId: string,
  ): Promise<AxiosResponse<{ post: IPost }>> {
    return api.delete('/deletepost', { data: { channelId, postId } });
  }

  static async getPosts(
    channelId: number,
    page: number,
  ): Promise<AxiosResponse<IPost[]>> {
    return api.get(`/getposts/?channelId=${channelId}&page=${page}`);
  }

  static async getPostById(
    postId: number,
    channelId: number,
  ): Promise<AxiosResponse<IPost>> {
    return api.get(`/getpost/?postId=${postId}&channelId=${channelId}`);
  }
}
