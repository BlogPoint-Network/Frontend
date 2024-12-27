import { FC, useState } from 'react';
import { greyColor, skyBlueColor } from '@constants';
import { Flex, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  BlueButton,
  GreyButton,
  Heading1,
  Heading2,
  Heading4,
  Line,
} from '@ui';

interface IChannelMyChannelDescriptionButtonsProps {
  channelName: string;
  description: string;
  subscriberNumber: number;
}

export const ChannelPageChannelDescriptionButtons: FC<
  IChannelMyChannelDescriptionButtonsProps
> = props => {
  const isAdmin: boolean = false;

  // Состояние для отслеживания текста и стилей кнопки
  const [isSubscribed, setIsSubscribed] = useState(false);

  // const form = useForm({
  //   initialValues: {
  //     login: props?.user?.login ?? '',
  //     email: props?.user?.email ?? '',
  //   },
  //
  //   validate: {
  //     login: value =>
  //       value.length < 5 ? 'Логин должен состоять болше чем 6 символов' : null,
  //     email: value => (/^\S+@\S+$/.test(value) ? null : 'Неправильная почта'),
  //   },
  // });

  const handleSubscribe = () => {
    setIsSubscribed(prev => !prev); // Переключение состояния
  };

  const [opened, { open, close }] = useDisclosure(false);

  // Динамическое применение стилей
  const buttonStyle = isSubscribed
    ? { backgroundColor: greyColor, color: 'black' }
    : { backgroundColor: skyBlueColor, color: 'white' };

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

      <Flex justify="space-between">
        <GreyButton onClick={open}>Подробнее</GreyButton>
        {isAdmin ? (
          <BlueButton
            onClick={handleSubscribe}
            style={{ minWidth: '160px', ...buttonStyle }}
          >
            {isSubscribed ? 'Отписаться' : 'Подписаться'}
          </BlueButton>
        ) : (
          <BlueButton
            onClick={handleSubscribe}
            style={{ minWidth: '160px', ...buttonStyle }}
          >
            Редактировать
          </BlueButton>
        )}
      </Flex>
    </>
  );
};
