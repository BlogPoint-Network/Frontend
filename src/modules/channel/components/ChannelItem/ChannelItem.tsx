import { Card, Flex, Image, Text } from '@mantine/core';
import { IconAccessible } from '@tabler/icons-react';
import { BlueButton, Heading2, Heading4 } from '@ui';
import { IChannel } from '@app-types';

export const ChannelItem = (props: IChannel) => {
  return (
    <Card
      radius="md"
      h="290px"
      w="800px"
      m="15px 0px"
      bd="1px solid black"
      id={'ChannelItem' + props.id}
      style={{
        display: 'flex',
        alignItems: 'start',
      }}
    >
      <Flex // картинка|текстовый блок
        direction="row"
        gap="40px"
        justify="space-between"
        h="100%"
      >
        <div style={{ width: '280px' }}>
          <Image
            // minWidth: '140px',  не работает
            h="100%"
            w="auto"
            ml="auto"
            mr="auto"
            style={{
              maxWidth: '280px',
              border: '1px solid black',
            }}
            src={
              '../../../public/assets/images/icons/default_post.jpg'
              // props.imageURL
              //   ? props.imageURL
              //   : '../../../public/assets/images/icons/default_post.jpg'
            }
          ></Image>
        </div>
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
            gap="10px"
          >
            <Heading2 lineClamp={1}>{props.name}</Heading2>

            <Heading4 lineClamp={4} fw="bold">
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
            <BlueButton>Перейти</BlueButton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

function addSpacesToNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
