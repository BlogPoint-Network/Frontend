import { Flex } from '@mantine/core';
import { PopularChannelsList } from '@modules/channel/components/PopularChannelsList/PopularChannelsList.tsx';
import { popularChannelsExamples } from '@modules/channel/constants/popularChannelsExamples.ts';

export const PopularChannelsContainer = () => {
  return (
    <Flex
      id="PopularChannelFeed"
      mt="20px"
      p="0"
      gap="30px"
      direction="column"
      w="100%"
    >
      <PopularChannelsList channels={popularChannelsExamples} />
    </Flex>
  );
};
