import { FC } from 'react';
import { IUser } from '@app-types';
import { greyColor, skyBlueColor } from '@constants';
import { Flex, Grid, Group, Modal, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { Button, Heading3, Heading4, Label } from '@ui';

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
            <Button
              onClick={() => {
                form.reset();
                close();
              }}
              color={greyColor}
            >
              Отменить
            </Button>
            <Button type="submit" color={skyBlueColor}>
              Сохранить
            </Button>
          </Group>
        </form>
      </Modal>

      <Grid.Col span={12}>
        <Label title={'Пароль'} text="" />
        <Button color={greyColor} onClick={open}>
          <Text size={'lg'} c="black">
            Изменить
          </Text>
        </Button>
      </Grid.Col>
    </>
  );
};
