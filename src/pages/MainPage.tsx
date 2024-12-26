import { Container } from '@mantine/core';
import { PopularChannelsContainer } from '@modules/channel';
import { RecommendationPostsContainer } from '@modules/channel';
import { CommonFrame, Heading1, LogoMainPage } from '@ui';

export const MainPage = () => {
  return (
    <>
      <CommonFrame>
        <LogoMainPage />
        <Container id="popularChannelsContainer">
          <Heading1 ta="center">Популярные каналы</Heading1>
          <RecommendationPostsContainer />
        </Container>
        <Container id="RecommendationPostsContainer" mb="40px">
          <Heading1 id="RecommendationPostsContainer" ta="center" mb="40px">
            Рекомендации
          </Heading1>
          <PopularChannelsContainer />
        </Container>
      </CommonFrame>
    </>
  );
};
