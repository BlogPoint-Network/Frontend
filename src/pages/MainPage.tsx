import { Container, Flex } from '@mantine/core';
import { ChannelItem } from '@modules/channel/components/ChannelItem/ChannelItem.tsx';
import { RecommendationsFeed } from '@modules/channel/components/RecommendationsFeed/RecommendationsFeed.tsx';
import { popularChannelsExamples } from '@modules/channel/constants/popularChannelsExamples.ts';
import { CommonFrame, Heading1, List, LogoMainPage } from '@ui';

export const MainPage = () => {
  return (
    <>
      <CommonFrame>
        <LogoMainPage />
        <Container id="recommendationPostsContainer">
          <Heading1 ta="center" mb="40px">
            Рекомендации
          </Heading1>
          {/*<RecommendationsFeed />*/}
        </Container>
        <Container id="popularChannelsContainer" mb="40px">
          <Heading1 ta="center" mb="40px">
            Популярные каналы
          </Heading1>
          <Flex
            id="PopularChannelFeed"
            mt="20px"
            p="0"
            gap="30px"
            direction="column"
            w="100%"
          >
            <List items={popularChannelsExamples} renderItem={ChannelItem} />
          </Flex>
        </Container>
      </CommonFrame>
    </>
  );
};
