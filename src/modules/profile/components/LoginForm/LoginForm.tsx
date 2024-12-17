import { useContext } from 'react';
import { skyBlueColor } from '@constants';
import { Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  validationLogin,
  validationPassword,
} from '@modules/profile/constants/validation.ts';
import { Button, FormBox } from '@ui';

import { ProfileContext } from '../../../../app/context';

export const LoginForm = () => {
  const profile = useContext(ProfileContext);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { login: '', password: '' },
    validate: {
      login: validationLogin,
      password: validationPassword,
    },
  });

  return (
    <FormBox>
      <h1>Авторизация пользователя</h1>
      <Group justify="center" grow>
        <form
          onSubmit={form.onSubmit(values => {
            profile?.loginProfile(values.login, values.password);
          })}
        >
          <TextInput
            size="md"
            mt="sm"
            radius="lg"
            label={
              <Text size={'xl'} mb={10}>
                Логин
              </Text>
            }
            key={form.key('login')}
            {...form.getInputProps('login')}
          />
          <PasswordInput
            size="md"
            mt="sm"
            radius="lg"
            label={
              <Text size={'xl'} mb={10}>
                Пароль
              </Text>
            }
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <Button type="submit" mt="sm" color={skyBlueColor}>
            <Text size={'lg'}>Пароль</Text>
          </Button>
        </form>
      </Group>
    </FormBox>
  );
};
