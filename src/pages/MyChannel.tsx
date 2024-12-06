import { CommonFrame } from '@modules/channel';
import { ChannelPageChannelDescription } from '@modules/channel';
import { testChannelProps } from '@modules/channel/constants/testChannelProps.ts';
import { BlueButton } from '@ui';

const MyChannel = () => {
  return (
    <CommonFrame>
      <ChannelPageChannelDescription
        id={testChannelProps.id}
        channelName={testChannelProps.channelName}
        description={testChannelProps.description}
        subscriberNumber={testChannelProps.subscriberNumber}
        imageURL={testChannelProps.imageURL}
      />
      <BlueButton>Создать новую запись</BlueButton>
    </CommonFrame>
  );
};

export default MyChannel;
