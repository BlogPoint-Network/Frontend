// import { useNavigate } from 'react-router-dom';
import { Flex } from '@mantine/core';
import PopularChannelItem from '@modules/channel/components/PopularChannelItem/PopularChannelItem.tsx';
import { channels } from '@modules/channel/constants/channelsStoppers.ts';
import { Heading1 } from '@ui/Text/Heading1.tsx';

export const ChannelsPageChannelsContainer = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Heading1 ta="center">Мои каналы</Heading1>
      <Flex id="ChannelsFeed" m="20px 0px" gap="30px" direction="column">
        {channels.map(el => (
          <PopularChannelItem
            id={el.id}
            channelName={el.channelName}
            description={el.description}
            subscriberNumber={el.subscriberNumber}
            imageURL={el.imageURL}
          />
        ))}
      </Flex>
    </>
  );
};
