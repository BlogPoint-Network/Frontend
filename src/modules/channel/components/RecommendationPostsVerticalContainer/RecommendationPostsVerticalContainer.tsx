import { Flex } from '@mantine/core';
import RecommendationPost from '@modules/channel/components/RecommendationPost/RecommendationPost.tsx';
import { recommendationsExamples } from '@modules/channel/constants/recomendationExamples.ts';

export const RecommendationPostsVerticalContainer = () => {
  return (
    <Flex
      id="RecommendationsFeed"
      mt="20px"
      p="0"
      gap="30px"
      direction="column"
      w="100%"
    >
      {recommendationsExamples.map(el => (
        <RecommendationPost
          id={el.id}
          title={el.title}
          text={el.text}
          channelName={el.channelName}
          mediaType={el.mediaType}
          mediaURL={el.mediaURL}
        />
      ))}
    </Flex>
  );
};
