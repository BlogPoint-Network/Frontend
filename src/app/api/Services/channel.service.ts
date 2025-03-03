import { api } from '@api/instance.ts';
import { IChannel } from '@app-types';
import { AxiosResponse } from 'axios';

export class ChannelService {
  static async createChannelAuth(
    name: string,
    description: string,
  ): Promise<AxiosResponse<IChannel>> {
    return api.post('/createchannel', {
      name,
      description,
      token: localStorage.getItem('token'),
    });
  }

  static async getChannel(channelId: number): Promise<AxiosResponse<IChannel>> {
    return api.post(`/getChannel`, { channelId });
  }

  static async getUserChannels(): Promise<AxiosResponse<IChannel[]>> {
    return api.post('/getuserchannels', {
      token: localStorage.getItem('token'),
    });
  }

  static async getSubscription(): Promise<AxiosResponse<IChannel[]>> {
    return api.post('/getusersubscriptions', {
      token: localStorage.getItem('token'),
    });
  }

  static async editChannel(
    id: string,
    name: string,
    description: string,
  ): Promise<AxiosResponse<{ channel: IChannel }>> {
    return api.post('/editchannel', { id, name, description });
  }

  static async deleteChannel(
    id: string,
  ): Promise<AxiosResponse<{ channel: IChannel }>> {
    return api.post('/deletechannel', {
      channelId: id,
      token: localStorage.getItem('token'),
    });
  }
}
