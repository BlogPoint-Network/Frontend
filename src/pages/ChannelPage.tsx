import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IChannel } from '@app-types';
import { useChannel } from '@hooks';
import { ChannelPageChannelDescription } from '@modules/channel';
import { BlueButton, CommonFrame } from '@ui';

interface ChannelPageParams {
  id: string;
}

export const ChannelPage: FC = () => {
  const [currentChannel, setCurrentChannel] = useState<IChannel | null>(null);
  const channel = useChannel();
  const params = useParams<ChannelPageParams>();

  useEffect(() => {
    channel.getChannel(params.id).then(channelData => {
      setCurrentChannel(channelData);
    });
  }, []);

  return (
    <CommonFrame>
      <ChannelPageChannelDescription
        id={currentChannel.id}
        channelName={currentChannel.name}
        description={currentChannel.description}
        subsCount={currentChannel.subsCount}
      />
      <BlueButton>Создать новую запись</BlueButton>
    </CommonFrame>
  );
};
