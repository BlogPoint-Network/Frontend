import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IChannel, IPost } from '@app-types';
import { useChannel } from '@hooks';
import { Flex, Pagination } from '@mantine/core';
import { ChannelPageChannelDescription } from '@modules/channel';
import { PostItem } from '@modules/posts/components/PostItem/PostItem.tsx';
import { usePosts } from '@modules/posts/hooks/usePosts.ts';
import { BlueButton, CommonFrame, List } from '@ui';

export const ChannelItemPage: FC = () => {
  const [channel, setChannel] = useState<IChannel | null>(null);
  const [posts, setPosts] = useState<IPost[] | []>([]);
  const [activePage, setPage] = useState(1);

  const channelManager = useChannel();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const test = async () => {
      setChannel((await channelManager.getChannel(Number(id))) ?? null);
    };
    test();
  }, []);
  const postController = usePosts(Number(id), activePage);

  useEffect(() => {
    const test = async () => {
      setPosts(postController.data?.data ?? []);
    };
    test();
  }, [activePage]);

  return (
    <>
      <CommonFrame>
        <ChannelPageChannelDescription
          id={channel?.id ?? 0}
          name={channel?.name ?? ''}
          description={channel?.description ?? ''}
          subsCount={channel?.subsCount ?? 0}
          ownerId={0}
        />
      </CommonFrame>
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="nowrap"
      >
        <BlueButton onClick={() => navigate(`/channel/${id + ''}/create-post`)}>
          Создать пост
        </BlueButton>
        <List items={posts} renderItem={PostItem} />
        <Pagination value={activePage} onChange={setPage} total={10} />
      </Flex>
    </>
  );
};
