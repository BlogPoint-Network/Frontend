  // import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { IChannel } from '@app-types';
import { Flex } from '@mantine/core';
import { ChannelItem } from '@modules/channel/components/ChannelItem/ChannelItem.tsx';
import { channelsExamples } from '@modules/channel/constants/channelsExamples.ts';
import { BlueButton, CommonFrame, Heading1, List } from '@ui';

export const UserChannels = () => {
  const navigate = useNavigate();
  // const channelManager = useChannel();
  // const [channels, setChannels] = useState<IChannel[]>(channelsExamples);
  //
  // useEffect(() => {
  //   const test = async () => {
  //     setChannels((await channelManager.getUserChannels()) ?? channelsExamples);
  //   };
  //   test();
  // }, []);

  return (
    <CommonFrame>
      <Heading1 ta="center">Мои каналы</Heading1>
      <Flex id="ChannelsFeed" m="20px 0px" gap="30px" direction="column">
        <Flex gap={'30px'} direction="column">
          <List items={channelsExamples} renderItem={ChannelItem} />
        </Flex>
      </Flex>
      <BlueButton onClick={() => navigate('/create-channel')}>
        Создать новый канал
      </BlueButton>
    </CommonFrame>
  );
};
