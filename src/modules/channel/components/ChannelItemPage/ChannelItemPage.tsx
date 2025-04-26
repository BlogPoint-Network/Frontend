import { FC, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IChannel, IPost } from '@app-types';
import { greyColor, skyBlueColor } from '@constants';
import { Card, Flex, Image, Pagination } from '@mantine/core';
import { ChannelDescription } from '@modules/channel/components/ChannelDescription/ChannelDescription.tsx';
import { useChannelById } from '@modules/channel/hooks/useChannelById.ts';
import { usePosts } from '@modules/posts/hooks/usePosts.ts';
import {
  BlueButton,
  CommonFrame,
  Heading2,
  Heading4,
  RedButton,
  SubCount,
} from '@ui';

import { ProfileContext } from '../../../../app/context';

export const ChannelItemPage: FC = () => {
  const [channel, setChannel] = useState<IChannel | null>(null);
  const [posts, setPosts] = useState<IPost[] | []>([]);
  const [activePage, setPage] = useState(1);

  const navigate = useNavigate();
  const { id } = useParams();
  const channelManager = useChannelById(Number(id));

  useEffect(() => {
    const test = async () => {
      setChannel((await channelManager.data?.data) ?? null);
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

  const isOwner: boolean = true;
  const profileContext = useContext(ProfileContext);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscribe = () => {
    setIsSubscribed(prev => !prev);
  };

  const buttonStyle = isSubscribed
    ? { backgroundColor: greyColor, color: 'black' }
    : { backgroundColor: skyBlueColor, color: 'white' };

  return (
    <>
      <CommonFrame>
        <Card
          radius="md"
          m="15px 0px"
          bd="1px solid black"
          id={'PopularChannelItem' + (channel?.id ?? '')}
          style={{
            maxWidth: '800px',
          }}
        >
          <Flex // основной flex-контейнер
            direction={{ base: 'column', lg: 'row' }}
            gap="40px"
            h="100%"
            w="100%"
            justify="space-between"
          >
            {/* МАЛЫЕ ЭКРАНЫ */}
            <Flex // для скрытия
              direction="column"
              gap="10px"
              display={{ base: 'flex', lg: 'none' }}
            >
              <Flex // Название|подписчики
                justify="space-between"
                gap="20px"
              >
                <Heading2 lineClamp={1}>{channel?.name ?? ''}</Heading2>
                <SubCount
                  isJustifiedEnd={true}
                  subNumber={channel?.subsCount}
                />
              </Flex>
              <Heading4 lineClamp={4}>{channel?.description ?? ''}</Heading4>
            </Flex>
            {/* МАЛЫЕ ЭКРАНЫ */}

            {/* Изображение канала */}
            <Image
              h="280px"
              m="auto"
              w={{ base: '280px', xs: 'auto', lg: '280px' }}
              style={{
                maxWidth: '370px',
                minHeight: '280px',
                border: '1px solid black',
                borderRadius: '30px',
              }}
              src={'/src/app/assets/images/EmptyPng.png'}
            />

            <Flex // расположение кнопок и подписчиков
              direction="column"
              w="100%"
              justify="space-between"
              pos="relative"
            >
              {/* ШИРОКИЕ ЭКРАНЫ*/}
              <Flex // для скрытия
                direction="column"
                gap="10px"
                display={{ base: 'none', lg: 'flex' }}
              >
                <Flex // Название|подписчики
                  justify="space-between"
                  gap="20px"
                >
                  <Heading2 lineClamp={1}>{channel?.name ?? ''}</Heading2>
                  <SubCount
                    isJustifiedEnd={true}
                    subNumber={channel?.subsCount}
                  />
                </Flex>
                <Heading4 lineClamp={4}>{channel?.description ?? ''}</Heading4>
              </Flex>
              {/* ШИРОКИЕ ЭКРАНЫ*/}

              <Flex // нижние кнопки
                justify={{ base: 'center', lg: 'space-between' }}
                gap={{ base: '10px', xs: '60px' }}
                direction={{ base: 'column', xs: 'row' }}
              >
                <ChannelDescription
                  channelName={channel?.name ?? ''}
                  description={channel?.description ?? ''}
                  subscriberNumber={channel?.subsCount ?? 0}
                />
                {(profileContext?.user ??
                profileContext?.user?.id == channel?.ownerId) ? (
                  <RedButton
                    onClick={() => {
                      if (
                        window.confirm(
                          'Вы уверены, что хотите удалить свой канал?',
                        )
                      ) {
                        const handleDelete = () => {};
                        handleDelete();
                      }
                    }}
                  >
                    {(profileContext?.user &&
                      profileContext?.user?.id) ? profileContext?.user?.id: 'Не удалить'}
                  </RedButton>
                ) : (
                  <BlueButton onClick={handleSubscribe} style={buttonStyle}>
                    {isSubscribed ? 'Отписаться' : 'Подписаться'}
                  </BlueButton>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Card>
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
        <Pagination value={activePage} onChange={setPage} total={10} />
      </Flex>
    </>
  );
};
