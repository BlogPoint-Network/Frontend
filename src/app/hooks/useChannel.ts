import { AuthService } from '@api';

export const useChannel = () => {
  const createChannel = async (name: string, description: string) => {
    try {
      const response = await AuthService.createChannelAuth(name, description);
      return response.data.id;
    } catch (e) {
      console.log(e);
    }
  };

  const getChannel = async (id: number) => {
    try {
      const response = await AuthService.getChannelAuth(id);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteChannel = async (id: string) => {
    try {
      await AuthService.deleteChannelAuth(id);
    } catch (e) {
      console.log(e);
    }
  };

  const getSubscription = async () => {
    try {
      const response = await AuthService.getSubscriptionAuth();
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getUserChannels = async () => {
    try {
      const response = await AuthService.getUserChannelsAuth();
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    createChannel,
    getChannel,
    getSubscription,
    getUserChannels,
    deleteChannel,
  };
};
