import { useNavigate } from 'react-router-dom';
import { Button, Flex, Text } from '@mantine/core';
import { popularChannels } from '@modules/posts/constants/channelsExamples.ts';

export const MyChannelsExample = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Мои каналы для примера</h1>
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="column"
        wrap="wrap"
      >
        {popularChannels.map(channel => (
          <Flex
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="column"
            wrap="wrap"
          >
            <Text>{channel.channelName}</Text>
            <Text>{channel.description}</Text>
            <Button
              onClick={() => {
                localStorage.setItem('currentChannel', channel.channelName);
                navigate('../create-post');
              }}
            >
              Создать пост
            </Button>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
