import { AuthService } from '@api';

export const useChannel = () => {
  const createChannel = async (
    name: string,
    description: string,
    channelAuthor: string,
  ) => {
    try {
      await AuthService.createChannelAuth(name, description, channelAuthor);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    createChannel,
  };
};
