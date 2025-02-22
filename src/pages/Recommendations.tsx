import { Container } from '@mantine/core';
import {
  RecommendationPostsVerticalContainer,
} from '@modules/channel';
import { CommonFrame, Heading1 } from '@ui';

export const Recommendations = () => {
  return (
    <>
      <CommonFrame>
        <Container id="RecommendationsContainer" mb="40px">
          <Heading1 ta="center" mb="40px">
            Рекомендации
          </Heading1>
          <RecommendationPostsVerticalContainer />
        </Container>
      </CommonFrame>
    </>
  );
};
