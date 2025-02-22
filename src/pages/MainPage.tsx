import { Container } from '@mantine/core';
import { PopularChannelsContainer } from '@modules/channel';
import { RecommendationPostsHorizontalContainer } from '@modules/channel/components/RecommendationPostsHorizontalContainer/RecommendationPostsHorizontalContainer.tsx';
import { CommonFrame, Heading1, LogoMainPage } from '@ui';

export const MainPage = () => {
  return (
    <>
      <CommonFrame>
        <LogoMainPage />
        <Container id="recommendationPostsContainer">
          <Heading1 ta="center" mb="40px">
            Рекомендации
          </Heading1>
          <RecommendationPostsHorizontalContainer />
        </Container>
        <Container id="popularChannelsContainer" mb="40px">
          <Heading1 ta="center" mb="40px">
            Популярные каналы
          </Heading1>
          <PopularChannelsContainer />
        </Container>
      </CommonFrame>
    </>
  );
};
