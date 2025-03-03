import { api } from '@api/instance.ts';
import { IImage, IPost } from '@app-types';
import { AxiosResponse } from 'axios';

export class PostService {
  static async createPost(
    channelId: string,
    title: string,
    content: string,
    images: IImage[],
    tags: string[],
  ): Promise<AxiosResponse<{ post: IPost }>> {
    return api.post('/createpost', {
      channelId,
      title,
      content,
      images,
      tags,
      token: localStorage.getItem('token'),
    });
  }

  static async editPost(
    channelId: string,
    title: string,
    content: string,
    images: IImage[],
    tags: string[],
  ): Promise<AxiosResponse<{ post: IPost }>> {
    return api.post('/editpost', { channelId, title, content, images, tags });
  }

  static async deletePost(
    channelId: string,
    id: string,
  ): Promise<AxiosResponse<{ post: IPost }>> {
    return api.post('/deletepost', { channelId, id });
  }

  static async getPosts(
    channelId: number,
    page: number,
  ): Promise<AxiosResponse<IPost[]>> {
    return api.post(`/getposts/?channelId=${channelId}&page=${page}`);
  }

  static async getPostById(
    postId: number,
    channelId: number,
  ): Promise<AxiosResponse<IPost>> {
    return api.post(`/getpost/?postId=${postId}&channelId=${channelId}`);
  }
}
