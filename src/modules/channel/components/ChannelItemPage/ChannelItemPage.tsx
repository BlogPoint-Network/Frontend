import { FC, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { greyColor, skyBlueColor } from '@constants';
import { Card, Flex, Image, Pagination, Text } from '@mantine/core';
import { ChannelDescription } from '@modules/channel/components/ChannelDescription/ChannelDescription.tsx';
import { useClearSubscribe } from '@modules/channel/hooks/useClearSubscribe.ts';
import { useGetChannelById } from '@modules/channel/hooks/useGetChannelById.ts';
import { useSetSubscribe } from '@modules/channel/hooks/useSetSubscribe.ts';
import { PostItem } from '@modules/posts';
import { usePosts } from '@modules/posts/hooks/usePosts.ts';
import { IconAccessible } from '@tabler/icons-react';
import { BlueButton, CommonFrame, Heading2, Heading4, List } from '@ui';

import { ProfileContext } from '../../../../app/context';

export const ChannelItemPage: FC = () => {
  const [activePage, setPage] = useState(1);

  const navigate = useNavigate();
  const { id } = useParams();
  const channelManager = useGetChannelById(Number(id)).data?.data.data;
  const posts = usePosts(Number(id), activePage);
  const isAdmin: boolean = false;
  // Состояние для отслеживания текста и стилей кнопки
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
          h="290px"
          m="15px 0px"
          w="80%"
          bd="1px solid black"
          id={'PopularChannelItem' + (channelManager?.id ?? '')}
          style={{
            minWidth: '700px',
            maxWidth: '900px',
            // width: '100%', // Чтобы она могла растягиваться до maxWidth
            display: 'flex',
            alignItems: 'start',
          }}
        >
          <Flex // картинка|текстовый блок
            w="100%"
            direction="row"
            gap="40px"
            // justify="space-between"
            h="100%"
          >
            <div style={{ width: '280px' }}>
              <Image
                h="100%"
                w="auto"
                ml="auto"
                mr="auto"
                style={{
                  // minWidth: '140px', // не работает
                  maxWidth: '280px',
                  border: '1px solid black',
                  borderRadius: '30px',
                }}
                src={'/src/app/assets/images/EmptyPng.png'}
              />
            </div>
            <Flex // Верхний блок|нижний блок
              direction="column"
              w="100%"
              justify="space-between"
              pos={'relative'}
            >
              <Flex // Заглавие|описание
                direction="column"
                gap="10px"
              >
                <Flex // Название|подписчики
                  justify="space-between"
                  gap="20px"
                >
                  <Heading2 lineClamp={1}>
                    {channelManager?.name ?? ''}
                  </Heading2>
                  <Flex // ИконкаПодписчик|Число
                    gap="10px"
                    align="center"
                  >
                    <IconAccessible
                      size="2.2rem"
                      stroke={2.5}
                      color="#3ec96f"
                    />
                    <Text size="1.2rem">
                      <i>{addSpacesToNumber(channelManager?.subsCount ?? 0)}</i>
                    </Text>
                  </Flex>
                </Flex>
                <Heading4 lineClamp={4}>
                  {channelManager?.description ?? ''}
                </Heading4>
              </Flex>
              <ChannelDescription
                channelName={channelManager?.name ?? ''}
                description={channelManager?.description ?? ''}
                subscriberNumber={channelManager?.subsCount ?? 0}
              />
              <div style={{ float: 'right' }}>
                <BlueButton
                  onClick={toggleSubscribe}
                  pos={'absolute'}
                  style={{
                    right: '0px',
                    bottom: '0px',
                    minWidth: '160px',
                    ...buttonStyle,
                  }}
                >
                  {isSubscribed ? 'Отписаться' : 'Подписаться'}
                </BlueButton>
                {isAdmin && (
                  <BlueButton
                    onClick={() => {}}
                    pos={'absolute'}
                    style={{ right: '0px', bottom: '0px', minWidth: '160px' }}
                  >
                    Редактировать
                  </BlueButton>
                )}
              </div>
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
          Создать пост
        </BlueButton>
        <List items={posts} renderItem={PostItem} />
        <Pagination value={activePage} onChange={setPage} total={10} />
      </Flex>
    </>
  );
};

function addSpacesToNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
