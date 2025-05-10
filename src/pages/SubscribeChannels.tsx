import { Container, Flex } from '@mantine/core';
import { ChannelItem } from '@modules/channel/components/ChannelItem/ChannelItem.tsx';
import { ChannelsFeed } from '@modules/channel/components/ChannelsFeed/ChannelsFeed.tsx';
import { useGetSubscription } from '@modules/channel/hooks/useGetSubscription.ts';
import { CommonFrame, Heading1, List } from '@ui';
import { useLanguage } from '@hooks/useLanguage.ts';

export const SubscribeChannels = () => {
  const { l } = useLanguage();
  const subscribeChannels = useGetSubscription();
  console.log(subscribeChannels);

  return (
    <CommonFrame>
      <Container id="MySubscribeChannelsContainer" mb="40px">
        <ChannelsFeed />
        <Heading1 ta="center" mb="40px" mt={'10px'}>
          {l.subscriptions}
        </Heading1>
        <Flex
          id="RecommendationsFeed"
          mt="20px"
          p="0"
          gap="30px"
          direction="column"
          w="100%"
        >
          <List items={subscribeChannels} renderItem={ChannelItem} />
        </Flex>
      </Container>
    </CommonFrame>
  );
};
