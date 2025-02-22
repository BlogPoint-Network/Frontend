import { IChannel } from '@app-types';
import { Card, Container, Flex, Image, Text } from '@mantine/core';
import Category from '@modules/channel/components/Category/Category.tsx';
import { IconAccessible } from '@tabler/icons-react';
import { BlueButton, Heading2, Heading4 } from '@ui';

function PopularChannelItem(props: IChannel) {
  return (
    <Card
      radius="md"
      h={{ md: '290px', sm: 'fit-content', base: 'fit-content' }}
      w={{ md: '800px', sm: 'fit-content', base: 'fit-content' }}
      m="15px 0px"
      bd="1px solid black"
      id={'PopularChannelItem' + props.id}
      style={{
        display: 'flex',
        alignItems: 'start',
      }}
    >
      <Flex // картинка|текстовый блок
        direction={{ md: 'row', sm: 'column', base: 'column' }}
        gap={{ md: '40px', sm: '10px', base: '10px' }}
        justify="space-between"
        // align={{ sm: 'center', base: 'center' }}
        h="100%"
      >
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
            src={
              props.imageURL
                ? props.imageURL
                : '../../../public/assets/images/icons/default_post.jpg'
            }
          />
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
            <Heading2 lineClamp={1} fw="bold" td="underline">
              {props.name}
            </Heading2>
            <Category name={props.category} color={props.categoryColor} />

            <Heading4 lineClamp={3} mt={'5px'}>
              {props.description}
            </Heading4>
          </Flex>
          <Flex // Подписчики|кнопка
            justify="space-between"
          >
            <Flex // ИконкаПодписчик|Число
              gap="10px"
              align="center"
            >
              <IconAccessible size="2.2rem" stroke={2.5} color="#3ec96f" />
              <Text size="1.2rem">
                <i>{addSpacesToNumber(props.subsCount)}</i>
              </Text>
            </Flex>
            <BlueButton mt="15px">Перейти</BlueButton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

function addSpacesToNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export default PopularChannelItem;
