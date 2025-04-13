import { api } from '@api/instance.ts';
import { IChannel } from '@app-types';
import { AxiosResponse } from 'axios';

export class ChannelService {
  static async createChannel(
    name: string,
    category: string,
    description: string,
    ownerId: string,
    imageLogo: string | null,
    imageBanner: string | null,
  ): Promise<AxiosResponse<IChannel>> {
    return api.get('/createchannel', {
      params: {
        name,
        category,
        description,
        ownerId,
        imageLogo,
        imageBanner,
      },
    });
  }

  static async getChannel(channelId: number): Promise<AxiosResponse<IChannel>> {
    return api.get(`/getChannel`, { params: channelId });
  }

  static async getUserChannels(): Promise<AxiosResponse<IChannel[]>> {
    return api.get('/getuserchannels');
  }

  static async getSubscription(): Promise<AxiosResponse<IChannel[]>> {
    return api.get('/getusersubscriptions');
  }

  static async getPopularChannels(): Promise<AxiosResponse<IChannel[]>> {
    return api.get('/getPopularChannels');
  }

  static async subscribeChannel() {
    return api.post('/subscribechannel');
  }

  static async unSubscribeChannel() {
    return api.delete('/unsubscribechannel');
  }

  static async editChannel(
    id: string,
    name: string,
    category: string,
    description: string,
    imageLogo: string | null,
    imageBanner: string | null,
  ): Promise<AxiosResponse<{ channel: IChannel }>> {
    return api.patch('/editchannel', {
      id,
      name,
      category,
      description,
      imageLogo,
      imageBanner,
    });
  }

  static async deleteChannel(
    id: string,
  ): Promise<AxiosResponse<{ channel: IChannel }>> {
    return api.delete('/deletechannel', {
      data: { channelId: id },
    });
  }
}
