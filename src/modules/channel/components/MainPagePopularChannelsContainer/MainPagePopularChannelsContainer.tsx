import { Container, Flex } from '@mantine/core';
import PopularChannelItem from '@modules/channel/components/PopularChannelItem/PopularChannelItem.tsx';
import { popularChannels } from '@modules/channel/constants/channelsStoppers.ts';

export const MainPagePopularChannelsContainer = () => {
  return (
    <Container id="popularChannelsContainer">
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '48px', fontWeight: 600 }}>
          Популярные каналы
        </span>
      </div>
      <Flex
        id="recommendationFeed"
        m="20px 0px"
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
