import { useNavigate } from 'react-router-dom';
import { IChannel } from '@app-types';
import { useChannel } from '@hooks';
import { Card, Container, Flex, Image, Text } from '@mantine/core';
import Category from '@modules/channel/components/Category/Category.tsx';
import { IconAccessible } from '@tabler/icons-react';
import { BlueButton, Heading2, Heading4, RedButton } from '@ui';

export const ChannelItem = (props: IChannel) => {
  const channelManager = useChannel();
  const navigate = useNavigate();
  return (
    <Card
      radius="md"
      h={{ md: '290px', sm: 'fit-content', base: 'fit-content' }}
      w={{ md: '800px', sm: 'fit-content', base: 'fit-content' }}
      m="15px 0px"
      bd="1px solid black"
      id={'ChannelItem' + props.id}
      style={{
        display: 'flex',
        alignItems: 'start',
      }}
    >
      <Flex // картинка|текстовый блок
        direction={{ md: 'row', sm: 'column', base: 'column' }}
        gap={{ md: '40px', sm: '10px', base: '10px' }}
        justify="space-between"
        h="100%"
      >
        {/* ЗДЕСЬ ПОДПИСЧИКИ НА МАЛЫХ ЭКРАНАХ */}
        <Flex // ИконкаПодписчик|Число
          mb="10px"
          gap="10px"
          align="center"
          display={{ md: 'none', sm: 'flex', base: 'flex' }}
          justify="end"
        >
          <IconAccessible size="2.2rem" stroke={2.5} color="#3ec96f" />
          <Text size="1.2rem" style={{ whiteSpace: 'nowrap' }}>
            <i>{addSpacesToNumber(props.subsCount)}</i>
          </Text>
        </Flex>
        <Container w={{ base: '100%', sm: '100%', md: '280px' }}>
          <Image
            // minWidth: '140px',  не работает
            h={{ md: '100%', sm: '280px', base: 'auto' }}
            w={{ md: 'auto', sm: '100%', base: '100%' }}
            ml="auto"
            mr="auto"
            style={{
              maxWidth: '280px',
              border: '1px solid black',
            }}
            src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
            // src={'../../../../app/assets/images/icons/default_post.jpg'}
          ></Image>
        </Container>
        <Flex // Верхний блок|нижний блок
          direction="column"
          justify="space-between"
          style={{
            overflow: 'hidden',
            maxWidth: '430px',
          }}
        >
          <Flex // Заглавие|описание
            direction="column"
            align={{ md: 'start', sm: 'center', base: 'center' }}
          >
            <Flex direction="row" justify="space-between" gap="20px">
              <Heading2 lineClamp={1} fw="bold" td="underline">
                {props.name}
              </Heading2>
              {/* ЗДЕСЬ ПОДПИСЧИКИ НА БОЛЬШИХ ЭКРАНАХ */}
              <Flex // ИконкаПодписчик|Число
                gap="10px"
                align="center"
                display={{ md: 'flex', sm: 'none', base: 'none' }}
              >
                <IconAccessible size="2.2rem" stroke={2.5} color="#3ec96f" />
                <Text size="1.2rem" style={{ whiteSpace: 'nowrap' }}>
                  <i>{addSpacesToNumber(props.subsCount)}</i>
                </Text>
              </Flex>
            </Flex>
            <Category
              id={props.id}
              name={props.category}
              color={props.categoryColor}
            />
            <Heading4 mt={'5px'} lineClamp={3}>
              {props.description}
            </Heading4>
          </Flex>
          <Flex // Подписчики|кнопка
            justify="space-between"
            mt={{ sm: '15px', base: '15px' }}
          >
            <BlueButton onClick={() => navigate(`/channel/${props.id + ''}`)}>
              Перейти
            </BlueButton>
            <RedButton
              onClick={() => channelManager.deleteChannel(props.id + '')}
            >
              Удалить канал
            </RedButton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

function addSpacesToNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
