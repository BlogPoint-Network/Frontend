import { FC } from 'react';
import { IUser } from '@app-types';
import { skyBlueColor } from '@constants';
import { Flex, Grid, Text, TextInput, Button as MantineButton } from '@mantine/core';
import { useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import { Button } from '@ui/Button';
import { Label } from '@ui/Label';

interface IEditProfileInfoProps {
  user?: IUser;
}

export const EditProfileInfo: FC<IEditProfileInfoProps> = props => {
  const form = useForm({
    initialValues: {
      login: props?.user?.login ?? '44',
      email: props?.user?.email ?? '55',
    },

    validate: {
      login: value =>
        value.length < 5 ? 'Логин должен состоять болше чем 6 символов' : null,
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Неправильная почта'),
    },
  });

  const openModal = () =>
    modals.open({
      title: 'Изменения полей пользователя',
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
                  label={<Text size={'lg'}>Логин</Text>}
                  key={form.key('login')}
                  {...form.getInputProps('login')}
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <TextInput
                  label={<Text size={'lg'}>Почта</Text>}
                  key={form.key('email')}
                  {...form.getInputProps('email')}
                />
              </Grid.Col>
              <MantineButton fullWidth onClick={() => modals.closeAll()} mt="md">
                Submit
              </MantineButton>
            </Grid>
          </Flex>
        </form>
      ),
    });

  return (
    <>
      <Text size="xl" mb={10}>
        Информация о пользователе
      </Text>

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
        <Button color={skyBlueColor} onClick={openModal}>
          <Text size={'lg'}>Изменить</Text>
        </Button>
        <Button color="rgba(255, 99, 99, 1)">
          <Text size={'lg'} c="black">
            Удалить профиль
          </Text>
        </Button>
      </Grid.Col>
    </>
  );
};
