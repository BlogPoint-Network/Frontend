import { Container, Flex } from '@mantine/core';
import PopularChannelItem from '@modules/channel/components/PopularChannelItem/PopularChannelItem.tsx';
import { popularChannels } from '@modules/channel/constants/popularChannelsStoppers.ts';
import { Heading1 } from '@ui';

export const MainPagePopularChannelsContainer = () => {
  return (
    <Container id="popularChannelsContainer">
      <Heading1 ta="center">Популярные каналы</Heading1>
      <Flex
        id="recommendationFeed"
        mt="20px"
        p='0'
        gap="30px"
        direction="column"
        w="100%"
      >
        {popularChannels.map(el => (
          <PopularChannelItem
            id={el.id}
            channelName={el.channelName}
            description={el.description}
            subscriberNumber={el.subscriberNumber}
            imageURL={el.imageURL}
          />
        ))}
      </Flex>
    </Container>
  );
};
