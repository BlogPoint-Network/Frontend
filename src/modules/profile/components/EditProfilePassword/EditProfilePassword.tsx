import { FC } from 'react';
import { IUser } from '@app-types';
import { greyColor } from '@constants';
import { Flex, Grid, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import { Button } from '@ui/Button';

interface IEditProfilePasswordProps {
  user?: IUser;
}

export const EditProfilePassword: FC<IEditProfilePasswordProps> = () => {
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

  const openModal = () =>
    modals.openConfirmModal({
      title: 'Подтверждение пароля пользователя',
      closeOnConfirm: false,
      labels: { confirm: 'Продолжить', cancel: 'Отменить' },
      children: (
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
                  label={<Text size={'lg'}>Старый пароль</Text>}
                  key={form.key('oldPassword')}
                  {...form.getInputProps('oldPassword')}
                />
              </Grid.Col>
            </Grid>
          </Flex>
        </form>
      ),
      onCancel: () => console.log('Cancel'),
      onConfirm: () =>
        modals.openConfirmModal({
          title: 'Изменения пароля пользователя',
          labels: { confirm: 'Close modal', cancel: 'Back' },
          closeOnConfirm: false,
          children: (
            <form
              onSubmit={form.onSubmit(values => {
                console.log(values);
                // profile?.changeProfile(values.login, values.email, values.newPassword);
              })}
            >
              <Flex>
                <Grid>
                  <Grid.Col span={12}>
                    <TextInput
                      label={<Text size={'lg'}>Новый пароль</Text>}
                      key={form.key('newPassword')}
                      {...form.getInputProps('newPassword')}
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <TextInput
                      label={<Text size={'lg'}>Подтвердите новый пароль</Text>}
                      key={form.key('repeatPassword')}
                      {...form.getInputProps('repeatPassword')}
                    />
                  </Grid.Col>
                </Grid>
              </Flex>
            </form>
          ),
          onConfirm: modals.closeAll,
        }),
    });

  return (
    <Grid.Col span={12}>
      <Text size={'xl'}>Пароль</Text>
      <Button color={greyColor} onClick={openModal}>
        <Text size={'lg'} c="black">
          Изменить
        </Text>
      </Button>
    </Grid.Col>
  );
};
