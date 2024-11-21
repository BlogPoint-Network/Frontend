import { AxiosResponse } from 'axios';
import { IUser } from '@app-types';
import { api } from '@api/instance.ts';

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

  static async changeProfileAuth(
    email: string,
    login: string,
    password: string,
  ): Promise<AxiosResponse<{ user: IUser }>> {
    return api.post('/changeprofile', { login, email, password });
  }
}
