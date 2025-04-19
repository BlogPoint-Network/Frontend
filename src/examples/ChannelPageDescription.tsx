import { FC } from 'react';
import { Card, Flex, Image, Text } from '@mantine/core';
import { ChannelPageChannelDescriptionButtons } from './ChannelDescriptionOld/ChannelPageChannelDescriptionButtons.tsx';
import { IconAccessible } from '@tabler/icons-react';
import { Heading2, Heading4 } from '@ui';
import { addSpacesToNumber } from '@utils';

interface IChannelMyChannelDescriptionProps {
  id: number;
  channelName: string;
  description: string;
  subscriberNumber: number;
  imageURL: string;
}

export const ChannelPageChannelDescription: FC<
  IChannelMyChannelDescriptionProps
> = props => {
  return (
    <Card
      radius="md"
      h="290px"
      m="15px 0px"
      w="80%"
      bd="1px solid black"
      id={'PopularChannelItem' + props.id}
      style={{
        minWidth: '800px',
        // maxWidth: '1200px',
        display: 'flex',
        alignItems: 'start',
      }}
    >
      <Flex // картинка|текстовый блок
        w="100%"
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
              borderRadius: '30px',
            }}
            src={props.imageURL}
          ></Image>
        </div>
        <Flex // Верхний блок|нижний блок
          direction="column"
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
              <Heading2 lineClamp={1}>{props.channelName}</Heading2>
              <Flex // ИконкаПодписчик|Число
                gap="10px"
                align="center"
              >
                <IconAccessible size="2.2rem" stroke={2.5} color="#3ec96f" />
                <Text size="1.2rem">
                  <i>{addSpacesToNumber(props.subscriberNumber)}</i>
                </Text>
              </Flex>
            </Flex>
            <Heading4 lineClamp={4}>{props.description}</Heading4>
          </Flex>
          <ChannelPageChannelDescriptionButtons
            channelName={props.channelName}
            description={props.description}
            subscriberNumber={props.subscriberNumber}
          />
        </Flex>
      </Flex>
    </Card>
  );
};


