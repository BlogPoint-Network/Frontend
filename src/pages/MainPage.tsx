import { useLanguage } from '@hooks/useLanguage.ts';
import { Container, Flex, Text } from '@mantine/core';
import { ChannelItem } from '@modules/channel/components/ChannelItem/ChannelItem.tsx';
// import { RecommendationsFeed } from '@modules/channel/components/RecommendationsFeed/RecommendationsFeed.tsx';
import { useGetPopularChannels } from '@modules/channel/hooks/useGetPopularChannels.ts';
import { CommonFrame, List, LogoMainPage } from '@ui';

export const MainPage = () => {
  const { l } = useLanguage();
  const popularChannels = useGetPopularChannels();

  return (
    <>
      <CommonFrame>
        <LogoMainPage />
        <Container id="recommendationPostsContainer">
          {/* Heading1 слишком широк на мобилках*/}
          {/*<Heading1 ta="center">{l.recommendations}</Heading1>*/}
          <Text fz={{ base: '40px', xs: '48px' }} ta="center" fw="600" pt="10px" pb="10px">
            {l.recommendations}
          </Text>
          {/*<RecommendationsFeed />*/}
        </Container>
        <Container id="popularChannelsContainer" mb="40px">
          {/* Heading1 слишком широк на мобилках*/}
          {/*<Heading1 ta="center" mb="40px">*/}
          {/*  {l.popularChannels}*/}
          {/*</Heading1>*/}
          <Text
            ta={'center'}
            fz={{ base: '40px', xs: '48px' }}
            fw="600"
            pt="10px"
            pb="10px"
            mb={'40px'}
          >
            {l.popularChannels}
          </Text>
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
