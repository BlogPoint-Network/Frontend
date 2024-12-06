import { FC } from 'react';
import { IUser } from '@app-types';
import { Flex, Grid, Group, Modal, TextInput } from '@mantine/core';
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

interface IEditProfileInfoProps {
  user?: IUser;
}

export const EditProfileInfo: FC<IEditProfileInfoProps> = props => {
  const [opened, { open, close }] = useDisclosure(false);
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
            console.log(values);
            // profile?.changeProfile(values.login, values.email, values.newPassword);
          })}
        >
          <Flex justify="flex-center" align="center" direction="column">
            <Grid w="auto" ml={20} mr={20}>
              <Grid.Col span={12}>
                <TextInput
                  label={<Heading4>Логин</Heading4>}
                  key={form.key('login')}
                  {...form.getInputProps('login')}
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <TextInput
                  label={<Heading4>Почта</Heading4>}
                  key={form.key('email')}
                  {...form.getInputProps('email')}
                />
              </Grid.Col>
            </Grid>
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

      <Grid.Col span={12}>
        <Heading2>Информация о пользователе</Heading2>
      </Grid.Col>
      <Grid.Col span={12}>
        <Label title={'Логин'} text={props.user ? props.user?.login : ''} />
      </Grid.Col>

      <Grid.Col span={12}>
        <Label title={'Почта'} text={props.user ? props.user?.email : ''} />
      </Grid.Col>

      <Grid.Col span={12}>
        <Label title={'Другая информация'} text={''} />
      </Grid.Col>

      <Grid.Col span={12}>
        <BlueButton onClick={open}>Изменить</BlueButton>
        <RedButton>Удалить профиль</RedButton>
      </Grid.Col>
    </>
  );
};
