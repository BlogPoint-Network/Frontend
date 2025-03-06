import { Container } from '@mantine/core';
import { RecommendationPostsVerticalContainer } from '@modules/channel';
import { ChannelsFeed } from '@modules/channel/components/ChannelsFeed/ChannelsFeed.tsx';
import { CommonFrame, Heading1 } from '@ui';

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
        <RecommendationPostsVerticalContainer />
      </Container>
    </CommonFrame>
  );
};
