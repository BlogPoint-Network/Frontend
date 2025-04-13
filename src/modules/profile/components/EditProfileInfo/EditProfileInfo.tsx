import { FC } from 'react';
import { IUser } from '@app-types';
import { Flex, Group, Modal, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useProfileDelete } from '@modules/profile/hooks/useProfileDelete.ts';
import {
  BlueButton,
  GreyButton,
  Heading2,
  Heading3,
  Heading4,
  Label,
  RedButton,
} from '@ui';

import { useProfileEditInfo } from '../../hooks/useProfileEditInfo';

interface IEditProfileInfoProps {
  user?: IUser;
}

export const EditProfileInfo: FC<IEditProfileInfoProps> = props => {
  const [opened, { open, close }] = useDisclosure(false);
  const profileEditInfo = useProfileEditInfo();
  const profileDelete = useProfileDelete();
  const form = useForm({
    initialValues: {
      login: props?.user?.login ?? '',
      email: props?.user?.email ?? '',
    },

    validate: {
      login: value =>
        value.length < 5 ? 'Логин должен состоять болше чем 6 символов' : null,
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Неправильная почта'),
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Heading3>Изменение информации пользователя</Heading3>}
      >
        <form
          onSubmit={form.onSubmit(values => {
            profileEditInfo.mutate(values);
            console.log(values);
          })}
        >
          <Flex gap={'10px'} direction="column">
            <TextInput
              label={<Heading4>Логин</Heading4>}
              key={form.key('login')}
              {...form.getInputProps('login')}
            />
            <TextInput
              label={<Heading4>Почта</Heading4>}
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
          </Flex>
          <Group mt="lg" justify="flex-end">
            <GreyButton
              onClick={() => {
                form.reset();
                close();
              }}
            >
              Отменить
            </GreyButton>
            <BlueButton type="submit">Сохранить</BlueButton>
          </Group>
        </form>
      </Modal>

      <Flex direction={'column'} gap={'15px'} mb={'20px'}>
        <Heading2>Информация о пользователе</Heading2>
        <Label title={'Логин'} text={props.user ? props.user?.login : ''} />
        <Label title={'Почта'} text={props.user ? props.user?.email : ''} />
        <Flex>
          <BlueButton onClick={open}>Изменить</BlueButton>
          <RedButton onClick={() => profileDelete.mutate()}>
            Удалить профиль
          </RedButton>
        </Flex>
      </Flex>
    </>
  );
};
