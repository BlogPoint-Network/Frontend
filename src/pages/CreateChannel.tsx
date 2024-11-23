// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChannelCreateChannel, ChannelNotLogged } from '@modules/channel';
import { testChannelProps } from '@modules/channel/constants/testChannelProps.ts';

// import { ProfileContext } from '../app/context';

const CreateChannel = () => {
  const navigate = useNavigate();

  // const profile = useContext(ProfileContext);

  // Если пользователь не авторизован
  // if (profile?.user != undefined) {
  //   return <ChannelNotLogged />;
  // }

  // Если пользователь авторизован, но у него нет канала
  // if (channel.channel == undefined) {
  //   return <ChannelCreateChannel />;
  // }

  // Если у пользователя есть канал
  // return <ChannelMyChannel />;

  const isLogged: boolean = true;
  const haveChannel: boolean = false;

  // Если пользователь не авторизован
  if (!isLogged) {
    return <ChannelNotLogged />;
  }

  // Если пользователь авторизован, но у него нет канала
  if (!haveChannel) {
    return <ChannelCreateChannel />;
  }

  // Если у пользователя есть канал
  navigate('./my-channel', {
    state: { testChannelProps },
  });
};

export default CreateChannel;
