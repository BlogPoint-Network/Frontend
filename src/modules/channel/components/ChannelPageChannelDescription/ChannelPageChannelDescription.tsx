import { FC } from 'react';
import { IChannel } from '@app-types';
import { Card, Flex, Image, Text } from '@mantine/core';
import { ChannelPageChannelDescriptionButtons } from '@modules/channel/components/ChannelPageChannelDescription/ChannelPageChannelDescriptionButtons.tsx';
import { IconAccessible } from '@tabler/icons-react';
import { Heading2, Heading4 } from '@ui';

export const ChannelPageChannelDescription: FC<IChannel> = props => {
  return (
    <Card
      radius="md"
      h="290px"
      m="15px 0px"
      w="80%"
      bd="1px solid black"
      id={'PopularChannelItem' + props.id}
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
            src={''}
          ></Image>
        </div>
        <Flex // Верхний блок|нижний блок
          direction="column"
          w="100%"
          justify="space-between"
        >
          <Flex // Заглавие|описание
            direction="column"
            gap="10px"
          >
            <Flex // Название|подписчики
              justify="space-between"
              gap="20px"
            >
              <Heading2 lineClamp={1}>{props.name}</Heading2>
              <Flex // ИконкаПодписчик|Число
                gap="10px"
                align="center"
              >
                <IconAccessible size="2.2rem" stroke={2.5} color="#3ec96f" />
                <Text size="1.2rem">
                  <i>{addSpacesToNumber(props.subsCount)}</i>
                </Text>
              </Flex>
            </Flex>
            <Heading4 lineClamp={4}>{props.description}</Heading4>
          </Flex>
          <ChannelPageChannelDescriptionButtons
            channelName={props.name}
            description={props.description}
            subscriberNumber={props.subsCount}
          />
        </Flex>
      </Flex>
    </Card>
  );
};

function addSpacesToNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
