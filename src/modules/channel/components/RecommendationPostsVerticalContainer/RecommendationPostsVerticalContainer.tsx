import { Flex } from '@mantine/core';
import RecommendationPost from '@modules/channel/components/RecommendationPost/RecommendationPost.tsx';
import {
  recommendationsNewExamples
} from '@modules/channel/constants/recomendationNewExamples.ts';

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
      {recommendationsNewExamples.map(el => (
        <RecommendationPost
          id={el.id}
          channelName={el.channelName}
          channelIcon={el.channelIcon}
          mediaType={el.mediaType}
          mediaURL={el.mediaURL}
          tagList={el.tagList}
          title={el.title}
          text={el.text}
          time={el.time}
          likes={el.likes}
          dislikes={el.dislikes}
          views={el.views}
        />
      ))}
    </Flex>
  );
};
