import { ChannelService } from '@api';

export const useChannel = () => {
  const createChannel = async (name: string, description: string) => {
    try {
      const response = await ChannelService.createChannelAuth(
        name,
        description,
      );
      return response.data.id;
    } catch (e) {
      console.log(e);
    }
  };

  const getChannel = async (id: number) => {
    try {
      const response = await ChannelService.getChannel(id);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteChannel = async (id: string) => {
    try {
      await ChannelService.deleteChannel(id);
    } catch (e) {
      console.log(e);
    }
  };

  const getSubscription = async () => {
    try {
      const response = await ChannelService.getSubscription();
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getUserChannels = async () => {
    try {
      const response = await ChannelService.getUserChannels();
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
