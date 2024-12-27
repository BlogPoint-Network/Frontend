import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IChannel } from '@app-types';
import { useChannel } from '@hooks';
import { ChannelPageChannelDescription } from '@modules/channel';
import { testChannelProps } from '@modules/channel/constants/testChannelProps.ts';
import { CommonFrame } from '@ui';

export const ChannelItemPage: FC = () => {
  const [channel, setChannel] = useState<IChannel | null>(null);
  const channelManager = useChannel();
  const { id } = useParams();

  useEffect(() => {
    const test = async () => {
      setChannel((await channelManager.getChannel(Number(id))) ?? null);
    };
    test();
  }, []);

  return (
    <CommonFrame>
      <ChannelPageChannelDescription
        // id={channel?.id ?? 0}
        // name={channel?.name ?? ''}
        // description={channel?.description ?? ''}
        // subsCount={channel?.subsCount ?? 0}
        // ownerId={0}
        id={testChannelProps.id}
        name={testChannelProps.name}
        description={testChannelProps.description}
        subsCount={testChannelProps.subsCount}
        ownerId={testChannelProps.ownerId}
        imageURL={testChannelProps.imageURL}
      />
    </CommonFrame>
  );
};
