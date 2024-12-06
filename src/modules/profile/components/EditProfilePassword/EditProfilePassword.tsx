import { FC } from 'react';
import { IUser } from '@app-types';
import { Flex, Grid, Group, Modal, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { BlueButton, GreyButton, Heading3, Heading4, Label } from '@ui';

interface IEditProfilePasswordProps {
  user?: IUser;
}

export const EditProfilePassword: FC<IEditProfilePasswordProps> = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
    },

    validate: {
      oldPassword: (value: string) =>
        value.length < 8 ? 'Пороль должен состоять из 8 символов' : null,
      newPassword: (value: string) =>
        value.length < 8 ? 'Пороль должен состоять из 8 символов' : null,
      repeatPassword: (value, values) =>
        value !== values.newPassword ? 'Пароли не совпадают' : null,
    },
  });
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Heading3>Изменение пароля пользователя</Heading3>}
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
                  label={<Heading4>Старый пароль</Heading4>}
                  key={form.key('oldPassword')}
                  {...form.getInputProps('oldPassword')}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput
                  label={<Heading4>Новый пароль</Heading4>}
                  key={form.key('newPassword')}
                  {...form.getInputProps('newPassword')}
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <TextInput
                  label={<Heading4>Подтвердите новый пароль</Heading4>}
                  key={form.key('repeatPassword')}
                  {...form.getInputProps('repeatPassword')}
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
        <Label title={'Пароль'} text="" />
        <BlueButton mt="16px" onClick={open}>
          Изменить
        </BlueButton>
      </Grid.Col>
    </>
  );
};
