import { api } from '@api/instance.ts';
import { IUser } from '@app-types';
import { AxiosResponse } from 'axios';

export class UserService {
  static async loginUser(
    login: string,
    password: string,
  ): Promise<AxiosResponse<{ user: IUser } & { token: string }>> {
    console.log(`получил ${localStorage.getItem('token')}`)
    return api.post('/login', { login, password });
  }

  static async registerUser(
    email: string,
    login: string,
    password: string,
  ): Promise<AxiosResponse<{ user: IUser }>> {
    return api.post('/register', { login, email, password });
  }

  static async logoutUser(): Promise<void> {
    return api.post('/logout');
  }

  static async deleteUser(): Promise<AxiosResponse<IUser>> {
    return api.post('/deleteprofile', { token: localStorage.getItem('token') });
  }

  static async infoUser(): Promise<AxiosResponse<IUser>> {
    console.log(`установил ${localStorage.getItem('token')}`);
    return api.post('/user', { token: localStorage.getItem('token') });
  }

  static async editProfileInfo(
    email: string,
    login: string,
  ): Promise<AxiosResponse<{ user: IUser }>> {
    return api.post('/editprofile', {
      login,
      email,
      token: localStorage.getItem('token'),
    });
  }

  static async editProfileImg(
    img: File | null,
  ): Promise<AxiosResponse<{ user: IUser }>> {
    return api.post('/editprofile', { img });
  }

  static async editProfilePassword(
    oldPassword: string,
    newPassword: string,
  ): Promise<AxiosResponse<{ user: IUser }>> {
    return api.post('/editprofile', { oldPassword, newPassword });
  }
}
