import { api } from '@api/instance.ts';
import { IChannel, IPost, IUser } from '@app-types';
import { AxiosResponse } from 'axios';

export class AuthService {
  static async loginUserAuth(
    login: string,
    password: string,
  ): Promise<AxiosResponse<{ user: IUser } & { token: string }>> {
    return api.post('/login', { login, password });
  }

  static async registerUserAuth(
    email: string,
    login: string,
    password: string,
  ): Promise<AxiosResponse<{ user: IUser }>> {
    return api.post('/register', { login, email, password });
  }

  static async logoutUserAuth(): Promise<void> {
    return api.post('/logout');
  }

  static async infoUserAuth(): Promise<AxiosResponse<IUser>> {
    return api.post('/user', { token: localStorage.getItem('token') });
  }

  static async editProfileInfoAuth(
    email: string,
    login: string,
  ): Promise<AxiosResponse<{ user: IUser }>> {
    return api.post('/editprofile', { login, email });
  }

  static async editProfileImgAuth(
    img: File | null,
  ): Promise<AxiosResponse<{ user: IUser }>> {
    return api.post('/editprofile', { img });
  }

  static async editProfilePasswordAuth(
    oldPassword: string,
    newPassword: string,
  ): Promise<AxiosResponse<{ user: IUser }>> {
    return api.post('/editprofile', { oldPassword, newPassword });
  }

  static async createChannelAuth(
    name: string,
    description: string,
  ): Promise<AxiosResponse<{ channel: IChannel }>> {
    return api.post('/createchannel', { name, description });
  }

  static async editChannelAuth(
    id: string,
    name: string,
    description: string,
  ): Promise<AxiosResponse<{ channel: IChannel }>> {
    return api.post('/editchannel', { id, name, description });
  }

  static async deleteChannelAuth(
    id: string,
  ): Promise<AxiosResponse<{ channel: IChannel }>> {
    return api.post('/deletechannel', { id });
  }

  static async createPostAuth(
    channelId: string,
    title: string,
    content: string,
    author: string,
    // images: Array<string[]>,
  ): Promise<AxiosResponse<{ post: IPost }>> {
    return api.post('/createpost', {
      channelId,
      title,
      content,
      author,
      // images,
    });
  }

  static async editPostAuth(
    channelId: string,
    title: string,
    content: string,
    images: Array<string[]>,
  ): Promise<AxiosResponse<{ post: IPost }>> {
    return api.post('/editpost', { channelId, title, content, images });
  }

  static async deletePost(
    channelId: string,
    id: string,
  ): Promise<AxiosResponse<{ post: IPost }>> {
    return api.post('/deletepost', { channelId, id });
  }
}
