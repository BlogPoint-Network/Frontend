import { useEffect, useState } from 'react';
import { IChannel } from '@app-types';
import { useChannel } from '@hooks';
import { Flex } from '@mantine/core';
import { ChannelItem } from '@modules/channel/components/ChannelItem/ChannelItem.tsx';
import { CommonFrame, Heading1, List } from '@ui';

export const SubscribeChannels = () => {
  const channelManager = useChannel();
  const [channels, setChannels] = useState<IChannel[]>([]);

  useEffect(() => {
    const test = async () => {
      setChannels((await channelManager.getSubscription()) ?? []);
    };
    test();
  }, []);

  return (
    <CommonFrame>
      <Heading1 ta="center">Мои подписки</Heading1>
      <Flex id="ChannelsFeed" m="20px 0px" gap="30px" direction="column">
        <List items={channels} renderItem={ChannelItem} />
      </Flex>
    </CommonFrame>
  );
};
