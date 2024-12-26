import { FC } from 'react';
import { IChannel } from '@app-types';
import { ChannelItem } from '@modules/channel/components/ChannelItem/ChannelItem.tsx';

interface ChannelsListProps {
  channels: IChannel[];
}

export const ChannelsList: FC<ChannelsListProps> = ({ channels }) => {
  return (
    <>
      {channels.map(channel => (
        <ChannelItem
          id={channel.id}
          ownerId={channel.ownerId}
          name={channel.name}
          description={channel.description}
          subsCount={channel.subsCount}
          imageURL={channel.imageURL}
        />
      ))}
    </>
  );
};
