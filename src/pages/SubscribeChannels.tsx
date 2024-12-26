import { useEffect, useState } from 'react';
import { IChannel } from '@app-types';
//import { useChannel } from '@hooks';
import { Flex } from '@mantine/core';
import { ChannelsList } from '@modules/channel';
import { testChannelProps } from '@modules/channel/constants/testChannelProps.ts';
import { CommonFrame, Heading1 } from '@ui';

export const SubscribeChannels = () => {
  //const channelManager = useChannel();
  const [channels, setChannels] = useState<IChannel[]>(testChannelProps);

  // useEffect(() => {
  //   const test = async () => {
  //     setChannels((await channelManager.getSubscription()) ?? channelsExample);
  //   };
  //   test();
  // }, []);

  return (
    <CommonFrame>
      <Heading1 ta="center">Мои подписки</Heading1>
      <Flex id="ChannelsFeed" m="20px 0px" gap="30px" direction="column">
        <ChannelsList channels={channels} />
      </Flex>
    </CommonFrame>
  );
};
