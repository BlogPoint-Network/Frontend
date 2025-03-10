import { FC } from 'react';
import { Flex, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { GreyButton, Heading1, Heading2, Heading4, Line } from '@ui';

interface IChannelMyChannelDescriptionButtonsProps {
  channelName: string;
  description: string;
  subscriberNumber: number;
}

export const ChannelDescription: FC<
  IChannelMyChannelDescriptionButtonsProps
> = props => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        padding="40px"
        size="80%"
        opened={opened}
        onClose={close}
        title={<Heading1>Информация о канале</Heading1>}
        // для отступа снизу при прокрутке*
      >
        <Flex
          style={{ overflowX: 'hidden' }}
          justify="center"
          gap="md"
          direction="column"
        >
          <Heading4 fs="italic">
            Количество подписчиков: {props.subscriberNumber}
          </Heading4>
          <Line h="2px" />
          <Heading2>{props.channelName}</Heading2>
          <Line h="8px" />
          <Heading4>{props.description}</Heading4>
        </Flex>
      </Modal>

      <GreyButton
        pos={'absolute'}
        style={{ left: '0px', bottom: '0px' }}
        onClick={open}
      >
        Подробнее
      </GreyButton>
    </>
  );
};
