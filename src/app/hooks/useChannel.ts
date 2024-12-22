import { AuthService } from '@api';

export const useChannel = () => {
  const createChannel = async (name: string, description: string) => {
    try {
      const data = await AuthService.createChannelAuth(name, description);
      console.log(`ответ: ${data}`);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    createChannel,
  };
};
