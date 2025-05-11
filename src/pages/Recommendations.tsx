import { useLanguage } from '@hooks/useLanguage.ts';
import { Container, Flex } from '@mantine/core';
import { TagsFeed } from '@modules/channel/components/TagsFeed/TagsFeed.tsx';
import { CommonFrame, Heading1 } from '@ui';

export const Recommendations = () => {
  const { l } = useLanguage();

  return (
    <>
      <CommonFrame>
        <Container id="RecommendationsContainer" mb="40px">
          <TagsFeed />
          <Heading1 ta="center" mb="40px" mt={'10px'}>
            {l.recommendations}
          </Heading1>
          <Flex
            id="RecommendationsFeed"
            mt="20px"
            p="0"
            gap="30px"
            direction="column"
            w="100%"
          >
            {/*<List items={recommendationsExamples} renderItem={PostItem} />*/}
          </Flex>
        </Container>
      </CommonFrame>
    </>
  );
};
