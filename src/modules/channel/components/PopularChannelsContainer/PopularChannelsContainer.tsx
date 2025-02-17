import { Flex } from '@mantine/core';
import { PopularChannelsList } from '@modules/channel/components/PopularChannelsList/PopularChannelsList.tsx';
import { popularChannels } from '@modules/channel/constants/popularChannelsStoppers.ts';

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
      <PopularChannelsList channels={popularChannels} />
    </Flex>
  );
};
