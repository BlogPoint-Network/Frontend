import { Container, Flex } from '@mantine/core';
import { ChannelsFeed } from '@modules/channel/components/ChannelsFeed/ChannelsFeed.tsx';
import { recommendationsExamples } from '@modules/channel/constants/recomendationExamples.ts';
import PostItem from '@modules/posts/components/PostItem/PostItem.tsx';
import { CommonFrame, Heading1, List } from '@ui';

export const SubscribeChannels = () => {
  // const channelManager = useChannel();
  // const [channels, setChannels] = useState<IChannel[]>(testChannelProps);
  //
  // useEffect(() => {
  //   const test = async () => {
  //     setChannels((await channelManager.getSubscription()) ?? testChannelProps);
  //   };
  //   test();
  // }, []);

  return (
    <CommonFrame>
      <Container id="MySubscribeChannelsContainer" mb="40px">
        <ChannelsFeed />
        <Heading1 ta="center" mb="40px" mt={'10px'}>
          Мои подписки
        </Heading1>
        <Flex
          id="RecommendationsFeed"
          mt="20px"
          p="0"
          gap="30px"
          direction="column"
          w="100%"
        >
          <List items={recommendationsExamples} renderItem={PostItem} />
        </Flex>
      </Container>
    </CommonFrame>
  );
};
