import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IChannel, IPost } from '@app-types';
import { greyColor, skyBlueColor } from '@constants';
import { Card, Flex, Image, Pagination, Text } from '@mantine/core';
import { ChannelDescription } from '@modules/channel/components/ChannelDescription/ChannelDescription.tsx';
import { useChannelById } from '@modules/channel/hooks/useChannelById.ts';
import { usePosts } from '@modules/posts/hooks/usePosts.ts';
import { IconAccessible } from '@tabler/icons-react';
import { BlueButton, CommonFrame, Heading2, Heading4 } from '@ui';
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

  const isAdmin: boolean = false;
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
          h="290px"
          m="15px 0px"
          w="80%"
          bd="1px solid black"
          id={'PopularChannelItem' + (channel?.id ?? '')}
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
                  <Heading2 lineClamp={1}>{channel?.name ?? ''}</Heading2>
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
                      <i>{addSpacesToNumber(channel?.subsCount ?? 0)}</i>
                    </Text>
                  </Flex>
                </Flex>
                <Heading4 lineClamp={4}>{channel?.description ?? ''}</Heading4>
              </Flex>
              <ChannelDescription
                channelName={channel?.name ?? ''}
                description={channel?.description ?? ''}
                subscriberNumber={channel?.subsCount ?? 0}
              />
              <div style={{ float: 'right' }}>
                <BlueButton
                  onClick={handleSubscribe}
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
        <BlueButton onClick={() => navigate(`/channel/${id + ''}/create-post`)}>
          Создать пост
        </BlueButton>
        {/*<List items={posts} renderItem={PostItem} />*/}
        <Pagination value={activePage} onChange={setPage} total={10} />
      </Flex>
    </>
  );
};
