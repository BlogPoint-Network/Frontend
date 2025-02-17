import { FC } from 'react';
import { IChannel } from '@app-types';
import PopularChannelItem from '@modules/channel/components/PopularChannelItem/PopularChannelItem.tsx';

interface ChannelsListProps {
  channels: IChannel[];
}

export const PopularChannelsList: FC<ChannelsListProps> = ({ channels }) => {
  return (
    <>
      {channels.map(channel => (
        <PopularChannelItem
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
