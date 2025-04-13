import { api } from '@api/instance.ts';
import { IUser } from '@app-types';
import { AxiosResponse } from 'axios';

export class UserService {
  static async loginUser(
    login: string,
    password: string,
  ): Promise<AxiosResponse<{ user: IUser } & { token: string }>> {
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
    return api.delete('/deleteprofile');
  }

  static async infoUser(): Promise<AxiosResponse<IUser>> {
    return api.get('/user');
  }

  static async editProfileInfo(
    email: string,
    login: string,
  ): Promise<AxiosResponse<{ user: IUser }>> {
    return api.patch('/editprofile', {
      login,
      email,
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

  static async requestEmailVerification() {
    return api.post('/requestemailverification');
  }

  static async verifyEmail(data: { code: string }) {
    return api.post('/verifyemail', data);
  }
}
