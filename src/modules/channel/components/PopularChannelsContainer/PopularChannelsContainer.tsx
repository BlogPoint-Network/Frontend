import { ChannelsList } from '@modules/channel';
import { popularChannels } from '@modules/channel/constants/popularChannelsStoppers.ts';
import { Flex } from '@mantine/core';

export const PopularChannelsContainer = () => {
  return (
    <Flex
      id="recommendationFeed"
      mt="20px"
      p="0"
      gap="30px"
      direction="column"
      w="100%"
    >
      <ChannelsList channels={popularChannels} />
    </Flex>
  );
};
