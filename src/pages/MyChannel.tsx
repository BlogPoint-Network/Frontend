import { skyBlueColor } from '@constants';
import { Text } from '@mantine/core';
import { CommonFrame } from '@modules/channel';
import { ChannelMyChannelDescription } from '@modules/channel';
import { testChannelProps } from '@modules/channel/constants/testChannelProps.ts';
import { LongButton } from '@ui/Button';

const MyChannel = () => {
  return (
    <CommonFrame>
      <ChannelMyChannelDescription
        id={testChannelProps.id}
        channelName={testChannelProps.channelName}
        description={testChannelProps.description}
        subscriberNumber={testChannelProps.subscriberNumber}
        imageURL={testChannelProps.imageURL}
      />
      <LongButton bg={skyBlueColor}>
        <Text size={'lg'}>Создать новую запись</Text>
      </LongButton>
    </CommonFrame>
  );
};

export default MyChannel;
