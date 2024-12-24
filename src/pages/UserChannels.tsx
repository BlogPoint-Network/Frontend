import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IChannel } from '@app-types';
import { useChannel } from '@hooks';
import { Flex } from '@mantine/core';
import { ChannelsList } from '@modules/channel';
import { BlueButton, CommonFrame, Heading1 } from '@ui';

export const UserChannels = () => {
  const navigate = useNavigate();
  const channelManager = useChannel();
  const [channels, setChannels] = useState<IChannel[]>([]);

  useEffect(() => {
    const test = async () => {
      setChannels((await channelManager.getUserChannels()) ?? []);
    };
    test();
  }, []);

  return (
    <CommonFrame>
      <Heading1 ta="center">Мои каналы</Heading1>
      <Flex id="ChannelsFeed" m="20px 0px" gap="30px" direction="column">
        <ChannelsList channels={channels} />
      </Flex>
      <BlueButton onClick={() => navigate('/create-channel')}>
        Создать новый канал
      </BlueButton>
    </CommonFrame>
  );
};
