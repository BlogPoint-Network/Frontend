import { api } from '@api/instance.ts';
import { IMedia, IPost } from '@app-types';
import { AxiosResponse } from 'axios';

export class PostService {
  static async createPost(
    channelId: number,
    content: string,
    tags: number[],
    title: string,
    previewImageId: number,
    postImages: number[],
    postFiles: number[],
  ): Promise<AxiosResponse<{ data: IPost } & { massage: string }>> {
    return api.post('/createPost', {
      channelId,
      previewImageId,
      title,
      content,
      postImages,
      tags,
      postFiles,
      token: localStorage.getItem('token'),
    });
  }

  static async editPost(
    postId: number,
    previewImage: IMedia,
    channelLogo: IMedia,
    title: string,
    content: string,
    contentImages: IMedia[],
    tags: number[],
    mediaFiles: IMedia[],
  ): Promise<AxiosResponse<{ data: IPost } & { message: string }>> {
    return api.patch('/editPost', {
      postId,
      channelLogo,
      previewImage,
      title,
      content,
      contentImages,
      tags,
      mediaFiles,
    });
  }

  static async deletePost(
    id: number,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.delete(`/deletePost/${id}`);
  }

  static async getPosts(
    channelId: number,
    page: number,
  ): Promise<AxiosResponse<{ data: IPost[] } & { message: string }>> {
    return api.get(`/getPosts/${channelId}?page=${page}`);
  }

  static async getPostById(
    postId: number,
  ): Promise<AxiosResponse<{ data: IPost } & { message: string }>> {
    return api.get(`/getPost/${postId}`);
  }

  static async setReaction(
    postId: number,
    reaction: string,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.post(`/setReaction/`, { postId, reaction });
  }
}
