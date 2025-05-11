import { FC, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { greyColor, skyBlueColor } from '@constants';
import { Card, Flex, Image, Pagination } from '@mantine/core';
import { ChannelDescription } from '@modules/channel/components/ChannelDescription/ChannelDescription.tsx';
import { useClearSubscribe } from '@modules/channel/hooks/useClearSubscribe.ts';
import { useGetChannelById } from '@modules/channel/hooks/useGetChannelById.ts';
import { useSetSubscribe } from '@modules/channel/hooks/useSetSubscribe.ts';
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
import { useLanguage } from '@hooks/useLanguage.ts';

export const ChannelItemPage: FC = () => {
  const { l } = useLanguage();
  const [activePage, setPage] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const channelManager = useGetChannelById(Number(id)).data?.data.data;
  const posts = usePosts(Number(id), activePage);

  const [isSubscribed, setIsSubscribed] = useState(false);
  const setSubscribe = useSetSubscribe();
  const clearSubscribe = useClearSubscribe();
  const profile = useContext(ProfileContext);

  // Динамическое применение стилей
  const buttonStyle = isSubscribed
    ? { backgroundColor: greyColor, color: 'black' }
    : { backgroundColor: skyBlueColor, color: 'white' };

  const toggleSubscribe = () => {
    const userId = profile?.user?.id ?? 0;
    if (isSubscribed) {
      clearSubscribe.mutate(userId);
      setIsSubscribed(false);
    } else {
      setSubscribe.mutate(userId);
      setIsSubscribed(true);
    }
  };

  return (
    <>
      <CommonFrame>
        <Card
          radius="md"
          m="15px 0px"
          bd="1px solid black"
          id={'PopularChannelItem' + (channelManager?.id ?? '')}
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
                <Heading2 lineClamp={1}>{channelManager?.name ?? ''}</Heading2>
                <SubCount
                  isJustifiedEnd={true}
                  subNumber={channelManager?.subsCount}
                />
              </Flex>
              <Heading4 lineClamp={4}>
                {channelManager?.description ?? ''}
              </Heading4>
            </Flex>

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
                  <Heading2 lineClamp={1}>
                    {channelManager?.name ?? ''}
                  </Heading2>
                  <SubCount
                    isJustifiedEnd={true}
                    subNumber={channelManager?.subsCount}
                  />
                </Flex>
                <Heading4 lineClamp={4}>
                  {channelManager?.description ?? ''}
                </Heading4>
              </Flex>
              <Flex // нижние кнопки
                justify={{ base: 'center', lg: 'space-between' }}
                gap={{ base: '10px', xs: '60px' }}
                direction={{ base: 'column', xs: 'row' }}
              >
                <ChannelDescription
                  channelName={channelManager?.name ?? ''}
                  description={channelManager?.description ?? ''}
                  subscriberNumber={channelManager?.subsCount ?? 0}
                />
                {(profile?.user ??
                profile?.user?.id == channelManager?.ownerId) ? (
                  <RedButton
                    onClick={() => {
                      if (
                        window.confirm(l.areYouSureDeleteChannel)
                      ) {
                        const handleDelete = () => {};
                        handleDelete();
                      }
                    }}
                  >
                    {l.btnDelete}
                  </RedButton>
                ) : (
                  <BlueButton onClick={toggleSubscribe} style={buttonStyle}>
                    {isSubscribed ? l.btnSubscribe : l.btnUnsubscribe}
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
        <BlueButton onClick={() => navigate(`/channel/${id}/create-post`)}>
          {l.btnCreatePost}
        </BlueButton>
        {/*<List items={posts} renderItem={PostItem} />*/}
        <Pagination value={activePage} onChange={setPage} total={10} />
      </Flex>
    </>
  );
};
