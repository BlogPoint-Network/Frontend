import { Container, Flex } from '@mantine/core';
import { ChannelItem } from '@modules/channel/components/ChannelItem/ChannelItem.tsx';
// import { RecommendationsFeed } from '@modules/channel/components/RecommendationsFeed/RecommendationsFeed.tsx';
import { useGetPopularChannels } from '@modules/channel/hooks/useGetPopularChannels.ts';
import { CommonFrame, Heading1, List, LogoMainPage } from '@ui';

export const MainPage = () => {
  const popularChannels = useGetPopularChannels();
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
            <List items={popularChannels} renderItem={ChannelItem} />
          </Flex>
        </Container>
      </CommonFrame>
    </>
  );
};
