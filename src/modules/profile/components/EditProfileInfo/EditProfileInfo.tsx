import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '@app-types';
import { Flex, Group, Modal, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import {
  BlueButton,
  GreyButton,
  Heading2,
  Heading3,
  Heading4,
  Label,
  RedButton,
} from '@ui';

import { ProfileContext } from '../../../../app/context';

interface IEditProfileInfoProps {
  user?: IUser;
}

export const EditProfileInfo: FC<IEditProfileInfoProps> = props => {
  const [opened, { open, close }] = useDisclosure(false);
  const profile = useContext(ProfileContext);
  const navigate = useNavigate();
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
        title={<Heading3>Изменения информации пользователя</Heading3>}
      >
        <form
          onSubmit={form.onSubmit(values => {
            profile?.editProfileInfo(values.login, values.email);
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
          <RedButton
            onClick={() => profile?.deleteProfile().then(() => navigate('/'))}
          >
            Удалить профиль
          </RedButton>
        </Flex>
      </Flex>

      {/*<Grid.Col span={12}>*/}
      {/*  <Label title={'Другая информация'} text={''} />*/}
      {/*</Grid.Col>*/}



    </>
  );
};
