import { FC } from 'react';
import { Card, Flex, Image, Text } from '@mantine/core';
import { IconAccessible } from '@tabler/icons-react';
import { FullWidthBox, Heading1, Heading4 } from '@ui';

interface IChannelMyChannelDescriptionProps {
  id: number;
  channelName: string;
  description: string;
  subscriberNumber: number;
  imageURL?: string | undefined;
}

export const ChannelPageChannelDescription: FC<
  IChannelMyChannelDescriptionProps
> = props => {
  return (
    <FullWidthBox>
      <Flex direction="column" gap={'lg'} align={'center'}>
        <Heading1 mt="sm" lineClamp={1}>
          {props.channelName}
        </Heading1>
        <Card
          p="lg"
          radius="md"
          h="280px"
          w="800px"
          m="15px 0px"
          bd="1px solid black"
          id={'PopularChannelItem' + props.id}
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
                ml="auto"
                mr="auto"
                h="100%"
                w="auto"
                style={{
                  maxWidth: '280px', // для
                  border: '1px solid black',
                }}
                src={
                  props.imageURL
                    ? props.imageURL
                    : '../../../public/assets/images/icons/default_post.jpg'
                }
              ></Image>
            </div>
            <Flex // Верхний блок|нижний блок
              direction="column"
              justify="space-between"
              gap="30px"
              style={{
                overflow: 'hidden',
                maxWidth: '430px',
              }}
            >
              <Heading4
                style={{
                  overflowY: 'scroll',
                  overflowX: 'hidden',
                }}
              >
                {props.description}
              </Heading4>
              <Flex // ИконкаПодписчик|Число
                gap="10px"
                align="center"
              >
                <IconAccessible
                  size="2.2rem"
                  stroke={2.5}
                  // color={skyBlueColor}
                  color="#3ec96f"
                />
                <Text size="1.2rem">
                  <i>{addSpacesToNumber(props.subscriberNumber)}</i>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </FullWidthBox>
  );
};

function addSpacesToNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
