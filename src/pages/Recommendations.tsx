import { Container } from '@mantine/core';
import { RecommendationPostsVerticalContainer } from '@modules/channel';
import { TagsFeed } from '@modules/channel/components/TagsFeed/TagsFeed.tsx';
import { CommonFrame, Heading1 } from '@ui';

export const Recommendations = () => {
  return (
    <>
      <CommonFrame>
        <Container id="RecommendationsContainer" mb="40px">
          <TagsFeed />
          <Heading1 ta="center" mb="40px" mt={'10px'}>
            Рекомендации
          </Heading1>
          <RecommendationPostsVerticalContainer />
        </Container>
      </CommonFrame>
    </>
  );
};
