import { CommonFrame } from '@modules/channel';
import { ChannelsPageChannelsContainer } from '@modules/channel/components/ChannelsPageChannelsContainer/ChannelsPageChannelsContainer.tsx';
import { ChannelsPageCreateContainer } from '@modules/channel/components/ChannelsPageCreateContainer/ChannelsPageCreateContainer.tsx';

export const MyChannels = () => {
  return (
    <CommonFrame>
      <ChannelsPageChannelsContainer />
      <ChannelsPageCreateContainer />
    </CommonFrame>
  );
};

