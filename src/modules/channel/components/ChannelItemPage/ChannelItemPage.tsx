import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IChannel, IPost } from '@app-types';
import { greyColor, skyBlueColor } from '@constants';
import { Card, Flex, Image, Pagination, Text } from '@mantine/core';
import { ChannelDescription } from '@modules/channel/components/ChannelDescription/ChannelDescription.tsx';
import { useChannelById } from '@modules/channel/hooks/useChannelById.ts';
import { usePosts } from '@modules/posts/hooks/usePosts.ts';
import { IconAccessible } from '@tabler/icons-react';
import { BlueButton, CommonFrame, Heading2, Heading4, RedButton } from '@ui';
import { addSpacesToNumber } from '@utils';

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

  // для кнопок в описании

  const isOwner: boolean = false;
  // Состояние для отслеживания текста и стилей кнопки
  const [isSubscribed, setIsSubscribed] = useState(false);
  // });
  const handleSubscribe = () => {
    setIsSubscribed(prev => !prev); // Переключение состояния
  };
  // Динамическое применение стилей
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
            // width: '100%', // Чтобы она могла растягиваться до maxWidth
          }}
        >
          <Flex // картинка|текстовый блок
            w="100%"
            direction={{ base: 'column', lg: 'row' }}
            gap="40px"
            // justify="space-between"
            h="100%"
          >
            {/* УЗКИЕ ЭКРАНЫ */}
            <Flex // Заглавие|описание
              direction="column"
              gap="10px"
              display={{ base: 'flex', lg: 'none' }}
            >
              <Flex // Название|подписчики
                justify="space-between"
                gap="20px"
              >
                <Heading2 lineClamp={1}>
                  {channel?.name ?? 'Тестовый канал канал канал канал канал'}
                </Heading2>

                {/* ШИРОКИЕ ЭКРАНЫ */}
                <Flex // ИконкаПодписчик|Число
                  gap="10px"
                  align="center"
                  justify={'flex-end'}
                >
                  <IconAccessible size="2.2rem" stroke={2.5} color="#3ec96f" />
                  <Text size="1.2rem">
                    <i>{addSpacesToNumber(channel?.subsCount ?? 0)}</i>
                  </Text>
                </Flex>
              </Flex>
              <Heading4 lineClamp={4}>
                {channel?.description ??
                  'Тестовое описание описание описание описание описание описание'}
              </Heading4>
            </Flex>

            <Image
              h={'280px'}
              m={'auto'}
              w={{ base: '280px', xs: 'auto', lg: '280px' }}
              style={{
                maxWidth: '370px',
                minHeight: '280px',
                border: '1px solid black',
                borderRadius: '30px',
              }}
              src={'/src/app/assets/images/EmptyPng.png'}
            />
            <Flex // Верхний блок|нижний блок
              direction="column"
              w="100%"
              justify="space-between"
              pos={'relative'}
            >
              <Flex // Заглавие|описание
                direction="column"
                gap="10px"
                display={{ base: 'none', lg: 'flex' }}
              >
                <Flex // Название|подписчики
                  justify="space-between"
                  gap="20px"
                >
                  <Heading2 lineClamp={1}>
                    {channel?.name ?? 'Тестовый канал канал канал канал канал'}
                  </Heading2>

                  {/* ШИРОКИЕ ЭКРАНЫ */}
                  <Flex // ИконкаПодписчик|Число
                    gap="10px"
                    align="center"
                    justify={'flex-end'}
                  >
                    <IconAccessible
                      size="2.2rem"
                      stroke={2.5}
                      color="#3ec96f"
                    />
                    <Text size="1.2rem">
                      <i>{addSpacesToNumber(channel?.subsCount ?? 0)}</i>
                    </Text>
                  </Flex>
                </Flex>
                <Heading4 lineClamp={4}>
                  {channel?.description ??
                    'Тестовое описание описание описание описание описание описание'}
                </Heading4>
              </Flex>
              <Flex
                justify={'space-between'}
                gap={{ base: '10px', xs: '60px' }}
                direction={{ base: 'column', xs: 'row' }}
              >
                <ChannelDescription
                  channelName={channel?.name ?? ''}
                  description={channel?.description ?? ''}
                  subscriberNumber={channel?.subsCount ?? 0}
                />
                {isOwner ? (
                  <BlueButton
                    onClick={handleSubscribe}
                    style={{
                      ...buttonStyle,
                    }}
                  >
                    {isSubscribed ? 'Отписаться' : 'Подписаться'}
                  </BlueButton>
                ) : (
                  <RedButton
                    onClick={() => {
                      if (
                        window.confirm(
                          'Вы уверены, что хотите удалить свой канал?',
                        )
                      ) {
                        const handleDelete = () => {};
                        handleDelete(); // заменить на удаление
                      }
                    }}
                  >
                    Удалить
                  </RedButton>
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
        {/*<List items={posts} renderItem={PostItem} />*/}
        <Pagination value={activePage} onChange={setPage} total={10} />
      </Flex>
    </>
  );
};
