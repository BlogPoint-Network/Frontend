import { FC } from 'react';
import { Card, Flex, Image, Text } from '@mantine/core';
import { IconAccessible } from '@tabler/icons-react';
import { FullWidthBox } from '@ui';

interface IChannelMyChannelDescriptionProps {
  id: number;
  channelName: string;
  description: string;
  subscriberNumber: number;
  imageURL?: string | undefined;
}

export const ChannelMyChannelDescription: FC<
  IChannelMyChannelDescriptionProps
> = props => {
  return (
    <FullWidthBox>
      <Flex direction="column" gap={'lg'} align={'center'}>
        <Text
          mt="sm"
          style={{
            fontSize: '30px',
            fontWeight: 'bold',

            // для переноса строк
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {props.channelName}
        </Text>
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
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  height: '100%',
                  width: 'auto',
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
              <Text
                style={{
                  // для переноса строк
                  fontSize: '18px',

                  display: '-webkit-box',

                  overflowY: 'scroll',
                  overflowX: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'normal',
                }}
              >
                {props.description}
              </Text>
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
                <Text
                  style={{
                    textOverflow: 'ellipsis',
                    fontSize: '1.2rem',
                  }}
                >
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
